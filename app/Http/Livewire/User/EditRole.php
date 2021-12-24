<?php

namespace App\Http\Livewire\User;

use App\Models\User;
use App\Repositories\Contracts\RoleRepository;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Livewire\Component;

class EditRole extends Component
{
    use AuthorizesRequests;

    public $roles;
    public $assignedRoles;
    public User $user;

    public function mount(User $user, RoleRepository $roleRepository)
    {
        $this->roles = $roleRepository->all(['id', 'display_name']);
        $this->user = $user;
        $this->assignedRoles = $this->user->roles()->pluck('id');
    }

    public function render()
    {
        return view('livewire.user.edit-role');
    }

    public function setRole(array $roles)
    {
        $this->assignedRoles = $roles;
    }

    public function save()
    {
        $this->authorize('update', $this->user);
        $this->user->roles()->sync($this->assignedRoles);
        $this->emitSelf('saved');
    }

    public function getUserPermissionsProperty()
    {
        return $this->user->allPermissions(['display_name']);
    }
}
