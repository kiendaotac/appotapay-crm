<?php

namespace App\Services\Businesses;

use App\Http\Gateways\StringeeGateway;
use App\Models\User;
use App\Services\Contracts\StringeeService;
use Firebase\JWT\JWT;
use Illuminate\Support\Facades\Log;

class StringeeServiceBusiness implements StringeeService
{
    protected $stringeeGateway;

    public function __construct(StringeeGateway $stringeeGateway)
    {
        $this->stringeeGateway = $stringeeGateway;
    }

    public function downloadRecordCall($callId): string
    {
        return $this->stringeeGateway->downloadRecordCall(auth()->user()->stringee_token, $callId) ?? '';
    }

    public function registerAgent(User $user)
    {
        $username = explode("@", $user->email)[0];
        $token = $this->generateClientToken($username);
        $response = $this->stringeeGateway->createAgent($token, $user->name, $username);
        $attributes = [
            'stringee_token' => $token,
            'stringee_username' => $username,
        ];
        if ($response['status']) {
            $attributes['stringee_id'] = $response['data']['agentID'];
        }
        $user->fill($attributes);
        return $user->save();
    }

    /**
     * @link https://github.com/stringeecom/server-samples/blob/master/access_token/php
     */
    private function generateClientToken($userId): string
    {
        $stringeeSecretKey = config('services.stringee.secret_key');
        $stringeeApiKey = config('services.stringee.api_key');
        $stringeeExpire = (int) config('services.stringee.expire');
        $now = now()->startOfDay();

        Log::debug('payload', [
            "jti" => $stringeeApiKey . "-" . $now->timestamp,
            "iss" => $stringeeApiKey,
            "icc_api" => true,
            "rest_api" => true,
            "exp" => $now->timestamp + $stringeeExpire,
            "userId" => $userId
        ]);

        return JWT::encode([
            "jti" => $stringeeApiKey . "-" . $now->timestamp,
            "iss" => $stringeeApiKey,
            "icc_api" => true,
            "rest_api" => true,
            "exp" => $now->timestamp + $stringeeExpire,
            "userId" => $userId
        ], $stringeeSecretKey, 'HS256', null, [
            'cty' => "stringee-api;v=1"
        ]);
    }
}
