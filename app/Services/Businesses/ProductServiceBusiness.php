<?php

namespace App\Services\Businesses;

use App\Repositories\Contracts\ProductRepository;
use App\Services\Contracts\ProductService;

class ProductServiceBusiness implements ProductService
{
    protected $productRepository;

    public function __construct(ProductRepository $productRepository)
    {
        $this->productRepository = $productRepository;
    }

    public function create(array $attributes)
    {
        return $this->productRepository->create($attributes);
    }

    public function update(array $attributes, $productId)
    {
        return $this->productRepository->update($attributes, $productId);
    }

    public function delete($productId)
    {
        return $this->productRepository->delete($productId);
    }
}
