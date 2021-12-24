<?php

namespace App\Repositories\Criteria;

use Prettus\Repository\Contracts\CriteriaInterface;
use Prettus\Repository\Contracts\RepositoryInterface;

/**
 * Class ProductCriteria.
 *
 * @package namespace App\Repositories\Criteria;
 */
class ProductCriteria implements CriteriaInterface
{
    protected $product;

    public function __construct($product = '')
    {
        $this->product = $product;
    }

    public function apply($model, RepositoryInterface $repository)
    {
        if (!isset($this->product) || empty($this->product)) return $model;
        return $model->where('product_id', $this->product);;
    }
}
