<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use ScoutElastic\Searchable;

/**
 * @property int $ticket_id
 * @property string content
 */
class TicketKeyword extends Model
{
    use HasFactory, Searchable;

    public $incrementing = false;

    protected $guarded = [];

    protected $indexConfigurator = \App\ElasticIndexConfig\TicketKeywordIndexConfigurator::class;

    protected $searchRules = [];

    protected $mapping = [
        'properties' => [
            'id' => [
                'type' => 'text',
                'fields' => [
                    'raw' => [
                        'type' => 'keyword',
                    ]
                ]
            ],
            'content' => [
                'type' => 'text',
                'fields' => [
                    'raw' => [
                        'type' => 'keyword',
                    ]
                ]
            ],
        ]
    ];

    public function toSearchableArray()
    {
        return $this->only(['id', 'content']);
    }

    public function ticket()
    {
        return $this->belongsTo(Ticket::class, 'id');
    }
}
