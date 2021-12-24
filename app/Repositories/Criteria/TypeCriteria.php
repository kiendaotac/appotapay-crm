<?php

namespace App\Repositories\Criteria;

use Prettus\Repository\Contracts\CriteriaInterface;
use Prettus\Repository\Contracts\RepositoryInterface;

/**
 * Class TicketTypeCriteria.
 *
 * @package namespace App\Repositories\Criteria;
 */
class TypeCriteria implements CriteriaInterface
{
    public function __construct(string $type = '')
    {
        $this->type = $type;
    }

    public function apply($model, RepositoryInterface $repository)
    {
        if (empty($this->type)) return $model;
        $model = $model->where('type', $this->type);
        return $model;
    }
}
