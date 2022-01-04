<?php

namespace App\Http\Livewire\TicketLocal;

use App\Models\Ticket;
use App\Services\Contracts\TicketLocalService;
use Livewire\Component;

class TicketShow extends Component
{
    public Ticket $ticket;
    public $activities;

    protected $listeners = [
        'show' => 'show',
    ];

    public function render()
    {
        return view('livewire.ticket-local.ticket-show');
    }

    public function show($ticketId, TicketLocalService $ticketLocalService)
    {
        dd($ticketId);
        $this->ticket = $ticketLocalService->find($ticketId);
        $this->activities = optional($this->ticket)->activities()->with(['causer'])->latest('id')->limit(10)->get();
    }
}