<?php

namespace App\Repositories\Criteria;

use App\Models\TicketKeyword;
use Exception;
use Prettus\Repository\Contracts\CriteriaInterface;
use Prettus\Repository\Contracts\RepositoryInterface;

/**
 * Class TicketKeywordCriteria.
 *
 * @package namespace App\Repositories\Criteria;
 */
class TicketKeywordCriteria implements CriteriaInterface
{
    protected $keyword;

    public function __construct(string $keyword = '')
    {
        $this->keyword = $keyword;
    }
    public function apply($model, RepositoryInterface $repository)
    {
        if (empty($this->keyword)) return $model;

        try {
            $idToSearch = TicketKeyword::search($this->keyword)->keys();
            $model->whereIn('id', $idToSearch);
        } catch (Exception $e) {
            $model->where(fn ($builder) => $builder->where('id', $this->keyword)
                ->orWhere('name', 'like', "%$this->keyword%")
                ->orWhere('description', 'like', "%$this->keyword%"));
        }

        return $model;
    }
}
