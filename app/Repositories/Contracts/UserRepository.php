<?php

namespace App\Repositories\Contracts;

use Prettus\Repository\Contracts\RepositoryInterface;

/**
 * Interface UserRepository.
 *
 * @package namespace App\Repositories\Contracts;
 * @see \App\Repositories\Eloquent\UserRepositoryEloquent
 */
interface UserRepository extends RepositoryInterface
{
    public function filter(string $search);
}
