<?php

namespace App\Http\Livewire\User;

use App\Models\User;
use App\Repositories\Contracts\UserRepository;
use App\Services\Contracts\UserService;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Support\Facades\Storage;
use Livewire\Component;
use Livewire\WithFileUploads;

class EditInfo extends Component
{
    use WithFileUploads, AuthorizesRequests;

    public User $user;
    public $avatar;

    protected $rules = [
        'user.name' => 'required',
        'user.phone' => 'nullable',
        'user.is_active' => 'required|boolean',
    ];

    public function mount($user)
    {
        $this->user = $user;
    }

    public function render()
    {
        return view('livewire.user.edit-info');
    }

    public function updatedAvatar()
    {
        $this->validate([
            'avatar' => 'nullable|image',
        ]);
    }

    public function save(UserRepository $userRepository, UserService $userService)
    {
        $this->authorize('update', $this->user);
        $this->validate();
        if (isset($this->avatar)) {
            $this->user->avatar = $userService->uploadAvatar($this->avatar);
        }
        $userRepository->update($this->user->getDirty(), $this->user->id);
        $this->emitSelf('saved');
    }
}
