<?php

namespace App\Enums;

final class TicketStatusEnum
{
    const MISSED = 'MISSED';
    const ANSWERED = 'ANSWERED';
    const CLOSED = 'CLOSED';
    const FRESH = 'FRESH';
    const PROCESSING = 'PROCESSING';
    const WAIT = 'WAIT';
    const CONTACT = 'CONTACT';
    const SUCCESS = 'SUCCESS';
    const FAILED = 'FAILED';
    const CALL_BACK = 'CALL_BACK';
    const REJECTED = 'REJECTED';
    const RESPONDED = 'RESPONDED';
    const PENDING = 'PENDING';

    const KEY = [
        self::MISSED => self::MISSED,
        self::ANSWERED => self::ANSWERED,
        self::CLOSED => self::CLOSED,
        self::FRESH => self::FRESH,
        self::PROCESSING => self::PROCESSING,
        self::WAIT => self::WAIT,
        self::CONTACT => self::CONTACT,
        self::SUCCESS => self::SUCCESS,
        self::FAILED => self::FAILED,
        self::CALL_BACK => self::CALL_BACK,
        self::REJECTED => self::REJECTED,
        self::RESPONDED => self::RESPONDED,
        self::PENDING => self::PENDING,
    ];

    const VALUE = [
        self::MISSED => 'Gọi nhỡ',
        self::ANSWERED => 'Đã nghe',
        self::CLOSED => 'Đóng',
        self::FRESH => "Mới",
        self::PROCESSING => "Đang xử lý",
        self::WAIT => "Chờ liên hệ",
        self::CONTACT => "Đã liên hệ",
        self::SUCCESS => "Thành công",
        self::FAILED => "Thất bại",
        self::CALL_BACK => "Gọi lại sau",
        self::REJECTED => "Không hợp tác",
        self::RESPONDED => 'Đã phản hồi',
        self::PENDING => 'Chờ xử lý',
    ];

    const COLOR = [
        self::MISSED => 'danger',
        self::ANSWERED => 'success',
        self::CLOSED => 'secondary',
        self::FRESH => "warning",
        self::PROCESSING => "info",
        self::WAIT => "primary",
        self::CONTACT => "primary",
        self::SUCCESS => "success",
        self::FAILED => "danger",
        self::CALL_BACK => "info",
        self::REJECTED => "warning",
        self::RESPONDED => 'primary',
        self::PENDING => 'primary',
    ];

    const GROUP_LOCAL = [
        self::FRESH => self::VALUE[self::FRESH],
        self::PENDING => self::VALUE[self::PENDING],
        self::PROCESSING => self::VALUE[self::PROCESSING],
        self::CLOSED => self::VALUE[self::CLOSED],
        self::RESPONDED => self::VALUE[self::RESPONDED],
    ];
}
