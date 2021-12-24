<?php

namespace App\Services\Facades;

use Illuminate\Support\Facades\Facade;

/**
 * @method static void registerAgent(\App\Models\User $user)
 * @method static string generateClientToken($userId)
 *
 * @see \App\Services\Contracts\StringeeService
 */
class Stringee extends Facade
{
    protected static function getFacadeAccessor()
    {
        return 'stringee';
    }
}
