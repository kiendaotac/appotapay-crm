<?php

namespace App\ElasticIndexConfig;

use ScoutElastic\IndexConfigurator;
use ScoutElastic\Migratable;

class TicketKeywordIndexConfigurator extends IndexConfigurator
{
    use Migratable;

    /**
     * @var array
     */
    protected $settings = [
        //
    ];
}
