<?php

namespace App\Http\Gateways;

use Illuminate\Http\File;
use Illuminate\Support\Facades\Storage;

class StringeeGateway extends Gateway
{
    public function __construct()
    {
        parent::__construct();
    }

    public function createAgent($token, $name, $stringeeUserId)
    {
        $response = $this->request('POST', 'https://icc-api.stringee.com/v1/agent', [
            'headers' => [
                'X-STRINGEE-AUTH' => $token
            ],
            'json' => [
                'name' => $name,
                'stringee_user_id' => $stringeeUserId
            ]
        ]);

        if ($response->failed()) {
            return [
                'status' => false,
                'message' => $response->json('message') ?? 'Lỗi hệ thống.'
            ];
        }

        $body = $response->json();
        if ($body['r'] !== 0) {
            return [
                'status' => false,
                'message' => $body['message'] ?? 'Lỗi hệ thống.'
            ];
        }

        return [
            'status' => true,
            'data' => $body
        ];
    }

    public function downloadRecordCall($token, $callId)
    {
        $destinationDir = "media/records";
        $filename = $callId . '.' . 'ogg';
        $this->ensureDestinationDirectoryExists($destinationDir);
        $filePath = public_path("{$destinationDir}/{$filename}");
        $this->request('GET', 'https://api.stringee.com/v1/call/recording', [
            'headers' => [
                'X-STRINGEE-AUTH' => $token,
                'sink' => $filePath
            ],
        ]);
        try {
            $filePath = new File($filePath);
            return Storage::disk('records')->putFileAs('', $filePath, $filename, 'public');
        } catch (\Throwable $th) {
            return '';
        }
    }
}
