<?php

namespace App\Services\Businesses;

use App\Enums\TicketTypeEnum;
use App\Repositories\Contracts\TicketRepository;
use App\Services\Contracts\TicketLocalService;
use App\Services\Traits\ManageTicket;

class TicketLocalServiceBusiness implements TicketLocalService
{
    use ManageTicket;

    protected $ticketRepository;

    public function __construct(TicketRepository $ticketRepository)
    {
        $this->ticketRepository = $ticketRepository;
    }

    public function errorType(): string
    {
        return TicketTypeEnum::LOCAL;
    }
}
