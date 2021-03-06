<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Third Party Services
    |--------------------------------------------------------------------------
    |
    | This file is for storing the credentials for third party services such
    | as Mailgun, Postmark, AWS and more. This file provides the de facto
    | location for this type of information, allowing packages to have
    | a conventional file to locate the various service credentials.
    |
    */

    'mailgun' => [
        'domain' => env('MAILGUN_DOMAIN'),
        'secret' => env('MAILGUN_SECRET'),
        'endpoint' => env('MAILGUN_ENDPOINT', 'api.mailgun.net'),
    ],

    'postmark' => [
        'token' => env('POSTMARK_TOKEN'),
    ],

    'ses' => [
        'key' => env('AWS_ACCESS_KEY_ID'),
        'secret' => env('AWS_SECRET_ACCESS_KEY'),
        'region' => env('AWS_DEFAULT_REGION', 'us-east-1'),
    ],

    'appota_pay_oauth' => [
        'client_id' => env('APPOTA_PAY_OAUTH_CLIENT_ID'),
        'api_key' => env('APPOTA_PAY_OAUTH_API_KEY'),
        'client_secret' => env('APPOTA_PAY_OAUTH_CLIENT_SECRET'),
    ],

    'stringee' => [
        'api_key' => env('STRINGEE_API_KEY'),
        'secret_key' => env('STRINGEE_SECRET_KEY'),
        'expire' => env('STRINGEE_EXPIRE'),
        'project_id' => env('STRINGEE_PROJECT_ID'),
    ],

    'telegram-bot-api' => [
        'token' => env('TELEGRAM_BOT_TOKEN')
    ],

    'apay_mail' => [
        'domain' => env('EMAIL_SERVICE_API_URL'),
        'secret' => env('EMAIL_SERVICE_SECRET_KEY'),
    ],

    'botman' => [
        'telegram' => [
            'token' => env('TELEGRAM_BOT_TOKEN')
        ],
    ],

];
