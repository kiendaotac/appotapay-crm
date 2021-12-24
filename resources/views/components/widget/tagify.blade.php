<input wire:ignore x-data="{ tags: @entangle($attributes->wire('model')).defer }" x-init="
        tagify = new Tagify($el, {
            originalInputValueFormat: valuesArr => valuesArr.map(item => item.value).join(','),
            transformTag: function(tagData) {
                tagData.class = 'tagify__tag tagify__tag--brand';
            }
        })
        tagify.addTags(tags)
        tagify.on('change', e => tags = e.detail.value)
    " />
