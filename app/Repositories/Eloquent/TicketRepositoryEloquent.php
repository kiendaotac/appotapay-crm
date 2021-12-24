<?php

namespace App\Repositories\Eloquent;

use App\Libraries\Repository\BaseRepository;
use App\Repositories\Contracts\TicketRepository;
use App\Models\Ticket;

/**
 * Class TicketRepositoryEloquent.
 *
 * @package namespace App\Repositories\Eloquent;
 */
class TicketRepositoryEloquent extends BaseRepository implements TicketRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return Ticket::class;
    }
}
