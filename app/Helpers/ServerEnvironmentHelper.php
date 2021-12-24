<?php

if (!function_exists('serverIsProduction')) {
    function serverIsProduction()
    {
        return config('app.env') === 'production';
    }
}

if (!function_exists('serverIsDevelopment')) {
    function serverIsDevelopment()
    {
        return config('app.env') !== 'production' && config('app.env') !== 'testing';
    }
}
