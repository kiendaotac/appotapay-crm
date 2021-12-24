<?php

namespace App\Services\Contracts;

use App\Models\Ticket;
use App\Repositories\Contracts\TicketRepository;

interface TicketService
{
    public function create(array $attributes): Ticket;
    public function update(array $attributes, $ticketId): Ticket;
    public function delete($ticketId);
    /**
     * @param int|\App\Models\Ticket $ticket
     */
    public function find($ticket);
    public function query(): TicketRepository;
    public function addComment(string $comment, Ticket $ticket, int $causerId = null);
    public function addSystemComment(string $comment, Ticket $ticket);
    public function addImageComment($image, Ticket $ticket);
    public function assignManually($assignees = [], Ticket $ticket);
    public function errorType(): string;
    public function syncTags(string $tags, Ticket $ticket);
}
