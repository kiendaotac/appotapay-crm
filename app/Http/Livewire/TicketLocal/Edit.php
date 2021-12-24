<?php

namespace App\Http\Livewire\TicketLocal;

use App\Enums\{TicketPriorityEnum, TicketStatusEnum, TicketVariantEnum};
use App\Models\Ticket;
use App\Repositories\Contracts\{ProductRepository, UserRepository};
use App\Services\Contracts\TicketLocalService;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Livewire\{Component, WithFileUploads};

class Edit extends Component
{
    use WithFileUploads, AuthorizesRequests;

    public Ticket $ticket;
    public $types, $statuses, $priorities, $variants, $products, $agents;
    public $comments;
    public $newComment = '';
    public $photos = [];
    public $activities = [];
    public $assignees = [];
    public string $tags = '';
    protected $rules = [
        'ticket.is_private' => '',
        'ticket.status' => '',
        'ticket.priority' => '',
        'ticket.variant' => '',
        'ticket.product_id' => '',
        'ticket.name' => 'required',
        'ticket.description' => '',
        'ticket.customer_name' => '',
        'ticket.customer_email' => 'nullable|email',
        'ticket.customer_phone' => '',
    ];

    public function mount(UserRepository $userRepository, ProductRepository $productRepository)
    {
        $this->statuses = TicketStatusEnum::GROUP_LOCAL;
        $this->priorities = TicketPriorityEnum::VALUE;
        $this->variants = TicketVariantEnum::GROUP_LOCAL;
        $this->agents = $userRepository->all();
        $this->products = $productRepository->all();
        $this->assignees = $this->ticket->assignees()->pluck('id');
        $this->tags = $this->ticket->tags()->get()->pluck('name')->implode(',');
        $this->loadActivities();
    }

    public function render()
    {
        return view('livewire.ticket-local.edit');
    }

    public function save(TicketLocalService $ticketLocalService)
    {
        $this->authorize('ticket-local-update', $this->ticket);
        $this->validate();
        $this->ticket = $ticketLocalService->update($this->ticket->getDirty(), $this->ticket->id);
        $ticketLocalService->assignManually($this->assignees, $this->ticket);
        $ticketLocalService->syncTags($this->tags, $this->ticket);
        $this->loadActivities();
        $this->dispatchBrowserEvent('notify', ['type' => 'success', 'message' => __('Updated.')]);
    }

    public function sendComment(TicketLocalService $ticketLocalService)
    {
        if (strlen($this->newComment)) {
            $ticketLocalService->addComment($this->newComment, $this->ticket);
        }
        if (count($this->photos)) {
            $ticketLocalService->addImageComment($this->photos, $this->ticket);
        }
        $this->reset('newComment', 'photos');
        $this->emit("ticket-comment-added-{$this->ticket->id}");
    }

    public function loadActivities()
    {
        $this->activities = $this->ticket->activities()->with(['causer'])->latest('id')->limit(10)->get();
    }

    public function getAssigneeDecorationProperty(UserRepository $userRepository)
    {
        return collect($this->assignees)->map(function ($agentId) use ($userRepository) {
            $agent = $userRepository->find($agentId);
            return "<div>$agent->email</div>";
        })->implode("");
    }
}
