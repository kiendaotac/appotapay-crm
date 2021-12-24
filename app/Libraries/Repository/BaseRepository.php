<?php

namespace App\Libraries\Repository;

use Prettus\Repository\Contracts\CriteriaInterface;
use Prettus\Repository\Eloquent\BaseRepository as PrettusBaseRepository;

abstract class BaseRepository extends PrettusBaseRepository
{
    public function applyCriteria()
    {
        if ($this->skipCriteria === true) {
            return $this;
        }

        $criteria = $this->getCriteria();

        if ($criteria) {
            foreach ($criteria as $c) {
                if ($c instanceof CriteriaInterface) {
                    $this->model = $c->apply($this->model, $this);
                }
            }
        }

        return $this;
    }
}
