<?php

return [
    /**
     * Control if the seeder should create a user per role while seeding the data.
     */
    'create_users' => false,

    /**
     * Control if all the laratrust tables should be truncated before running the seeder.
     */
    'truncate_tables' => false,

    'roles_structure' => [
        'administrator' => [
            'ticket-call' => 'v,u,d',
            'ticket-local' => 'c,v,u,d',
            'product' => 'c,v,u,d',
            'user' => 'v,u',
            'role' => 'c,v,u,d',
            'permission' => 'c,v,u,d',
        ],
        'moderator' => [
            'ticket-call' => 'v,u,d',
            'ticket-local' => 'c,v,u,d',
            'product' => 'c,v,u,d',
        ],
        'customer-care' => [
            'ticket-call' => 'v,u,d',
            'ticket-local' => 'c,v,u,d',
        ],
    ],

    'permissions_map' => [
        'c' => 'create',
        'v' => 'view',
        'u' => 'update',
        'd' => 'delete'
    ]
];
