<select {{ $attributes }} wire:ignore x-data="{ selects: @entangle($attributes->wire('model')).defer }" x-init="
    $($el).select2({ width: '100%' })
    $($el).on('change', function () {
        selects = $(this).val()
    })
">
    {{ $slot }}
</select>
