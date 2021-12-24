<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Gateways\CmsOauthAppotaPayGateway;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use App\Services\Facades\Stringee;
use Exception;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class LoginController extends Controller
{
    use AuthenticatesUsers;

    public function showLoginForm()
    {
        return view('pages.auth.login');
    }

    protected function redirectTo()
    {
        return RouteServiceProvider::HOME;
    }

    public function redirectToAppotaPayProvider(CmsOauthAppotaPayGateway $cmsOauthAppotaPayGateway)
    {
        $redirectAuthorization = $cmsOauthAppotaPayGateway->requestAuthentication();
        if (!$redirectAuthorization['status']) {
            return back()->withErrors(['token' => 'Token Appota Pay không hợp lệ.']);
        }
        return redirect($redirectAuthorization['redirect_uri']);
    }

    public function handleAppotaPayCallback(Request $request, CmsOauthAppotaPayGateway $cmsOauthAppotaPayGateway)
    {
        $accessToken = $cmsOauthAppotaPayGateway->requestAccessToken($request->authorization_code);
        if (!$accessToken['status']) {
            return redirect()->route('login')->withErrors([
                'email' => 'Đăng nhập thất bại.'
            ]);
        }
        $userData = $cmsOauthAppotaPayGateway->checkValidAccessToken($accessToken['access_token']);
        if (!$userData['status']) {
            return redirect()->route('login')->withErrors([
                'email' => 'Đăng nhập thất bại.'
            ]);
        }
        $userData = $userData['data']['user_info'];

        $authUser = User::firstOrCreate([
            'email' => $userData['email']
        ], [
            'phone' => $userData['phone_number'],
            'name' => $userData['full_name'],
            'avatar' => $userData['avatar'],
            'is_active' => $userData['status'] === 'active' ? true : false,
        ]);

        if (!$authUser->is_active) {
            return redirect()->route('login')->withErrors([
                $this->username() => trans('auth.suspended')
            ]);
        }

        $this->guard()->login($authUser);
        return $this->sendLoginResponse($request);
    }

    protected function sendLoginResponse(Request $request)
    {
        $request->session()->regenerate();

        $this->clearLoginAttempts($request);

        return $this->authenticated($request, $this->guard()->user())
            ?: redirect()->intended($this->redirectPath());
    }

    protected function authenticated(Request $request, $user)
    {
        try {
            Stringee::registerAgent($user);
        } catch (Exception $e) {
            Log::warning("$user->email register stringee token failed", [
                'message' => $e->getMessage()
            ]);
        }
    }

    protected function loggedOut()
    {
        return redirect()->route('login');
    }
}
