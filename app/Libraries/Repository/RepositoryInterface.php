<?php

namespace App\Libraries\Repository;

use Prettus\Repository\Contracts\RepositoryInterface as PrettusRepositoryInterface;

interface RepositoryInterface extends PrettusRepositoryInterface
{
    /**
     * Apply criteria in current Query
     *
     * @return $this
     */
    public function applyCriteria();
}
