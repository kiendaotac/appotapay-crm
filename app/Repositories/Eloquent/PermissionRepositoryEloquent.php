<?php

namespace App\Repositories\Eloquent;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Repositories\Contracts\PermissionRepository;
use App\Models\Permission;
use Illuminate\Support\Collection;
use Prettus\Repository\Contracts\CacheableInterface;
use Prettus\Repository\Traits\CacheableRepository;

/**
 * Class PermissionRepositoryEloquent.
 *
 * @package namespace App\Repositories\Eloquent;
 */
class PermissionRepositoryEloquent extends BaseRepository implements PermissionRepository, CacheableInterface
{
    use CacheableRepository;

    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return Permission::class;
    }

    public function filter(string $search)
    {
        $this->model = $this->model->when($search ?? null, function ($query) use ($search) {
            $query->where('name', 'like', "%$search%")
                ->orWhere('display_name', 'like', "%$search%")
                ->orWhere('description', 'like', "%$search%");
        });
        return $this;
    }

    public function mapAssigned(Collection $roleIds): Collection
    {
        return $this->orderBy('name')->all(['id', 'name', 'display_name'])
            ->map(function ($permission) use ($roleIds) {
                $permission->assigned = $roleIds->contains($permission->id);
                return $permission;
            });
    }

    public function group(Collection $roleIds): Collection
    {
        return $this->orderBy('name')->all(['id', 'name', 'display_name'])
            ->mapToGroups(function ($permission) {
                $arrName = explode('-', $permission->name);
                $key = $arrName[0];
                return [$key => $permission];
            });
    }
}
