<?php

namespace App\Events;

use App\Models\Ticket;
use App\Notifications\TicketActive as NotificationsTicketActive;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Notification;

class TicketActive
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $activity;
    public $ticket;

    public function __construct($activity, Ticket $ticket)
    {
        $this->activity = $activity;
        $this->ticket = $ticket;
        Notification::send($ticket->assignees()->get(), new NotificationsTicketActive($activity, $ticket));
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new PrivateChannel('channel-name');
    }
}
