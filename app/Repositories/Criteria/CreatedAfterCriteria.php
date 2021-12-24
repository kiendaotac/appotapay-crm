<?php

namespace App\Repositories\Criteria;

use Prettus\Repository\Contracts\CriteriaInterface;
use Prettus\Repository\Contracts\RepositoryInterface;

/**
 * Class CreatedAfterCriteria.
 *
 * @package namespace App\Repositories\Criteria;
 */
class CreatedAfterCriteria implements CriteriaInterface
{
    protected $start;

    public function __construct(string $start = '')
    {
        $this->start = $start;
    }
    public function apply($model, RepositoryInterface $repository)
    {
        if (empty($this->start)) return $model;
        $date = \Carbon\Carbon::createFromFormat('d-m-Y', $this->start)->startOfDay();
        return $model->where('created_at', '>=', $date);;
    }
}
