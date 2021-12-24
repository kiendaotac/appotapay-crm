<?php

namespace App\Listeners;

use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Log;
use Telegram\Bot\Laravel\Facades\Telegram;
use Illuminate\Support\Str;

class NotifyTicketActivityViaTelegram implements ShouldQueue
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  object  $event
     * @return void
     */
    public function handle($event)
    {
        $text = $event->activity['title'];
        $text .= PHP_EOL . Str::limit($event->activity['detail'], 50);
        $text .= "\nThực hiện bởi: " . $event->activity['causer'];
        $text .= "\nTiêu đề: " . Str::limit($event->ticket->name, 20);
        $text .= "\nMô tả: " . Str::limit($event->ticket->description, 50);
        $text .= "\n" . Str::composeTicketLink($event->ticket->id, $event->ticket->type);
        Log::debug('send tele:', [
            'chat_id' => $this->getChannelId(),
            'text' => $text,
            'parse_mod' => 'HTML',
        ]);
        Telegram::sendMessage([
            'chat_id' => $this->getChannelId(),
            'text' => $text,
            'parse_mod' => 'HTML',
        ]);
    }

    private function getChannelId()
    {
        return [
            serverIsProduction() => config('telegram.channels.cskh_prod'),
            !serverIsProduction() => config('telegram.channels.cskh_dev'),
        ][true];
    }
}
