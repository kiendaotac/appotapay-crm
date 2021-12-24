<?php

namespace App\Repositories\Criteria;

use Prettus\Repository\Contracts\CriteriaInterface;
use Prettus\Repository\Contracts\RepositoryInterface;

/**
 * Class CreatedBeforeCriteria.
 *
 * @package namespace App\Repositories\Criteria;
 */
class CreatedBeforeCriteria implements CriteriaInterface
{
    protected $end;

    public function __construct(string $end = '')
    {
        $this->end = $end;
    }
    public function apply($model, RepositoryInterface $repository)
    {
        if (empty($this->end)) return $model;
        $date = \Carbon\Carbon::createFromFormat('d-m-Y', $this->end)->endOfDay();
        return $model->where('created_at', '<=', $date);;
    }
}
