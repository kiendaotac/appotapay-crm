<?php

namespace App\Enums;

final class TicketVariantEnum
{
    const CALL_INCOMING = "CALL_INCOMING";
    const CALL_OUTGOING = "CALL_OUTGOING";
    const LOCAL_AUTHENTICATION = "LOCAL_AUTHENTICATION";
    const LOCAL_CASH_IN = "LOCAL_CASH_IN";
    const LOCAL_CARD_SERIAL = "LOCAL_CARD_SERIAL";
    const LOCAL_GAME_CHARGE = "LOCAL_GAME_CHARGE";
    const LOCAL_TOP_UP = "LOCAL_TOP_UP";
    const LOCAL_SPIN = "LOCAL_SPIN";
    const LOCAL_VOUCHER = "LOCAL_VOUCHER";
    const LOCAL_GIFT_CODE = "LOCAL_GIFT_CODE";
    const LOCAL_EVENT = "LOCAL_EVENT";
    const LOCAL_TRANSFER_MONEY = "LOCAL_TRANSFER_MONEY";
    const LOCAL_CASH_OUT = "LOCAL_CASH_OUT";
    const LOCAL_E2E = "LOCAL_E2E";
    const LOCAL_B2B = "LOCAL_B2B";
    const LOCAL_TRANSACTION_MISS = "LOCAL_TRANSACTION_MISS";
    const LOCAL_TRANSACTION_CONFIRM = "LOCAL_TRANSACTION_CONFIRM";
    const LOCAL_OTHER = "LOCAL_OTHER";

    const VALUE = [
        self::CALL_INCOMING => "Cuộc gọi đến",
        self::CALL_OUTGOING => "Cuộc gọi đi",
        self::LOCAL_AUTHENTICATION => "Đăng nhập/đăng ký",
        self::LOCAL_CASH_IN => "Cashin",
        self::LOCAL_CARD_SERIAL => "Mã Thẻ",
        self::LOCAL_GAME_CHARGE => "Nạp Game",
        self::LOCAL_TOP_UP => "Topup",
        self::LOCAL_SPIN => "Spin",
        self::LOCAL_VOUCHER => "Voucher",
        self::LOCAL_GIFT_CODE => "Giftcode",
        self::LOCAL_EVENT => "Sự kiện",
        self::LOCAL_TRANSFER_MONEY => "Chuyển tiền",
        self::LOCAL_CASH_OUT => "Cashout",
        self::LOCAL_E2E => "E2E",
        self::LOCAL_B2B => "B2B",
        self::LOCAL_TRANSACTION_MISS => "Giao dịch miss",
        self::LOCAL_TRANSACTION_CONFIRM => "Giao dịch confirm",
        self::LOCAL_OTHER => "Khác",
    ];

    const KEY = [
        self::CALL_INCOMING => self::CALL_INCOMING,
        self::CALL_OUTGOING => self::CALL_OUTGOING,
        self::LOCAL_AUTHENTICATION => self::LOCAL_AUTHENTICATION,
        self::LOCAL_CASH_IN => self::LOCAL_CASH_IN,
        self::LOCAL_CARD_SERIAL => self::LOCAL_CARD_SERIAL,
        self::LOCAL_GAME_CHARGE => self::LOCAL_GAME_CHARGE,
        self::LOCAL_TOP_UP => self::LOCAL_TOP_UP,
        self::LOCAL_SPIN => self::LOCAL_SPIN,
        self::LOCAL_VOUCHER => self::LOCAL_VOUCHER,
        self::LOCAL_GIFT_CODE => self::LOCAL_GIFT_CODE,
        self::LOCAL_EVENT => self::LOCAL_EVENT,
        self::LOCAL_TRANSFER_MONEY => self::LOCAL_TRANSFER_MONEY,
        self::LOCAL_CASH_OUT => self::LOCAL_CASH_OUT,
        self::LOCAL_E2E => self::LOCAL_E2E,
        self::LOCAL_B2B => self::LOCAL_B2B,
        self::LOCAL_TRANSACTION_MISS => self::LOCAL_TRANSACTION_MISS,
        self::LOCAL_TRANSACTION_CONFIRM => self::LOCAL_TRANSACTION_CONFIRM,
        self::LOCAL_OTHER => self::LOCAL_OTHER,
    ];

    const COLOR = [
        self::CALL_INCOMING => 'primary',
        self::CALL_OUTGOING => 'success',
        self::LOCAL_AUTHENTICATION => 'warning',
        self::LOCAL_CASH_IN => 'danger',
        self::LOCAL_CARD_SERIAL => 'danger',
        self::LOCAL_GAME_CHARGE => 'danger',
        self::LOCAL_TOP_UP => 'primary',
        self::LOCAL_SPIN => 'info',
        self::LOCAL_VOUCHER => 'info',
        self::LOCAL_GIFT_CODE => 'primary',
        self::LOCAL_EVENT => 'success',
        self::LOCAL_TRANSFER_MONEY => 'danger',
        self::LOCAL_CASH_OUT => 'danger',
        self::LOCAL_OTHER => 'success',
    ];

    const GROUP_LOCAL = [
        self::LOCAL_AUTHENTICATION => self::VALUE[self::LOCAL_AUTHENTICATION],
        self::LOCAL_CASH_IN => self::VALUE[self::LOCAL_CASH_IN],
        self::LOCAL_CARD_SERIAL => self::VALUE[self::LOCAL_CARD_SERIAL],
        self::LOCAL_GAME_CHARGE => self::VALUE[self::LOCAL_GAME_CHARGE],
        self::LOCAL_TOP_UP => self::VALUE[self::LOCAL_TOP_UP],
        self::LOCAL_SPIN => self::VALUE[self::LOCAL_SPIN],
        self::LOCAL_VOUCHER => self::VALUE[self::LOCAL_VOUCHER],
        self::LOCAL_GIFT_CODE => self::VALUE[self::LOCAL_GIFT_CODE],
        self::LOCAL_EVENT => self::VALUE[self::LOCAL_EVENT],
        self::LOCAL_TRANSFER_MONEY => self::VALUE[self::LOCAL_TRANSFER_MONEY],
        self::LOCAL_CASH_OUT => self::VALUE[self::LOCAL_CASH_OUT],
        self::LOCAL_E2E => self::VALUE[self::LOCAL_E2E],
        self::LOCAL_B2B => self::VALUE[self::LOCAL_B2B],
        self::LOCAL_TRANSACTION_MISS => self::VALUE[self::LOCAL_TRANSACTION_MISS],
        self::LOCAL_TRANSACTION_CONFIRM => self::VALUE[self::LOCAL_TRANSACTION_CONFIRM],
        self::LOCAL_OTHER => self::VALUE[self::LOCAL_OTHER]
    ];
}
