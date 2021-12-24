<?php

namespace App\Repositories\Contracts;

use Prettus\Repository\Contracts\RepositoryInterface;
use Illuminate\Support\Collection;

/**
 * Interface PermissionRepository.
 *
 * @package namespace App\Repositories\Contracts;
 * @see \App\Repositories\Eloquent\PermissionRepositoryEloquent
 */
interface PermissionRepository extends RepositoryInterface
{
    public function filter(string $search);
    public function mapAssigned(Collection $roleIds): Collection;
    public function group(Collection $roleIds): Collection;
}
