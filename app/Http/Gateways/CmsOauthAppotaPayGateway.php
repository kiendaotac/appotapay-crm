<?php

namespace App\Http\Gateways;

class CmsOauthAppotaPayGateway extends Gateway
{
    public function __construct()
    {
        parent::__construct();
        $domain = [
            serverIsProduction() => 'https://cms-oauth.appotapay.com',
            !serverIsProduction() => 'https://dev.cms-oauth.appotapay.com',
        ][true];

        $this->client = $this->client->baseUrl($domain);
    }

    public function requestAuthentication()
    {
        $response = $this->request('post', 'api/token', [
            'form_params' => [
                'client_id' => config('services.appota_pay_oauth.client_id'),
                'redirect_uri' => route('login.handleAppotaPayCallback'),
                'response_type' => 'code',
            ],
            'headers' => ['Authorization' => config('services.appota_pay_oauth.api_key')],
        ]);
        if ($response->failed()) {
            return [
                'status' => false,
                'message' => 'Có lỗi xảy ra trong quá trình đăng nhập.'
            ];
        }
        $redirectUri = $response->json('redirect_uri');
        if (!$redirectUri) {
            return [
                'status' => false,
                'message' => 'Không tìm thấy redirect_uri.'
            ];
        }
        return [
            'status' => true,
            'redirect_uri' => $redirectUri,
        ];
    }

    public function requestAccessToken($authorizationCode)
    {
        $response = $this->request('post', 'api/generate/access_token', [
            'form_params' => [
                'client_id' => config('services.appota_pay_oauth.client_id'),
                'client_secret' => config('services.appota_pay_oauth.client_secret'),
                'authorization_code' => $authorizationCode,
            ],
            'headers' => ['Authorization' => config('services.appota_pay_oauth.api_key')],
        ]);
        if ($response->failed()) {
            return [
                'status' => false,
                'message' => 'Có lỗi xảy ra trong quá trình xác thực.'
            ];
        }
        $accessToken = $response->json('access_token');
        if (!$accessToken) {
            return [
                'status' => false,
                'message' => 'Không tìm thấy access_token.'
            ];
        }
        return [
            'status' => true,
            'access_token' => $accessToken,
        ];
    }

    public function checkValidAccessToken($accessToken)
    {
        $response = $this->request('post', 'api/token/valid', [
            'form_params' => [
                'client_id' => config('services.appota_pay_oauth.client_id'),
                'access_token' => $accessToken,
            ],
            'headers' => ['Authorization' => config('services.appota_pay_oauth.api_key')],
        ]);
        if ($response->failed()) {
            return [
                'status' => false,
                'message' => 'Có lỗi xảy ra trong quá trình xác thực.'
            ];
        }
        return [
            'status' => true,
            'data' => $response->json(),
        ];
    }
}
