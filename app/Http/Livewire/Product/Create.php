<?php

namespace App\Http\Livewire\Product;

use App\Models\Product;
use App\Repositories\Contracts\ProductRepository;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Livewire\Component;

class Create extends Component
{
    use AuthorizesRequests;

    public $product;
    protected $rules = [
        'product.name' => 'required',
        'product.code' => 'required|unique:products,code'
    ];

    public function mount()
    {
        $this->product = new Product;
    }
    public function render()
    {
        return view('livewire.product.create');
    }

    public function save(ProductRepository $productRepository)
    {
        $this->authorize('create', Product::class);
        $this->validate();
        $productRepository->create($this->product->toArray());
        $this->product = new Product;
        $this->emit('saved');
    }
}
