<?php

namespace App\Http\Livewire\Role;

use App\Models\Role;
use App\Repositories\Contracts\UserRepository;
use Livewire\Component;

class EditUser extends Component
{
    public $role;
    public $perPage = 15;
    public $search = '';

    public function mount(Role $role)
    {
        $this->role = $role;
    }

    public function render(UserRepository $userRepository)
    {
        return view('livewire.role.edit-user', [
            'users' => $userRepository->scopeQuery(fn ($query) => $query->whereRoleIs($this->role->name))
                ->filter($this->search)
                ->paginate($this->perPage)
        ]);
    }
}
