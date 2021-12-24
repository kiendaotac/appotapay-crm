<x-layouts.partials.header-mobile />

<div class="kt-grid kt-grid--hor kt-grid--root">
    <div class="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--ver kt-page">

        <x-layouts.partials.aside.template />

        <div class="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor kt-wrapper" id="kt_wrapper">
            <x-layouts.partials.header />
            {{ $slot }}
        </div>
    </div>
</div>

@push('user')
<script>
    window.__user__ = @json(auth()->user())
</script>
@endpush
