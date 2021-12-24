<?php

namespace App\Repositories\Eloquent;

use Prettus\Repository\Eloquent\BaseRepository;
use App\Repositories\Contracts\RoleRepository;
use App\Models\Role;
use Prettus\Repository\Contracts\CacheableInterface;
use Prettus\Repository\Traits\CacheableRepository;

/**
 * Class RoleRepositoryEloquent.
 *
 * @package namespace App\Repositories\Eloquent;
 */
class RoleRepositoryEloquent extends BaseRepository implements RoleRepository, CacheableInterface
{
    use CacheableRepository;

    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return Role::class;
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
}
