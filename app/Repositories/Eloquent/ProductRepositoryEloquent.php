<?php

namespace App\Repositories\Eloquent;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Models\Product;
use App\Repositories\Contracts\ProductRepository;
use App\Validators\ProductValidator;
use Prettus\Repository\Contracts\CacheableInterface;
use Prettus\Repository\Traits\CacheableRepository;

/**
 * Class ProductRepositoryEloquent.
 *
 * @package namespace App\Repositories;
 */
class ProductRepositoryEloquent extends BaseRepository implements ProductRepository, CacheableInterface
{
    use CacheableRepository;

    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return Product::class;
    }

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }

    public function filter(string $search)
    {
        $this->model = $this->model->when($search ?? null, function ($query) use ($search) {
            $query->where('code', 'like', "%{$search}%")
                ->orWhere('name', 'like', "%{$search}%");
        });
        return $this;
    }
}
