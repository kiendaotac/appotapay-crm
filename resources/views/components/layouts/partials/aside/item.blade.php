@props(['icon', 'title', 'href', 'active'])

@php
$active ??= false;
@endphp

<li {{ $attributes->merge(['class' => 'kt-menu__item' . ($active ? ' menu-item-is-active' : '')]) }}
    aria-haspopup="true" x-data x-on:click="KTLayout.getAsideMenu().setActiveItem($el)">
    <a href="{{ $href }}" class="kt-menu__link ">
        {{ $icon }}
        <span class="kt-menu__link-text">{{ $title }}</span>
    </a>
</li>
