<?php

namespace Tests\Feature;

use App\Models\Permission;
use App\Models\Product;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Livewire\Livewire;
use Tests\TestCase;

class ProductTest extends TestCase
{
    use RefreshDatabase;

    public function test_can_access_list_product()
    {
        $user = User::factory()->create();
        $user->attachPermissions([
            Permission::factory()->create(['name' => 'product-view']),
            Permission::factory()->create(['name' => 'product-create']),
            Permission::factory()->create(['name' => 'product-update']),
        ]);

        $this->actingAs($user)
            ->get(route('products'))
            ->assertOk()
            ->assertSeeLivewire('product.create')
            ->assertSeeLivewire('product.edit');
    }

    public function test_cant_access_list_product()
    {
        $user = User::factory()->create();

        $this->actingAs($user)
            ->get(route('products'))
            ->assertForbidden();
    }

    public function test_create_a_product()
    {
        $user = User::factory()->create();
        $user->attachPermission(Permission::factory()->create(['name' => 'product-create']));
        $this->actingAs($user);
        Livewire::test('product.create')
            ->set('product.name', '::product.name::')
            ->set('product.code', '::product.code::')
            ->call('save')
            ->assertEmitted('saved');
        $this->assertDatabaseCount('products', 1)
            ->assertDatabaseHas('products', [
                'name' => '::product.name::',
                'code' => '::product.code::',
            ]);
    }

    public function test_edit_a_product()
    {
        $user = User::factory()->create();
        $user->attachPermission(Permission::factory()->create(['name' => 'product-update']));
        $this->actingAs($user);
        $product = Product::create([
            'code' => '::product.code::',
            'name' => '::product.name::',
        ]);
        Livewire::test('product.edit')
            ->call('edit', $product->id)
            ->assertSet('product.code', '::product.code::')
            ->assertSet('product.name', '::product.name::')
            ->set('product.code', '::product.new-code::')
            ->set('product.name', '::product.new-name::')
            ->call('save')
            ->assertEmitted('saved');
        $this->assertDatabaseCount('products', 1)
            ->assertDatabaseHas('products', [
                'code' => '::product.new-code::',
                'name' => '::product.new-name::',
            ]);
    }

    public function test_delete_a_product()
    {
        $user = User::factory()->create();
        $user->attachPermissions([
            Permission::factory()->create(['name' => 'product-view']),
            Permission::factory()->create(['name' => 'product-delete']),
        ]);
        $this->actingAs($user);
        $product = Product::factory()->create();
        Livewire::test('product.index')
            ->call('delete', $product->id)
            ->assertDispatchedBrowserEvent('notify');
        $this->assertDeleted($product);
    }
}
