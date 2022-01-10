<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="canonical" href="" />
    <title>{{ config('app.name') }}</title>
    <link href="{{ asset('assets/css/bootstrap.min.css') }}" rel="stylesheet" />
    <link href="{{ asset('assets/css/style.css') }}" rel="stylesheet" />
    <link href="{{ asset('assets/css/datepicker.css') }}" rel="stylesheet" />
    <link href="{{ asset('assets/css/select2.min.css') }}" rel="stylesheet" />
    <link href="{{ asset('assets/css/dataTables.bootstrap5.min.css') }}" rel="stylesheet" />
    @livewireStyles
    <link href="{{ mix('assets/css/app.css') }}" rel="stylesheet" type="text/css">
    <script src="{{ mix('assets/js/bootstrap.js') }}" data-turbolinks-eval="false" data-turbo-eval="false" defer>
    </script>
</head>
<body>
@php
    auth()->check() ? $layout = "newlayouts.auth" : $layout = "layouts.guest"
@endphp

<x-dynamic-component :component="$layout">
    {{ $slot }}
</x-dynamic-component>
@livewireScripts
@stack('user')
<script src="{{ asset('assets/js/jquery-3.6.0.min.js') }}"></script>
<script src="{{ asset('assets/js/popper.min.js') }}"></script>
<script src="{{ asset('assets/js/bootstrap.min.js') }}"></script>
<script src="{{ asset('assets/js/select2.min.js') }}"></script>
<script src="{{ asset('assets/js/jquery.dataTables.min.js') }}"></script>
<script src="{{ asset('assets/js/dataTables.bootstrap5.min.js') }}"></script>
<script src="{{ asset('assets/js/bootstrap-datepicker.js') }}"></script>
<script src="{{ asset('assets/js/main.js') }}"></script>

<script src="{{ mix('assets/js/manifest.js') }}" defer></script>
<script src="{{ mix('assets/js/vendor.js') }}" defer></script>
<script src="{{ mix('assets/js/app.js') }}" data-turbolinks-eval="false" data-turbo-eval="false" defer></script>
@stack('js')
<script src="{{ mix('assets/js/livewire-turbolinks.js') }}" data-turbolinks-eval="false" data-turbo-eval="false"
        defer></script>
</body>
</html>