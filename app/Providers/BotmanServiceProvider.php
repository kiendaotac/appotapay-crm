<?php

namespace App\Providers;

use BotMan\BotMan\BotManFactory;
use BotMan\BotMan\Drivers\DriverManager;
use Illuminate\Support\ServiceProvider;

class BotmanServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        DriverManager::loadDriver(\BotMan\Drivers\Telegram\TelegramDriver::class);
        BotManFactory::create(config('services.botman'));
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
