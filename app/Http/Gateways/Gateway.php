<?php

namespace App\Http\Gateways;

use Exception;
use Illuminate\Http\Client\Factory;
use Illuminate\Support\Facades\Log;

class Gateway
{
    public $client;

    public function __construct()
    {
        $this->client = new Factory;
    }

    public function request($method, $url, $options)
    {
        $response = null;
        try {
            $start = microtime(true);
            $method = strtoupper($method);
            $response = $this->client->send($method, $url, $options);
            $body = $response->json();
            $stats = $response->handlerStats();
            $duration = microtime(true) - $start;
            Log::notice('api outgoing: ', [
                'url' => $stats['url'],
                'method' => $method,
                'request' => $options,
                'response' => $body,
                'duration' => $duration,
            ]);
        } catch (Exception $e) {
            Log::error('Gateway Request failed: ' . $e->getMessage());
        }
        return $response;
    }

    protected function ensureDestinationDirectoryExists($destinationDir)
    {
        $destinationPath = public_path($destinationDir);
        if (file_exists($destinationPath)) {
            return true;
        }
        mkdir($destinationPath, 0777, true);
        $gitignore = '.gitignore';
        $text = "*\n!.gitignore\n";
        file_put_contents($destinationPath . '/' . $gitignore, $text);

        return true;
    }
}
