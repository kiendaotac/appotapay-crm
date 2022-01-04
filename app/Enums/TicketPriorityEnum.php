<?php

namespace App\Enums;

final class TicketPriorityEnum
{
    const LOW = 'LOW';
    const MEDIUM = 'MEDIUM';
    const HIGH = 'HIGH';

    const VALUE = [
        self::LOW => 'Thấp',
        self::MEDIUM => 'Trung bình',
        self::HIGH => 'Cao',
    ];

    const KEY = [
        self::LOW => self::LOW,
        self::MEDIUM => self::MEDIUM,
        self::HIGH => self::HIGH,
    ];

    const COLOR = [
        self::LOW => 'light-green',
        self::MEDIUM => 'light-primary',
        self::HIGH => 'light-danger',
    ];
}
