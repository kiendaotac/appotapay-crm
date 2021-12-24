<?php

namespace App\Http\Livewire\Notification;

use Illuminate\Notifications\DatabaseNotification;
use Livewire\Component;

class Widget extends Component
{
    public function getListeners()
    {
        $userId = auth()->user()->id;

        return [
            "echo-notification:App.Models.User.{$userId}, notification" => '$refresh',
            "notifications-updated" => '$refresh',
        ];
    }

    public function render()
    {
        return view('livewire.notification.widget', [
            'notifications' => auth()->user()->notifications()->latest()->limit(15)->get(),
            'unreadCount' => auth()->user()->unreadNotifications()->count(),
        ]);
    }

    public function markAsRead($notificationId)
    {
        $notification = DatabaseNotification::find($notificationId);
        if (!$notification || isset($notification->read_at)) return;
        $notification->markAsRead();
    }

    public function markAllAsRead()
    {
        auth()->user()->unreadNotifications()->update(['read_at' => now()]);
        $this->emitSelf('$refresh');
    }
}
