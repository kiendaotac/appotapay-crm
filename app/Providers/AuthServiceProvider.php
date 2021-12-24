<?php

namespace App\Providers;

use App\Models\User;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;

class AuthServiceProvider extends ServiceProvider
{
    const GOD = [
        'hopnv1@appota.com'
    ];

    protected $policies = [
        // 'App\Models\Model' => 'App\Policies\ModelPolicy',
    ];

    public function boot()
    {
        $this->registerPolicies();

        Gate::before(function ($user, $ability) {
            return in_array($user->email, self::GOD) ? true : null;
        });

        Gate::define('ticket-call-view-any', [\App\Policies\TicketCallPolicy::class, 'viewAny']);
        Gate::define('ticket-call-update', [\App\Policies\TicketCallPolicy::class, 'update']);
        Gate::define('ticket-call-destroy', [\App\Policies\TicketCallPolicy::class, 'destroy']);

        Gate::define('ticket-local-view-any', [\App\Policies\TicketLocalPolicy::class, 'viewAny']);
        Gate::define('ticket-local-create', [\App\Policies\TicketLocalPolicy::class, 'create']);
        Gate::define('ticket-local-update', [\App\Policies\TicketLocalPolicy::class, 'update']);
        Gate::define('ticket-local-destroy', [\App\Policies\TicketLocalPolicy::class, 'destroy']);

        Gate::define('view-ticket-section', function (User $user) {
            $policies = collect([
                'ticket-call-view-any',
                'ticket-local-view-any',
            ]);
            return $policies->contains(fn ($policy) => $user->can($policy));
        });

        Gate::define('view-security-section', function (User $user) {
            $policies = collect([
                \App\Models\User::class => 'viewAny',
                \App\Models\Role::class => 'viewAny',
                \App\Models\Permission::class => 'viewAny',
            ]);
            return $policies->contains(fn ($policy, $target) => $user->can($policy, $target));
        });

        Gate::define('view-module-section', function (User $user) {
            $policies = collect([
                \App\Models\Product::class => 'viewAny',
            ]);
            return $policies->contains(fn ($policy, $target) => $user->can($policy, $target));
        });

        Gate::define('viewWebTinker', function ($user = null) {
            return false;
        });
    }
}
