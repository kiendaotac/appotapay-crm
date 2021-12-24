<?php

namespace App\Http\Livewire\TicketCall;

use App\Enums\{TicketPriorityEnum, TicketStatusEnum, TicketVariantEnum};
use App\Models\Ticket;
use App\Repositories\Contracts\{ProductRepository, UserRepository};
use App\Services\Contracts\TicketCallService;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Livewire\{Component, WithFileUploads};

/**
 * @property TicketCallService $ticketCallService
 */
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
        return view('livewire.ticket-call.edit');
    }

    public function save()
    {
        $this->authorize('ticket-call-update', $this->ticket);
        $this->validate();
        $this->ticket = $this->ticketCallService->update($this->ticket->getDirty(), $this->ticket->id);
        $this->ticketCallService->assignManually($this->assignees, $this->ticket);
        $this->ticketCallService->syncTags($this->tags, $this->ticket);
        $this->loadActivities();
        $this->dispatchBrowserEvent('notify', ['type' => 'success', 'message' => __('Updated.')]);
    }

    public function sendComment()
    {
        if (strlen($this->newComment)) {
            $this->ticketCallService->addComment($this->newComment, $this->ticket);
        }
        if (count($this->photos)) {
            $this->ticketCallService->addImageComment($this->photos, $this->ticket);
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

    public function getTicketCallServiceProperty()
    {
        return app(TicketCallService::class);
    }
}
