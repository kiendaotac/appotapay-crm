<?php

namespace App\Notifications;

use App\Models\Ticket;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use Illuminate\Support\Str;
use NotificationChannels\Telegram\TelegramChannel;
use NotificationChannels\Telegram\TelegramMessage;

class TicketActive extends Notification implements ShouldQueue
{
    use Queueable;

    public $activity;
    public $ticket;

    public function __construct(array $activity, Ticket $ticket)
    {
        $this->activity = $activity;
        $this->ticket = $ticket;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['database', 'broadcast', TelegramChannel::class];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        return (new MailMessage)
            ->line($this->activity['title'])
            ->line(PHP_EOL . Str::limit($this->activity['detail'], 50))
            ->line("\nThực hiện bởi: " . $this->activity['causer'])
            ->line("\nTiêu đề: " . Str::limit($this->ticket->name, 20))
            ->line("\nMô tả: " . Str::limit($this->ticket->description, 50))
            ->action('Ticket #' . $this->ticket->id, url(composeTicketLink($this->ticket->id, $this->ticket->type)));
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
            'description' => $this->activity['title'],
            'url' => composeTicketLink($this->ticket->id, $this->ticket->type),
            'icon' => 'flaticon2-paper kt-font-brand',
        ];
    }

    public function toTelegram($notifiable)
    {
        $content = $this->activity['title'];
        $content .= PHP_EOL . Str::limit($this->activity['detail'], 50);
        $content .= "\nThực hiện bởi: " . $this->activity['causer'];
        $content .= "\nTiêu đề: " . Str::limit($this->ticket->name, 20);
        $content .= "\nMô tả: " . Str::limit($this->ticket->description, 50);

        return TelegramMessage::create()
            ->to($notifiable->telegram_id)
            ->content($content)
            ->button("Ticket #{$this->ticket->id}", url(composeTicketLink($this->ticket->id, $this->ticket->type)));
    }
}
