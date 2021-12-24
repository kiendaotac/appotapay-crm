<?php

namespace App\Http\Livewire\TicketCall;

use App\Models\Ticket;
use App\Services\Contracts\TicketCallService;
use Livewire\Component;

class Show extends Component
{
    public Ticket $ticket;
    public $activities;

    protected $listeners = [
        'show' => 'show',
    ];

    public function render()
    {
        return view('livewire.ticket-call.show');
    }

    public function show($ticketId, TicketCallService $ticketCallService)
    {
        $this->ticket = $ticketCallService->find($ticketId);
        $this->activities = optional($this->ticket)->activities()->with(['causer'])->latest('id')->limit(10)->get();
    }
}
