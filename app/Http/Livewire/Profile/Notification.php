<?php

namespace App\Http\Livewire\Profile;

use Illuminate\Notifications\DatabaseNotification;
use Livewire\Component;
use Livewire\WithPagination;

class Notification extends Component
{
    use WithPagination;

    public $perPage = 10;
    protected $paginationTheme = 'bootstrap';

    public function render()
    {
        return view('livewire.profile.notification', [
            'notifications' => auth()->user()->notifications()->latest()->simplePaginate($this->perPage)
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
        $this->emit('notifications-updated');
    }
}
