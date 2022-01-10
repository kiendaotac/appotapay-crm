<?php

namespace App\Http\Livewire\TicketLocal;

use App\Enums\TicketStatusEnum;
use App\Models\Ticket;
use Livewire\Component;

class TicketStatus extends Component
{
    public Ticket $ticket;
    public string $status;
    public string $currentStatus;
    public array $statuses;

    public function mount()
    {
        $this->statuses = TicketStatusEnum::GROUP_LOCAL;
        $this->status = $this->ticket->status;
    }

    public function updatedStatus()
    {
        $this->ticket->update(['status' => $this->status]);
    }
    public function render()
    {
        return view('livewire.ticket-local.ticket-status');
    }
}
