<div>
    <button class="btn btn-brand btn-elevate btn-icon-sm" type="button" data-toggle="modal"
        data-target="#create-role-modal">
        <i class="la la-plus"></i>
        Vai trò mới
    </button>
    <div wire:ignore.self class="modal fade" id="create-role-modal" tabindex="-1" role="dialog"
        aria-labelledby="create-role-label" aria-hidden="true" x-data x-on:saved.window="$($el).modal('hide')">
        <div class="modal-dialog modal-md" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="create-role-label">
                        Vai trò mới
                    </h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    </button>
                </div>
                <div class="modal-body">
                    <form wire:submit.prevent="save">
                        <div class="form-group">
                            <label for="name" class="form-control-label">Tên:</label>
                            <input type="text" class="form-control" wire:model.lazy="role.name">
                            @error('role.name') <span class="text-danger error">{{ $message }}</span>@enderror
                        </div>
                        <div class="form-group">
                            <label for="display_name" class="form-control-label">Tên hiển thị:</label>
                            <input type="text" class="form-control" wire:model.lazy="role.display_name">
                            @error('role.display_name') <span class="text-danger error">{{ $message }}</span>@enderror
                        </div>
                        <div class="form-group">
                            <label for="description" class="form-control-label">Mô tả:</label>
                            <input type="text" class="form-control" wire:model.lazy="role.description">
                            @error('role.description') <span class="text-danger error">{{ $message }}</span>@enderror
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
