<?php

namespace App\Repositories\Criteria;

use Prettus\Repository\Contracts\CriteriaInterface;
use Prettus\Repository\Contracts\RepositoryInterface;

/**
 * Class AssigneeCriteria.
 *
 * @package namespace App\Repositories\Criteria;
 */
class AssigneeCriteria implements CriteriaInterface
{
    protected $assignee;

    public function __construct($assignee = '')
    {
        $this->assignee = $assignee;
    }

    public function apply($model, RepositoryInterface $repository)
    {
        if (!isset($this->assignee) || empty($this->assignee)) return $model;
        return $model->whereHas('assignees', function ($sub) {
            $sub->where('user_id', $this->assignee);
        });
    }
}
