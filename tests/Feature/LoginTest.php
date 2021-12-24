<?php

namespace Tests\Feature;

use App\Models\User;
use Tests\TestCase;
use Livewire\Livewire;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Testing\RefreshDatabase;

class LoginTest extends TestCase
{
    use RefreshDatabase;

    public function test_can_view_login_page()
    {
        $this->get(route('login'))
            ->assertSuccessful();
    }

    public function test_is_redirected_if_already_logged_in()
    {
        $this->actingAs(User::factory()->create())
            ->get(route('login'))
            ->assertRedirect('/');
    }

    public function test_can_login()
    {
        $user = User::factory()->create();

        Livewire::test('auth.login')
            ->set('email', $user->email)
            ->set('password', 'password')
            ->call('login');

        $this->assertTrue(
            auth()->user()->is(User::where('email', $user->email)->first())
        );
    }

    public function test_is_redirected_to_intended_after_login_prompt_from_auth_guard()
    {
        Route::get('/intended')->middleware('auth');

        $user = User::factory()->create();

        $this->get('/intended')->assertRedirect('/login');

        Livewire::test('auth.login')
            ->set('email', $user->email)
            ->set('password', 'password')
            ->call('login')
            ->assertRedirect('/intended');
    }

    public function test_is_redirected_to_root_after_login()
    {
        $user = User::factory()->create();

        Livewire::test('auth.login')
            ->set('email', $user->email)
            ->set('password', 'password')
            ->call('login')
            ->assertRedirect('/');
    }

    public function test_email_is_required()
    {
        User::factory()->create();

        Livewire::test('auth.login')
            ->set('password', 'password')
            ->call('login')
            ->assertHasErrors(['email' => 'required']);
    }

    public function test_email_must_be_valid_email()
    {
        User::factory()->create();

        Livewire::test('auth.login')
            ->set('email', 'invalid-email')
            ->set('password', 'password')
            ->call('login')
            ->assertHasErrors(['email' => 'email']);
    }

    public function test_password_is_required()
    {
        $user = User::factory()->create();

        Livewire::test('auth.login')
            ->set('email', $user->email)
            ->call('login')
            ->assertHasErrors(['password' => 'required']);
    }

    public function test_bad_login_attempt_shows_message()
    {
        $user = User::factory()->create();

        Livewire::test('auth.login')
            ->set('email', $user->email)
            ->set('password', 'bad-password')
            ->call('login')
            ->assertHasErrors('email');

        $this->assertNull(auth()->user());
    }

    public function test_user_account_is_suspended()
    {
        $user = User::factory()->suspended()->create();

        Livewire::test('auth.login')
            ->set('email', $user->email)
            ->set('password', 'password')
            ->call('login')
            ->assertHasErrors('email');

        $this->assertNull(auth()->user());
    }
}
