<?php

namespace App\Http\Livewire\Product;

use App\Repositories\Contracts\ProductRepository;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Livewire\Component;

class Edit extends Component
{
    use AuthorizesRequests;

    public $product = null;

    protected $listeners = [
        'edit' => 'edit'
    ];

    protected function rules()
    {
        return [
            'product.name' => 'required',
            'product.code' => "required|unique:products,code,{$this->product->id}"
        ];
    }

    public function render()
    {
        return view('livewire.product.edit');
    }

    public function edit($productId, ProductRepository $productRepository)
    {
        $this->product = $productRepository->find($productId);
    }

    public function save(ProductRepository $productRepository)
    {
        $this->authorize('update', $this->product);
        $this->validate();
        $productRepository->update($this->product->getDirty(), $this->product->id);
        $this->product = null;
        $this->emit('saved');
    }
}
