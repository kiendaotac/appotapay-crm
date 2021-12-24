<div class="kt-content  kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor" id="kt_content">

    <div class="kt-subheader   kt-grid__item" id="kt_subheader">
        <div class="kt-container  kt-container--fluid ">
            <div class="kt-subheader__main">
                <h3 class="kt-subheader__title">
                    Chi tiết ticket
                </h3>
            </div>
            <div class="kt-subheader__toolbar">
                <a href="{{ route('ticket.locals.index') }} " class="btn btn-default btn-bold">
                    Quay lại
                </a>
            </div>
        </div>
    </div>

    <!-- begin:: Content -->
    <div class="kt-container  kt-container--fluid  kt-grid__item kt-grid__item--fluid">
        <form class="kt-form">
            @csrf
            <div class="row">
                <div class="col-sm-12 col-md-3 col-lg-3">
                    <x-bootstrap.accordion title="">
                        <div class="kt-section kt-section--first">
                            <div class="form-group">
                                <label>Giao cho:</label>
                                <div class="row">
                                    <x-widget.selectpicker class="form-control selectpicker col-10" tabindex="-98"
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
                                    <div class="col-1 align-self-center justify-content-center">
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
                                        <option value="{{ $item->id }}">
                                            {{ $item->name }}&nbsp;({{ $item->code }})
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
                            <div class="form-group">
                                <label>Từ khóa</label>
                                <x-widget.tagify wire:model.defer="tags" />
                            </div>
                            <div class="kt-separator kt-separator--space-md kt-separator--border-dashed"></div>
                            <div class="form-group text-right">
                                <button type="button" class="btn btn-brand btn-bold" wire:click.prevent="save">
                                    <x-fas-save width="15" height="15" />
                                    &nbsp;&nbsp;Cập nhật
                                </button>
                            </div>
                        </div>
                    </x-bootstrap.accordion>
                    <x-bootstrap.accordion title="Thông tin thêm" class="mt-4">
                        <div class="kt-section kt-section--first">
                            <div class="kt-scroll kt-scroll--pull" data-scroll="true" style="height: 300px;">
                                <div class="kt-section kt-sectioin--last">
                                    <div class="form-group">
                                        <label>Tạo bởi:</label>
                                        <p class="form-control-static">
                                            {{ isset($ticket->creator) ? "{$ticket->creator->name} - {$ticket->creator->email}" : '' }}
                                        </p>
                                    </div>
                                    <div class="form-group">
                                        <label>Mô tả:</label>
                                        <p class="form-control-static">
                                            {!! $ticket->description !!}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </x-bootstrap.accordion>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-6">
                    <div class="kt-portlet">

                        <!--begin::Form-->
                        <div class="kt-grid__item kt-grid__item--fluid kt-app__content" id="kt_chat_content">
                            <div class="kt-chat">
                                <div class="kt-portlet kt-portlet--head-lg kt-portlet--last">
                                    <div class="kt-portlet__head">
                                        <div class="kt-chat__head ">
                                            <div class="kt-chat__left">
                                                <div class="kt-chat__label">
                                                    <div x-data=" {
                                                        text: @entangle('ticket.name').defer,
                                                        isEditing: false,
                                                        toggleEditingState() {
                                                            this.isEditing = !this.isEditing;

                                                            if (this.isEditing) {
                                                                this.$nextTick(() => {
                                                                    this.$refs.input.focus();
                                                                });
                                                            }
                                                        },
                                                        disableEditing() {
                                                            this.isEditing = false;
                                                        }
                                                    }" class="p-4">
                                                        <h5>
                                                            <a x-on:click.prevent x-on:dblclick="toggleEditingState"
                                                                x-show="!isEditing" x-text="text"></a>
                                                        </h5>
                                                        <input type="text" x-model="text" x-show="isEditing"
                                                            x-on:click.away="toggleEditingState"
                                                            x-on:keydown.enter="disableEditing"
                                                            x-on:keydown.window.escape="disableEditing"
                                                            class="form-control" x-ref="input">
                                                    </div>
                                                </div>
                                                <div class="kt-chat__pic kt-hidden">
                                                    <span class="kt-media kt-media--sm kt-media--circle"
                                                        data-toggle="kt-tooltip" data-placement="right"
                                                        title="Jason Muller" data-original-title="Tooltip title">
                                                        <img src="/assets/media/users/300_12.jpg" alt="image">
                                                    </span>
                                                    <span class="kt-media kt-media--sm kt-media--circle"
                                                        data-toggle="kt-tooltip" data-placement="right"
                                                        title="Nick Bold" data-original-title="Tooltip title">
                                                        <img src="/assets/media/users/300_11.jpg" alt="image">
                                                    </span>
                                                    <span class="kt-media kt-media--sm kt-media--circle"
                                                        data-toggle="kt-tooltip" data-placement="right"
                                                        title="Milano Esco" data-original-title="Tooltip title">
                                                        <img src="/assets/media/users/100_14.jpg" alt="image">
                                                    </span>
                                                    <span class="kt-media kt-media--sm kt-media--circle"
                                                        data-toggle="kt-tooltip" data-placement="right"
                                                        title="Teresa Fox" data-original-title="Tooltip title">
                                                        <img src="/assets/media/users/100_4.jpg" alt="image">
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="kt-portlet__body">
                                        <livewire:ticket.list-comment :ticket="$ticket->id" />
                                    </div>
                                    <div class="kt-portlet__foot">
                                        <div class="kt-chat__input">
                                            <div class="kt-chat__editor">
                                                <div class="border rounded px-3 py-2 kt-shape-bg-color-1 text-dark"
                                                    style="min-height: 5rem;max-height: 8rem; overflow-y: auto;"
                                                    x-data="{content: @entangle('newComment').defer}"
                                                    x-on:blur="content = linkify(clean_comment_input($el.innerHTML))"
                                                    contenteditable="true">
                                                    {!! $newComment !!}
                                                </div>
                                            </div>
                                            <div class="kt-chat__toolbar">
                                                <div class="kt_chat__tools">
                                                    <label>
                                                        <input type="file" wire:model="photos" hidden multiple>
                                                        <x-far-file-image width="25" height="25" />
                                                    </label>
                                                </div>
                                                <div class="kt_chat__actions">
                                                    <button type="button" wire:click="sendComment"
                                                        class="btn btn-brand btn-md">
                                                        <x-fas-paper-plane width="10" height="10" />
                                                        &nbsp;Gửi
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="d-flex flex-wrap mt-2">
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
                            </div>
                        </div>

                        <!--end::Form-->
                    </div>
                </div>
                <div class="col-sm-12 col-md-3 col-lg-3">
                    <x-bootstrap.accordion title="Khách hàng">
                        <div class="kt-section kt-section--first">
                            <div class="form-group">
                                <label>Tên khách hàng:</label>
                                <input type="text" class="form-control" wire:model.defer="ticket.customer_name">
                            </div>
                            <div class="form-group">
                                <label>Email:</label>
                                <input type="email" class="form-control" wire:model.defer="ticket.customer_email">
                            </div>
                            <div class="form-group">
                                <label>SĐT:</label>
                                <input type="tel" class="form-control" wire:model.defer="ticket.customer_phone">
                            </div>
                        </div>
                    </x-bootstrap.accordion>

                    <x-bootstrap.accordion title="Lịch sử hoạt động" class="mt-4">
                        <div class="kt-portlet__body">
                            <div class="kt-section kt-section--first">
                                <div class="kt-notes kt-scroll kt-scroll--pull" data-scroll="true"
                                    style="height: 500px;">
                                    <div class="kt-notes__items">
                                        @foreach ($activities ?? [] as $item)
                                            <div class="kt-notes__item">
                                                <div class="kt-notes__media">
                                                    <img class="kt-hidden-"
                                                        src="{{ optional($item->causer)->avatar_url }}" alt="image">
                                                </div>
                                                <div class="kt-notes__content">
                                                    <div class="kt-notes__section">
                                                        <div class="kt-notes__info">
                                                            <a href="javascript:void(0)" class="kt-notes__title"
                                                                data-toggle="kt-tooltip" role="button"
                                                                data-trigger="focus"
                                                                title="{{ $item->getExtraProperty('detail') ?? '' }}"
                                                                data-content="{{ $item->getExtraProperty('detail') ?? '' }}"
                                                                data-skin="brand">
                                                                {{ Str::ucfirst(__($item->description)) }}
                                                            </a>
                                                            <span class="kt-notes__desc">
                                                                {{ $item->created_at->format('H:i d-m-Y') }}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <span class="kt-notes__body">
                                                        Thực hiện bởi {{ optional($item->causer)->name }}
                                                        ({{ optional($item->causer)->email }})
                                                    </span>
                                                </div>
                                            </div>
                                        @endforeach

                                    </div>
                                </div>
                            </div>
                        </div>
                    </x-bootstrap.accordion>


                </div>
            </div>
        </form>
    </div>

    <!-- end:: Content -->
</div>
