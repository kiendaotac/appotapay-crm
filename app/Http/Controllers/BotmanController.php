<?php

namespace App\Http\Controllers;

use BotMan\BotMan\BotManFactory;
use BotMan\BotMan\Drivers\DriverManager;

class BotmanController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke()
    {
        DriverManager::loadDriver(\BotMan\Drivers\Telegram\TelegramDriver::class);
        $botman = BotManFactory::create(config('services.botman'));

        $botman->hears('/start', function ($botman) {
            $message = "Xin chào!";
            $message .= "\nTelegram ID của bạn là: " . $botman->getUser()->getId();
            $message .= "\nĐể nhận thông báo trực tiếp tại đây,";
            $message .= "\nVui lòng truy cập Hồ sơ cá nhân của bạn tại " . route('profile.information') . " và điền Telegram ID.";
            $botman->reply($message);
        });

        $botman->listen();
    }
}
