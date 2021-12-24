<?php

use Illuminate\Support\Facades\Route;

Route::group([
    'middleware' => ['guest']
], function () {
    Route::get('login', \App\Http\Livewire\Auth\Login::class)->name('login');
    Route::get('social/appota_pay_redirect', [\App\Http\Controllers\Auth\LoginController::class, 'redirectToAppotaPayProvider'])->name('login.redirectToAppotaPayProvider');
    Route::get('social/appota_pay_oauth', [\App\Http\Controllers\Auth\LoginController::class, 'handleAppotaPayCallback'])->name('login.handleAppotaPayCallback');
});
Route::group([
    'middleware' => ['auth']
], function () {
    Route::post('logout', [\App\Http\Controllers\Auth\LoginController::class, 'logout'])->name('logout');
    Route::any('adminer', [\Aranyasen\LaravelAdminer\AdminerAutologinController::class, 'index'])->middleware('can:viewAdminer');
    Route::get('logs', [\Rap2hpoutre\LaravelLogViewer\LogViewerController::class, 'index'])->middleware('can:viewLogs');

    Route::get('', \App\Http\Livewire\Dashboard\Index::class)->name('dashboard');

    // export csv

    Route::get('exportTicketCSV', [\App\Http\Livewire\TicketLocal\Index::class, 'exportTicketCSV'])->name('exportTicketCSV');
    // end export csv

    // Zone Ticket
    Route::group([
        'prefix' => 'ticket',
        'as' => 'ticket.',
    ], function () {

        // Zone Ticket Call
        Route::group([
            'prefix' => 'calls',
            'as' => 'calls.'
        ], function () {
            Route::get('', \App\Http\Livewire\TicketCall\Index::class)->name('index');
            Route::get('create', \App\Http\Livewire\TicketCall\Create::class)->name('create');
            Route::get('{ticket}/edit', \App\Http\Livewire\TicketCall\Edit::class)->name('edit')->whereNumber('ticket');
        });

        // Zone Ticket Local
        Route::group([
            'prefix' => 'locals',
            'as' => 'locals.'
        ], function () {
            Route::get('', \App\Http\Livewire\TicketLocal\Index::class)->name('index');
            Route::get('create', \App\Http\Livewire\TicketLocal\Create::class)->name('create');
            Route::get('{ticket}/edit', \App\Http\Livewire\TicketLocal\Edit::class)->name('edit')->whereNumber('ticket');
        });
    });

    Route::get('products', \App\Http\Livewire\Product\Index::class)
        ->name('products')
        ->middleware('can:viewAny,' . \App\Models\Product::class);

    // Zone User
    Route::group([
        'prefix' => 'users',
        'as' => 'users.'
    ], function () {
        Route::get('', \App\Http\Livewire\User\Index::class)
            ->name('index')
            ->middleware('can:viewAny,' . \App\Models\User::class);
        Route::get('{user}/edit', \App\Http\Livewire\User\Edit::class)->name('edit');
    });

    // Zone Role
    Route::group([
        'prefix' => 'roles',
        'as' => 'roles.'
    ], function () {
        Route::get('', \App\Http\Livewire\Role\Index::class)
            ->name('index')
            ->middleware('can:viewAny,' . \App\Models\Role::class);
        Route::get('{role}/edit', \App\Http\Livewire\Role\Edit::class)
            ->name('edit');
    });

    // Zone Permission
    Route::get('permissions', \App\Http\Livewire\Permission\Index::class)
        ->name('permissions.index')
        ->middleware('can:viewAny,' . \App\Models\Permission::class);

    // Zone Profile
    Route::group([
        'prefix' => 'profile',
        'as' => 'profile.',
    ], function () {
        Route::get('information', \App\Http\Livewire\Profile\Information::class)->name('information');
        Route::get('activity', \App\Http\Livewire\Profile\Activity::class)->name('activity');
        Route::get('notification', \App\Http\Livewire\Profile\Notification::class)->name('notification');
    });
});

Route::match(['get', 'post'], 'botman', \App\Http\Controllers\BotmanController::class);
