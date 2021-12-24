<?php

namespace App\Notifications;

use App\Models\Ticket;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use NotificationChannels\Telegram\TelegramChannel;
use NotificationChannels\Telegram\TelegramMessage;

class TicketAssigned extends Notification implements ShouldQueue
{
    use Queueable;

    public string $description;
    public Ticket $ticket;

    public function __construct(string $description = '', Ticket $ticket)
    {
        $this->description = $description;
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
        return ['database', 'broadcast', 'mail', TelegramChannel::class];
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
            ->line($this->description)
            ->line('* Tiêu đề: ' . $this->ticket->name)
            ->line('* Trạng thái: ' . \App\Enums\TicketStatusEnum::VALUE[$this->ticket->status] ?? '')
            ->line('* Độ ưu tiên: ' . \App\Enums\TicketPriorityEnum::VALUE[$this->ticket->priority] ?? '')
            ->action("Ticket #{$this->ticket->id}", url(composeTicketLink($this->ticket->id, $this->ticket->type)));
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
            'description' => $this->description,
            'url' => composeTicketLink($this->ticket->id, $this->ticket->type),
            'icon' => 'flaticon2-paper kt-font-brand',
        ];
    }

    public function toTelegram($notifiable)
    {
        $content = $this->description;
        $content .= "\n- Tiêu đề: " . $this->ticket->name;
        $content .= "\n- Trạng thái: " . \App\Enums\TicketStatusEnum::VALUE[$this->ticket->status] ?? '';
        $content .= "\n- Độ ưu tiên: " . \App\Enums\TicketPriorityEnum::VALUE[$this->ticket->priority] ?? '';

        return TelegramMessage::create()
            ->to($notifiable->telegram_id)
            ->content($content)
            ->button("Ticket #{$this->ticket->id}", url(composeTicketLink($this->ticket->id, $this->ticket->type)));
    }
}
