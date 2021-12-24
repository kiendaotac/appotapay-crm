<?php

namespace App\Http\Livewire\Auth;

use App\Models\User;
use App\Providers\RouteServiceProvider;
use App\Services\Facades\Stringee;
use Exception;
use Illuminate\Foundation\Auth\{RedirectsUsers, ThrottlesLogins};
use Illuminate\Support\Facades\{Auth, Lang, Log};
use Illuminate\Support\Str;
use Livewire\Component;

class Login extends Component
{
    use RedirectsUsers, ThrottlesLogins;

    public $email;
    public $password;
    public $remember;

    protected $rules = [
        'email' => 'required|email',
        'password' => 'required',
    ];

    protected function redirectTo()
    {
        return RouteServiceProvider::HOME;
    }

    public function render()
    {
        return view('livewire.auth.login');
    }

    public function login()
    {
        $this->validate();
        if ($this->hasTooManyLoginAttempts($this->email)) {
            return $this->sendLockoutResponse();
        }
        if (!$this->attemptLogin()) {
            $this->incrementLoginAttempts($this->email);
            return $this->sendFailedLoginResponse();
        }
        if ($this->accountIsSuspended($this->guard()->user())) {
            return $this->sendSuspendedAccountResponse();
        }
        return $this->sendLoginResponse();
    }

    protected function accountIsSuspended(User $user)
    {
        return $user->isSuspended();
    }

    protected function sendSuspendedAccountResponse()
    {
        $this->guard()->logout();

        $this->addError('email', trans('auth.suspended'));
    }

    protected function incrementLoginAttempts($email)
    {
        $this->limiter()->hit(
            $this->throttleKey($email),
            $this->decayMinutes() * 60
        );
    }

    protected function sendLockoutResponse()
    {
        $seconds = $this->limiter()->availableIn(
            $this->throttleKey($this->email)
        );

        $this->addError('email', Lang::get('auth.throttle', [
            'seconds' => $seconds,
            'minutes' => ceil($seconds / 60),
        ]));
    }

    protected function hasTooManyLoginAttempts($email)
    {
        return $this->limiter()->tooManyAttempts(
            $this->throttleKey($email),
            $this->maxAttempts()
        );
    }

    protected function throttleKey($email)
    {
        return Str::lower($email . '|' . request()->ip());
    }

    protected function attemptLogin()
    {
        return $this->guard()->attempt(
            [
                'email' => $this->email,
                'password' => $this->password,
            ],
            $this->remember,
        );
    }

    protected function sendLoginResponse()
    {
        session()->regenerate();

        $this->clearLoginAttempts();

        if ($response = $this->authenticated($this->guard()->user())) {
            return $response;
        }

        return redirect()->intended($this->redirectPath());
    }

    protected function clearLoginAttempts()
    {
        $this->limiter()->clear($this->throttleKey($this->email));
    }

    protected function sendFailedLoginResponse()
    {
        $this->addError('email', trans('auth.failed'));
    }

    protected function authenticated($user)
    {
        try {
            Stringee::registerAgent($user);
        } catch (Exception $e) {
            Log::warning("$user->email register stringee token failed", [
                'message' => $e->getMessage()
            ]);
        }
    }

    protected function guard($guard = 'web')
    {
        return Auth::guard($guard);
    }
}
