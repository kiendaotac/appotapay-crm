<?php

namespace App\Services\Contracts;

interface ProductService
{
    public function create(array $attributes);
    public function update(array $attributes, $productId);
    public function delete($productId);
}
