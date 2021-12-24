<?php

namespace App\Repositories\Criteria;

use Prettus\Repository\Contracts\CriteriaInterface;
use Prettus\Repository\Contracts\RepositoryInterface;

/**
 * Class TodayCriteria.
 *
 * @package namespace App\Repositories\Criteria;
 */
class TodayCriteria implements CriteriaInterface
{
    public function apply($model, RepositoryInterface $repository)
    {
        $model = $model->where('created_at', '>=', today());
        return $model;
    }
}
