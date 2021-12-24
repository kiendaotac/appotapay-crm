<?php

namespace App\Services\Businesses;

use App\Services\Contracts\UserService;
use Illuminate\Support\Facades\Storage;

class UserServiceBusiness implements UserService
{
    public function uploadAvatar($file): string
    {
        $extension = $file->getClientOriginalExtension(); // getting file extension
        $fileName = uniqid("appota") . '.' . $extension; // renaming file$
        $file->storePubliclyAs('', $fileName, 'users');
        return Storage::disk('users')->url($fileName);
    }
}
