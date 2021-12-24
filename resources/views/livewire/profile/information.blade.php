<x-custom.profile-layout>
    <div class="kt-grid__item kt-grid__item--fluid kt-app__content">
        <div class="row">
            <div class="col-xl-12">
                <div class="kt-portlet">
                    <div class="kt-portlet__head">
                        <div class="kt-portlet__head-label">
                            <h3 class="kt-portlet__head-title">Cập nhật thông tin cá nhân</h3>
                        </div>
                    </div>
                    <form class="kt-form kt-form--label-right" wire:submit.prevent="save">
                        <div class="kt-portlet__body">
                            <div class="kt-section kt-section--first">
                                <div class="kt-section__body">
                                    <div class="form-group row">
                                        <label class="col-xl-3 col-lg-3 col-form-label">Avatar</label>
                                        <div class="col-lg-9 col-xl-6">
                                            <div class="kt-avatar kt-avatar--outline" id="kt_user_avatar"
                                                wire:ignore.self>
                                                <div class="kt-avatar__holder" wire:ignore.self
                                                    style="background-image: url({{ $user->avatar_url }})">
                                                </div>
                                                <label class="kt-avatar__upload" data-toggle="kt-tooltip" title=""
                                                    data-original-title="Đổi avatar" wire:ignore.self>
                                                    <i class="fa fa-pen"></i>
                                                    <input type="file" name="profile_avatar" accept=".png, .jpg, .jpeg"
                                                        wire:model="avatar">
                                                </label>
                                                <span class="kt-avatar__cancel" data-toggle="kt-tooltip"
                                                    wire:ignore.self title="" data-original-title="Hủy"
                                                    wire:click="$set('avatar', null)">
                                                    <i class="fa fa-times"></i>
                                                </span>
                                            </div>
                                            <br>
                                            @error('avatar')
                                            <span class="text-danger">{{ $message }}</span>
                                            @enderror
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-xl-3 col-lg-3 col-form-label">Họ tên</label>
                                        <div class="col-lg-9 col-xl-6">
                                            <input class="form-control" type="text" wire:model.lazy="user.name">
                                            @error('user.name')
                                            <span class="text-danger">{{ $message }}</span>
                                            @enderror
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-xl-3 col-lg-3 col-form-label">SĐT</label>
                                        <div class="col-lg-9 col-xl-6">
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text">
                                                        <i class="fa fa-phone-alt"></i>
                                                    </span>
                                                </div>
                                                <input type="text" class="form-control" wire:model.lazy="user.phone">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-xl-3 col-lg-3 col-form-label">Telegram ID</label>
                                        <div class="col-lg-9 col-xl-6">
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text">
                                                        <i class="fab fa-telegram-plane"></i>
                                                    </span>
                                                </div>
                                                <input type="text" class="form-control" wire:model.lazy="user.telegram_id">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="kt-portlet__foot">
                            <div class="kt-form__actions">
                                <div class="row">
                                    <div class="col-lg-3 col-xl-3">
                                    </div>
                                    <div class="col-lg-9 col-xl-9">
                                        <button type="submit" class="btn btn-brand">Cập nhật</button>&nbsp;
                                        <x-custom.action-message on="saved" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</x-custom.profile-layout>
