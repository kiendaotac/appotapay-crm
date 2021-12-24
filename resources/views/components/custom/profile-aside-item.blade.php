@props(['icon', 'routeName'])

@php
$active = request()->routeIs($routeName);
@endphp

<a href="{{ route($routeName) ?? 'javascript:void(0)' }}" class="kt-widget__item {{ $active ? 'kt-widget__item--active' : '' }}">
    <span class="kt-widget__section">
        {{ $icon ?? '' }}
        <span class="kt-widget__desc">
            {{ $slot ?? '' }}
        </span>
    </span>
</a>
