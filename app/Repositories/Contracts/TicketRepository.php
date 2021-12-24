<?php

namespace App\Repositories\Contracts;

use App\Libraries\Repository\RepositoryInterface;
use Prettus\Repository\Contracts\RepositoryCriteriaInterface;

/**
 * Interface TicketRepository.
 *
 * @package namespace App\Repositories\Contracts;
 * @see \App\Repositories\Eloquent\TicketRepositoryEloquent
 */
interface TicketRepository extends RepositoryInterface, RepositoryCriteriaInterface
{
    //
}
