<div class="kt-content  kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor" id="kt_content">
    <!-- begin:: Content -->
    <div class="kt-container  kt-container--fluid  kt-grid__item kt-grid__item--fluid">
        <form class="kt-form" wire:submit.prevent="save">
            <div class="row">
                <div class="col-sm-12 col-md-3 col-lg-3">
                    <div class="kt-portlet">
                        <div class="kt-portlet__body">
                            <div class="kt-section kt-section--first">
                                <div class="form-group">
                                    <label>Giao cho:</label>
                                    <div class="row">
                                        <x-widget.selectpicker class="form-control col-11" tabindex="-98"
                                            wire:model.defer="assignees" multiple data-live-search="true"
                                            data-live-search-normalize="true" data-selected-text-format="count > 1">
                                            @foreach ($agents as $item)
                                            <option value="{{ $item->id }}"
                                                data-icon="far fa-dot-circle text-{{ $item->status === 'ONLINE' ? 'success' : 'muted' }}"
                                                title="{{ $item->email }}">
                                                &nbsp;{{ $item->name }}&nbsp;({{ $item->email }})
                                            </option>
                                            @endforeach
                                        </x-widget.selectpicker>
                                        <div class="col-1 align-self-center">
                                            <x-fas-info-circle data-container="body" data-toggle="kt-tooltip"
                                                data-placement="right" data-html="true"
                                                data-original-title="{{ $this->assigneeDecoration }}" width="20"
                                                height="20" />
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label>Sản phẩm</label>
                                    <x-widget.selectpicker class="form-control" tabindex="-98"
                                        wire:model.defer="ticket.product_id">
                                        @foreach ($products as $item)
                                        <option value="{{ $item->id }}">{{ $item->name }}&nbsp;({{ $item->code }})
                                        </option>
                                        @endforeach
                                    </x-widget.selectpicker>
                                </div>
                                <div class="form-group">
                                    <label>Trạng thái</label>
                                    <x-widget.selectpicker class="form-control" tabindex="-98"
                                        wire:model.defer="ticket.status">
                                        @foreach ($statuses as $key => $item)
                                        <option value="{{ $key }}">{{ $item }}</option>
                                        @endforeach
                                    </x-widget.selectpicker>
                                </div>
                                <div class="form-group">
                                    <label>Độ ưu tiên</label>
                                    <div class="input-group">
                                        <x-custom.select-priority-ticket wire:model.defer="ticket.priority" />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label>Nhóm lỗi</label>
                                    <x-widget.selectpicker class="form-control" tabindex="-98"
                                        wire:model.defer="ticket.variant">
                                        @foreach ($variants as $key => $item)
                                        <option value="{{ $key }}">{{ $item }}</option>
                                        @endforeach
                                    </x-widget.selectpicker>
                                </div>
                                <div class="form-group" wire:ignore>
                                    <label>Từ khóa</label>
                                    <x-widget.tagify wire:model.lazy="tags" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-6">
                    <div class="kt-portlet">
                        <div class="kt-portlet__head">
                            <div class="kt-portlet__head-label">
                                <h3 class="kt-portlet__head-title">
                                    Tạo mới ticket
                                </h3>
                            </div>
                        </div>

                        <!--begin::Form-->
                        <div class="kt-portlet__body">
                            <div class="kt-section kt-section--first">
                                <div class="form-group">
                                    <label>Vấn đề:</label>
                                    <input type="text" class="form-control" wire:model.defer="ticket.name">
                                    @error('ticket.name') <span class="text-danger error">{{ $message }}</span>@enderror
                                </div>
                                <div class="form-group">
                                    <label>Mô tả:</label>
                                    <div class="border rounded px-3 py-2 min-h-24"
                                        x-data="{content: @entangle('ticket.description').defer}"
                                        x-on:blur="content = linkify(clean_comment_input($el.innerHTML))"
                                        contenteditable="true">
                                        {!! $ticket->description !!}
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label>File đính kèm</label>
                                    <div class="input-group">
                                        <label for="upload-file" class="btn btn-info">
                                            <input type="file" id="upload-file" class="form-control"
                                                placeholder="Duyệt file" hidden multiple wire:model.defer="photos">
                                            <x-far-file-image width="20" height="20" />
                                            &nbsp;Duyệt file
                                        </label>
                                        &nbsp;
                                        @if(count($photos ?? []))
                                        <label class="btn btn-outline-danger btn" wire:click="resetPhoto">Xóa
                                            file</label>
                                        @endif
                                    </div>

                                    <div class="d-flex flex-wrap">
                                        @foreach ($photos ?? [] as $item)
                                        <a href="{{ $item->temporaryUrl() }}" data-lightbox="roadtrip">
                                            <div class="mr-1 border rounded upload-image-preview"
                                                style="background-image:url('{{ $item->temporaryUrl() }}');">
                                            </div>
                                        </a>
                                        @endforeach
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="kt-portlet__foot">
                            <div class="kt-form__actions text-center">
                                <button type="submit" class="btn btn-primary">Tạo ticket</button>
                            </div>
                        </div>

                        <!--end::Form-->
                    </div>
                </div>
                <div class="col-sm-12 col-md-3 col-lg-3">
                    <div class="kt-portlet">

                        <!--begin::Form-->
                        <div class="kt-portlet__body">
                            <div class="kt-section kt-section--first">
                                <div class="form-group">
                                    <label>Tên khách hàng:</label>
                                    <input type="text" class="form-control" wire:model.defer="ticket.customer_name">
                                </div>
                                <div class="form-group">
                                    <label>Email:</label>
                                    <input type="email" class="form-control" wire:model.defer="ticket.customer_email">
                                    @error('ticket.customer_email') <span
                                        class="text-danger error">{{ $message }}</span>@enderror
                                </div>
                                <div class="form-group">
                                    <label>SĐT:</label>
                                    <input type="text" class="form-control" wire:model.defer="ticket.customer_phone">
                                </div>
                            </div>
                        </div>

                        <!--end::Form-->
                    </div>
                </div>
            </div>
        </form>
    </div>

    <!-- end:: Content -->
</div>
