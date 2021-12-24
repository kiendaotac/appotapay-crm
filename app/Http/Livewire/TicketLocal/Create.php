<?php

namespace App\Http\Livewire\TicketLocal;

use App\Enums\{TicketStatusEnum, TicketPriorityEnum, TicketVariantEnum};
use App\Models\Ticket;
use App\Repositories\Contracts\{ProductRepository, UserRepository};
use App\Services\Contracts\TicketLocalService;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Livewire\{Component, WithFileUploads};

class Create extends Component
{
    use WithFileUploads, AuthorizesRequests;

    public $types, $statuses, $priorities, $variants, $products, $agents;
    public $ticket;
    public $photos = [];
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
        'photos.*' => 'nullable|image',
    ];

    public function mount(UserRepository $userRepository, ProductRepository $productRepository)
    {
        $this->statuses = TicketStatusEnum::GROUP_LOCAL;
        $this->priorities = TicketPriorityEnum::VALUE;
        $this->variants = TicketVariantEnum::GROUP_LOCAL;
        $this->agents = $userRepository->all(['id', 'name', 'email']);
        $this->products = $productRepository->all(['id', 'name', 'code']);
        $this->ticket = new Ticket;
        $this->ticket->fill([
            'status' => TicketStatusEnum::FRESH,
            'priority' => TicketPriorityEnum::MEDIUM,
            'variant' => TicketVariantEnum::LOCAL_OTHER,
            'product_id' => $this->products->first()->id ?? null,
        ]);
        $this->assignees = [auth()->id()];
    }

    public function render()
    {
        return view('livewire.ticket-local.create');
    }

    public function save(TicketLocalService $ticketLocalService)
    {
        $this->authorize('ticket-local-create');
        $this->validate();
        $ticket = $ticketLocalService->create($this->ticket->toArray());
        if (!$ticket) {
            $this->dispatchBrowserEvent('notify', ['type' => 'danger', 'message' => __('Failed.')]);
            return;
        }
        $ticketLocalService->addImageComment($this->photos, $ticket);
        $ticketLocalService->assignManually($this->assignees, $ticket);
        $ticketLocalService->syncTags($this->tags, $ticket);
        return redirect()->route('ticket.locals.edit', $ticket->id);
    }

    public function resetPhoto()
    {
        $this->ticket->photos = [];
    }

    public function getAssigneeDecorationProperty(UserRepository $userRepository)
    {
        return collect($this->assignees)->map(function ($agentId) use ($userRepository) {
            $agent = $userRepository->find($agentId);
            return "<div>$agent->email</div>";
        })->implode("");
    }
}
