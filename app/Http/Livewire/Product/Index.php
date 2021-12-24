<?php

namespace App\Http\Livewire\Product;

use App\Repositories\Contracts\ProductRepository;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Livewire\Component;
use Livewire\WithPagination;

class Index extends Component
{
    use WithPagination, AuthorizesRequests;

    public $search = '';
    public $perPage = 10;

    protected $queryString = [
        'search' => ['except' => ''],
    ];
    protected $listeners = [
        'saved' => '$refresh',
    ];
    protected $paginationTheme = 'bootstrap';

    public function render(ProductRepository $productRepository)
    {
        return view('livewire.product.index', [
            'products' => $productRepository
                ->skipCache()
                ->filter($this->search)
                ->simplePaginate($this->perPage)
        ]);
    }

    public function delete($itemToDelete, ProductRepository $productRepository)
    {
        $this->authorize('delete', $product = $productRepository->find($itemToDelete));
        $product->delete();
        $this->emit('$refresh');
        $this->dispatchBrowserEvent('notify', ['type' => 'success', 'message' => __('Deleted.')]);
    }
}
