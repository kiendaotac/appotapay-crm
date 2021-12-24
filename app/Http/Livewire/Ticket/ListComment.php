<?php

namespace App\Http\Livewire\Ticket;

use App\Models\Ticket;
use Livewire\Component;

class ListComment extends Component
{
    public $ticket;
    public $comments = [];

    protected function getListeners()
    {
        return [
            'refresh-comment-ticket' => 'renew',
            "echo:ticket-comment-added-{$this->ticket->id},TicketCommentAdded" => 'renew',
        ];
    }

    public function mount(Ticket $ticket)
    {
        $this->ticket = $ticket;
        $this->renew();
    }

    public function render()
    {
        return view('livewire.ticket.list-comment');
    }

    public function renew()
    {
        $this->comments = $this->ticket->comments()->get()->toArray();
    }
}
