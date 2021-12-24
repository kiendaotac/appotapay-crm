<?php

namespace App\Http\Livewire\Role;

use App\Models\Role;
use App\Repositories\Contracts\PermissionRepository;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Support\Collection;
use Livewire\Component;

/**
 * @property Collection $assignedValue
 */
class EditPermission extends Component
{
    use AuthorizesRequests;

    public $role;
    public $permissions;
    public $assignedPermissions;

    public function mount(PermissionRepository $permissionRepository, Role $role)
    {
        $this->permissions = $permissionRepository->group($roleIds = $this->role->permissions()->pluck('id'));
        $this->assignedPermissions = $roleIds->flip()->map(fn () => true)->all();
        $this->role = $role;
    }

    public function render()
    {
        return view('livewire.role.edit-permission');
    }

    public function save()
    {
        $this->authorize('update', $this->role);
        $this->role->syncPermissions($this->assignedValue);
        $this->emitSelf('saved');
    }

    public function groupSelect($group)
    {
        $group = collect($group);
        $appendValue = $group->pluck('id')->intersect($this->assignedValue)->count() < $group->count() ? true : false;
        $group->each(fn ($item) => $this->assignedPermissions = collect($this->assignedPermissions)->put($item['id'], $appendValue));
        $this->assignedPermissions = collect($this->assignedPermissions)->toArray();
        $this->assignedValue = $this->getAssignedValueProperty();
    }

    public function getAssignedValueProperty()
    {
        return collect($this->assignedPermissions)
            ->filter(fn ($item) => $item)
            ->map(fn ($item, $key) => $key);
    }
}
