<?php

namespace App\Services\Businesses;

use App\Enums\TicketTypeEnum;
use App\Models\Ticket;
use App\Repositories\Contracts\TicketRepository;
use App\Services\Contracts\TicketCallService;
use App\Services\Traits\ManageTicket;

class TicketCallServiceBusiness implements TicketCallService
{
    use ManageTicket;

    protected $ticketRepository;

    public function __construct(TicketRepository $ticketRepository)
    {
        $this->ticketRepository = $ticketRepository;
    }

    public function updateViaCallId(array $attributes, string $callId): Ticket
    {
        $ticket = $this->ticketRepository->firstOrNew(['call_id' => $callId]);
        if (isset($attributes['recordName']) && !empty($attributes['recordName'])) {
            $attributes['properties->record_name'] = $attributes['recordName'];
            $this->addRecordCallComment($attributes['recordName'], $ticket);
        }
        if (isset($attributes['callDuration']) && !empty($attributes['callDuration'])) {
            $attributes['properties->call_duration'] = $attributes['callDuration'];
        }
        $ticket = $this->ticketRepository->update($attributes, $ticket->id);
        $ticketKeyword = collect($attributes)
            ->only(Ticket::SEARCHABLE_FIELD)
            ->implode(' ');
        $this->appendSearchKeyword($ticketKeyword, $ticket);        
        return $ticket;
    }

    public function errorType(): string
    {
        return TicketTypeEnum::CALL;
    }
}
