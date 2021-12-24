<?php

namespace App\Http\Livewire\Permission;

use App\Models\Permission;
use App\Repositories\Contracts\PermissionRepository;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Livewire\Component;
use Livewire\WithPagination;

class Index extends Component
{
    use WithPagination, AuthorizesRequests;

    public $search = '';
    public $perPage = 10;

    protected $queryString = [
        'search' => ['except' => '']
    ];
    protected $listeners = [
        'saved' => '$refresh',
    ];
    protected $paginationTheme = 'bootstrap';

    public function render(PermissionRepository $permissionRepository)
    {
        $this->authorize('viewAny', Permission::class);
        return view('livewire.permission.index', [
            'permissions' => $permissionRepository
                ->skipCache()
                ->filter($this->search)
                ->simplePaginate($this->perPage)
        ]);
    }

    public function delete($itemToDelete, PermissionRepository $permissionRepository)
    {
        $this->authorize('delete', $permission = $permissionRepository->find($itemToDelete));
        $permission->delete();
        $this->emit('$refresh');
        $this->dispatchBrowserEvent('notify', ['type' => 'success', 'message' => __('Deleted.')]);
    }
}
