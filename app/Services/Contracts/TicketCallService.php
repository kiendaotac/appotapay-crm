<?php

namespace App\Services\Contracts;

use App\Models\Ticket;

/**
 * @see \App\Services\Businesses\TicketCallServiceBusiness
 */
interface TicketCallService extends TicketService
{
    function updateViaCallId(array $attributes, string $callId): Ticket;
}
