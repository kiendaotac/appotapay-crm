<?php

namespace App\Http\Livewire\Role;

use App\Models\Role;
use App\Repositories\Contracts\RoleRepository;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Livewire\Component;

class EditInfo extends Component
{
    use AuthorizesRequests;

    public $role;
    protected function rules()
    {
        return [
            'role.name' => "required|unique:roles,name,{$this->role->id}",
            'role.display_name' => 'required',
            'role.description' => 'nullable',
        ];
    }

    public function mount(Role $role)
    {
        $this->role = $role;
    }

    public function render()
    {
        return view('livewire.role.edit-info');
    }

    public function save(RoleRepository $roleRepository)
    {
        $this->authorize('update', $this->role);
        $this->validate();
        $roleRepository->update($this->role->getDirty(), $this->role->id);
        $this->emitSelf('saved');
    }
}
