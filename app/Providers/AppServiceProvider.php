<?php

namespace App\Providers;

use Illuminate\Pagination\Paginator;
use Illuminate\Support\Facades\{URL, Schema};
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        if (config('app.https')) {
            $this->app['request']->server->set('HTTPS', true);
            URL::forceScheme('https');
        }

        Paginator::useBootstrap();

        Schema::defaultStringLength(191);
    }
}
