<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <title>{{ config('app.name') }}</title>
    <meta name="description" content="AppotaPay CRM">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Questrial&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700">

    @livewireStyles
    <link href="{{ mix('assets/css/app.css') }}" rel="stylesheet" type="text/css">
    <script src="{{ mix('assets/js/bootstrap.js') }}" data-turbolinks-eval="false" data-turbo-eval="false" defer>
    </script>
</head>

<body
    class="kt-quick-panel--right kt-demo-panel--right kt-offcanvas-panel--right kt-header--fixed kt-header-mobile--fixed kt-subheader--enabled kt-subheader--fixed kt-subheader--solid kt-aside--enabled kt-aside--fixed kt-aside--minimize kt-page--loading">

    @php
    $layout = [
    auth()->guard()->check() => 'layouts.auth',
    !auth()->guard()->check() => 'layouts.guest',
    ][true];
    @endphp

    <x-dynamic-component :component="$layout">
        {{ $slot }}
    </x-dynamic-component>

    @livewireScripts
    @stack('user')
    <script src="{{ mix('assets/js/manifest.js') }}" defer></script>
    <script src="{{ mix('assets/js/vendor.js') }}" defer></script>
    <script src="{{ mix('assets/js/app.js') }}" data-turbolinks-eval="false" data-turbo-eval="false" defer></script>
    <script type="text/javascript" src="https://static.stringee.com/web_phone/lastest/js/StringeeSoftPhone-lastest.js"></script>
    <script src="{{ mix('assets/js/stringee.js') }}"></script>
    @stack('js')
    <script src="{{ mix('assets/js/livewire-turbolinks.js') }}" data-turbolinks-eval="false" data-turbo-eval="false"
        defer></script>
</body>

</html>
