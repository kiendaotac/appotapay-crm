<?php

namespace App\Http\Livewire\Permission;

use App\Repositories\Contracts\PermissionRepository;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Livewire\Component;

class Edit extends Component
{
    use AuthorizesRequests;

    public $permission = null;
    protected $listeners = [
        'edit' => 'edit'
    ];

    protected function rules()
    {
        return [
            'permission.name' => "required|unique:permissions,name,{$this->permission->id}",
            'permission.display_name' => 'required',
            'permission.description' => 'nullable',
        ];
    }

    public function render()
    {
        return view('livewire.permission.edit');
    }

    public function edit($permissionId, PermissionRepository $permissionRepository)
    {
        $this->permission = $permissionRepository->find($permissionId);
    }

    public function save(PermissionRepository $permissionRepository)
    {
        $this->authorize('update', $this->permission);
        $this->validate();
        $permissionRepository->update($this->permission->getDirty(), $this->permission->id);
        $this->reset('permission');
        $this->emit('saved');
        $this->dispatchBrowserEvent('saved');
    }
}
