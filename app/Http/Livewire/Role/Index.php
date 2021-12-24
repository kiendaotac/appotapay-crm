<?php

namespace App\Http\Livewire\Role;

use App\Repositories\Contracts\RoleRepository;
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

    public function render(RoleRepository $roleRepository)
    {
        return view('livewire.role.index', [
            'roles' => $roleRepository
                ->skipCache()
                ->filter($this->search)
                ->simplePaginate($this->perPage)
        ]);
    }

    public function delete($itemToDelete, RoleRepository $roleRepository)
    {
        $this->authorize('delete', $role = $roleRepository->find($itemToDelete));
        $role->delete();
        $this->emit('$refresh');
        $this->dispatchBrowserEvent('notify', ['type' => 'success', 'message' => __('Deleted.')]);
    }
}
