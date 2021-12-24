<?php

namespace App\Enums;

final class TicketTypeEnum
{
    const CALL = 'CALL';
    const LOCAL = 'LOCAL';

    const VALUE = [
        self::CALL => 'Cuộc gọi',
        self::LOCAL => 'Nội bộ',
    ];

    const KEY = [
        self::CALL => self::CALL,
        self::LOCAL => self::LOCAL,
    ];
}
