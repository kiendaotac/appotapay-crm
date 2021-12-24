<?php

namespace App\Repositories\Criteria;

use Prettus\Repository\Contracts\CriteriaInterface;
use Prettus\Repository\Contracts\RepositoryInterface;

/**
 * Class TagCriteria.
 *
 * @package namespace App\Repositories\Criteria;
 */
class TagCriteria implements CriteriaInterface
{
    protected $tag;

    public function __construct($tag = '')
    {
        $this->tag = $tag;
    }

    public function apply($model, RepositoryInterface $repository)
    {
        if (!isset($this->tag) || empty($this->tag)) return $model;
        // dd($this->tag);
        return $model->withAnyTags(collect($this->tag)->toArray());
    }
}
