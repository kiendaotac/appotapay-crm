<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class BusinessServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(\App\Services\Contracts\TicketLocalService::class, function () {
            $repository = $this->app->make(\App\Repositories\Contracts\TicketRepository::class);
            return new \App\Services\Businesses\TicketLocalServiceBusiness($repository);
        });
        $this->app->bind(\App\Services\Contracts\TicketCallService::class, function () {
            $repository = $this->app->make(\App\Repositories\Contracts\TicketRepository::class);
            return new \App\Services\Businesses\TicketCallServiceBusiness($repository);
        });
        $this->app->bind(\App\Services\Contracts\StringeeService::class, \App\Services\Businesses\StringeeServiceBusiness::class);
        $this->app->bind('stringee', function () {
            return $this->app->make(\App\Services\Contracts\StringeeService::class);
        });
        $this->app->bind(\App\Services\Contracts\UserService::class, \App\Services\Businesses\UserServiceBusiness::class);
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
