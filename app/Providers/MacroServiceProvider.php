<?php

namespace App\Providers;

use App\Enums\TicketTypeEnum;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\{Str, Stringable};

class MacroServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        Str::macro('normalizePhone', function ($phone) {
            $phone = strval($phone);

            // clean phone characters
            $phone = str_replace([
                ' ', '.', '-', '(', ')', ',', '+'
            ], '', $phone);

            // convert format 84 to 0
            if (Str::startsWith($phone, '84')) {
                $phone = Str::replaceFirst('84', '0', $phone);
            }

            return $phone;
        });

        Stringable::macro('normalizePhone', fn () => new static(Str::normalizePhone($this->value)));

        Str::macro('composeTicketLink', function ($id, $type) {
            switch ($type) {
                case TicketTypeEnum::CALL:
                    return route('ticket.calls.edit', $id);
                default:
                    return route('ticket.locals.edit', $id);
            }
        });

        Stringable::macro('stripTags', fn () => new static(strip_tags($this->value)));
        Stringable::macro('entitiesDecode', fn () => new static(htmlspecialchars_decode($this->value)));


    }
}
