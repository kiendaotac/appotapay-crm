<?php

namespace App\Repositories\Contracts;

use Prettus\Repository\Contracts\RepositoryInterface;

/**
 * Interface RoleRepository.
 *
 * @package namespace App\Repositories\Contracts;
 * @see \App\Repositories\Eloquent\RoleRepositoryEloquent
 */
interface RoleRepository extends RepositoryInterface
{
    public function filter(string $search);
}
