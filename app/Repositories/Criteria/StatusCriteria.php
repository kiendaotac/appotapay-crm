<?php

namespace App\Repositories\Criteria;

use Prettus\Repository\Contracts\CriteriaInterface;
use Prettus\Repository\Contracts\RepositoryInterface;

/**
 * Class StatusCriteria.
 *
 * @package namespace App\Repositories\Criteria;
 */
class StatusCriteria implements CriteriaInterface
{
    protected $status;

    public function __construct(string $status = '')
    {
        $this->status = $status;
    }

    public function apply($model, RepositoryInterface $repository)
    {
        if (empty($this->status)) return $model;
        return $model->where('status', $this->status);
    }
}
