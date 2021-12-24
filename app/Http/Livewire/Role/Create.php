<?php

namespace App\Http\Livewire\Role;

use App\Models\Role;
use App\Repositories\Contracts\RoleRepository;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Livewire\Component;

class Create extends Component
{
    use AuthorizesRequests;

    public $role;
    protected $rules = [
        'role.name' => 'required|unique:roles,name',
        'role.display_name' => 'required',
        'role.description' => 'nullable',
    ];

    public function mount()
    {
        $this->role = new Role;
    }

    public function render()
    {
        return view('livewire.role.create');
    }

    public function save(RoleRepository $roleRepository)
    {
        $this->authorize('create', Role::class);
        $this->validate();
        $roleRepository->create($this->role->toArray());
        $this->role = new Role;
        $this->emit('saved');
        $this->dispatchBrowserEvent('saved');
    }
}
