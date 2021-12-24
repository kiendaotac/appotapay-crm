<?php

namespace App\Services\Contracts;

interface UserService
{
    function uploadAvatar($file): string;
}
