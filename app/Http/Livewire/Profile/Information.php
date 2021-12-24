<?php

namespace App\Http\Livewire\Profile;

use App\Models\User;
use App\Repositories\Contracts\UserRepository;
use App\Services\Contracts\UserService;
use Livewire\Component;
use Livewire\WithFileUploads;

class Information extends Component
{
    use WithFileUploads;

    public User $user;
    public $avatar;

    protected $rules = [
        'user.name' => 'required',
        'user.phone' => '',
        'user.telegram_id' => 'string|max:100',
        'avatar' => 'nullable|image|max:4096',
    ];

    public function mount()
    {
        $this->user = auth()->user();
    }

    public function render()
    {
        return view('livewire.profile.information');
    }

    public function save(UserService $userService, UserRepository $userRepository)
    {
        $this->validate();
        if (isset($this->avatar)) {
            $this->user->avatar = $userService->uploadAvatar($this->avatar);
        }
        $userRepository->update($this->user->getDirty(), $this->user->id);
        $this->emitSelf('saved');
    }
}
