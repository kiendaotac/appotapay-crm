<?php

namespace App\Enums;

final class UserStatusEnum
{
    const ONLINE = 'ONLINE';
    const BUSY = 'BUSY';
    const IDLE = 'IDLE';
    const OFFLINE = 'OFFLINE';

    const KEY = [
        self::ONLINE => self::ONLINE,
        self::BUSY => self::BUSY,
        self::IDLE => self::IDLE,
        self::OFFLINE => self::OFFLINE,
    ];

    const VALUE = [
        self::ONLINE => 'Trực tuyến',
        self::BUSY => 'Bận',
        self::IDLE => 'Nhàn rỗi',
        self::OFFLINE => 'Ngoại tuyến',
    ];

    const COLOR = [
        self::ONLINE => 'success',
        self::BUSY => 'danger',
        self::IDLE => 'warning',
        self::OFFLINE => 'default',
    ];
}
