<?php

namespace App\Repositories\Criteria;

use Prettus\Repository\Contracts\CriteriaInterface;
use Prettus\Repository\Contracts\RepositoryInterface;

/**
 * Class PriorityCriteria.
 *
 * @package namespace App\Repositories\Criteria;
 */
class VariantCriteria implements CriteriaInterface
{
    protected $variant;

    public function __construct(string $variant = '')
    {
        $this->variant = $variant;
    }

    public function apply($model, RepositoryInterface $repository)
    {
        if (empty($this->variant)) return $model;
        return $model->where('variant', $this->variant);
    }
}
