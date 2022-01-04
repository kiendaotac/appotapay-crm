<?php

namespace App\Enums;

final class CallRoutingEnum
{
    const APP = 'APP';
    const PHONE = 'PHONE';

    const VALUE = [
        self::APP => 'CRM Panel',
        self::PHONE => 'SĐT Cá nhân',
    ];

    const KEY = [
        self::APP => self::APP,
        self::PHONE => self::PHONE,
    ];

    const MAP_STRINGEE_TYPE = [
        self::APP => 1,
        self::PHONE => 2,
    ];
}
