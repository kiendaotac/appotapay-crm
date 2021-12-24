<div>
    <button class="btn btn-brand btn-elevate btn-icon-sm" type="button" data-toggle="modal"
        data-target="#create-product-modal">
        <i class="la la-plus"></i>
        Sản phẩm mới
    </button>
    <div wire:ignore.self class="modal fade" id="create-product-modal" tabindex="-1" role="dialog"
        aria-labelledby="create-product-label" aria-hidden="true">
        <div class="modal-dialog modal-sm" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="create-product-label">
                        Sản phẩm mới
                    </h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    </button>
                </div>
                <div class="modal-body">
                    <form wire:submit.prevent="save">
                        <div class="form-group">
                            <label for="name" class="form-control-label">Mã:</label>
                            <input type="text" class="form-control" wire:model="product.code">
                            @error('product.code') <span class="text-danger error">{{ $message }}</span>@enderror
                        </div>
                        <div class="form-group">
                            <label for="name" class="form-control-label">Tên:</label>
                            <input type="text" class="form-control" wire:model="product.name">
                            @error('product.name') <span class="text-danger error">{{ $message }}</span>@enderror
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-link" data-dismiss="modal">Đóng</button>
                    <button type="button" class="btn btn-primary" wire:click.prevent="save">Lưu</button>
                </div>
            </div>
        </div>
    </div>
</div>

@push('js')
<script>
    document.addEventListener('livewire:load', function () {
        @this.on('saved', () => {
            $("#create-product-modal").modal('hide');
        })
    })
</script>
@endpush
