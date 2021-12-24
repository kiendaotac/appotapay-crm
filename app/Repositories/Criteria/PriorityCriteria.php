<?php

namespace App\Repositories\Criteria;

use Prettus\Repository\Contracts\CriteriaInterface;
use Prettus\Repository\Contracts\RepositoryInterface;

/**
 * Class PriorityCriteria.
 *
 * @package namespace App\Repositories\Criteria;
 */
class PriorityCriteria implements CriteriaInterface
{
    protected $priority;

    public function __construct(string $priority = '')
    {
        $this->priority = $priority;
    }

    public function apply($model, RepositoryInterface $repository)
    {
        if (empty($this->priority)) return $model;
        return $model->where('priority', $this->priority);
    }
}
