<?php

namespace App\Services\Contracts;

use App\Models\User;

/**
 * @see \App\Services\Businesses\StringeeServiceBusiness
 */
interface StringeeService
{
    public function registerAgent(User $user);
    function downloadRecordCall($callId): string;
}
