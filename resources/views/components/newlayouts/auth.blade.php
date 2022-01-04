<x-newlayouts.partials.header />
{{ $slot }}
@push('user')
    <script>
        window.__user__ = @json(auth()->user())
    </script>
@endpush