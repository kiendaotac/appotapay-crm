<?php

namespace App\Http\Livewire\Permission;

use App\Models\Permission;
use App\Repositories\Contracts\PermissionRepository;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Livewire\Component;

class Create extends Component
{
    use AuthorizesRequests;

    public $permission;
    protected $rules = [
        'permission.name' => 'required|unique:permissions,name',
        'permission.display_name' => 'required',
        'permission.description' => 'nullable',
    ];

    public function mount()
    {
        $this->permission = new Permission;
    }

    public function render()
    {
        $this->authorize('create', Permission::class);
        return view('livewire.permission.create');
    }

    public function save(PermissionRepository $permissionRepository)
    {
        $this->authorize('create', Permission::class);
        $this->validate();
        $permissionRepository->create($this->permission->toArray());
        $this->permission = new Permission;
        $this->emit('saved');
        $this->dispatchBrowserEvent('saved');
    }
}
