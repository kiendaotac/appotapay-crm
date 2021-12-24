<div>
    <div wire:ignore.self class="modal fade" id="show-ticket-local-modal" tabindex="-1" role="dialog"
        aria-labelledby="show-ticket-local-label" aria-hidden="true">
        <div class="modal-dialog modal-xl" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="show-ticket-local-label">
                        Xem trước ticket
                    </h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    </button>
                </div>
                <div class="modal-body" style="background: #f2f3f8">
                    @if (isset($ticket))
                    <div class="kt-container  kt-container--fluid  kt-grid__item kt-grid__item--fluid">
                        <form class="kt-form">
                            @csrf
                            <div class="row">
                                <div class="col-sm-12 col-md-12 col-lg-6 order-1">
                                    <x-bootstrap.accordion title="">
                                        <div class="kt-section kt-section--first">
                                            <div class="form-group">
                                                <label>Giao cho: </label>
                                                <strong>{{ $ticket->assignees()->pluck('email')->implode(', ') }}</strong>
                                            </div>
                                            <div class="form-group">
                                                <label>Sản phẩm: </label>
                                                <strong>{{ optional($ticket->product()->first())->name }}</strong>
                                            </div>
                                            <div class="form-group">
                                                <label>Trạng thái</label>
                                                <span>
                                                    &nbsp;
                                                    <span
                                                        class="kt-badge kt-badge--{{ $ticket->status_decoration['color'] }} kt-badge--dot">
                                                    </span>
                                                    <span
                                                        class="kt-font-bold kt-font-{{ $ticket->status_decoration['color'] }}">{{ $ticket->status_decoration['value'] }}
                                                    </span>
                                                </span>
                                            </div>
                                            <div class="form-group">
                                                <label>Độ ưu tiên: </label>
                                                <span class="badge badge-{{ $ticket->priority_decoration['color']}}">
                                                    {{ $ticket->priority_decoration['value']}}
                                                </span>
                                            </div>
                                            <div class="form-group">
                                                <label>Nhóm lỗi: </label>
                                                <span
                                                    class="kt-badge kt-badge--unified-{{ $ticket->variant_decoration['color'] }} kt-badge--bold kt-badge--inline">
                                                    {{ $ticket->variant_decoration['value'] }}
                                                </span>
                                            </div>
                                            <div class="form-group">
                                                <label>Từ khóa: </label>
                                                @foreach ($ticket->tags()->get() as $item)
                                                <a href="{{ route('ticket.locals.index', ['tag' => $item->name]) }}"
                                                    class="kt-badge kt-badge--unified-brand kt-badge--md kt-badge--rounded kt-badge--bold kt-badge--inline py-1">
                                                    {{ $item->name }}
                                                </a>
                                                @endforeach
                                            </div>
                                        </div>
                                    </x-bootstrap.accordion>
                                    <x-bootstrap.accordion title="Thông tin thêm" class="mt-4">
                                        <div class="kt-section kt-section--first">
                                            <div class="kt-scroll kt-scroll--pull" data-scroll="true"
                                                style="height: 300px;">
                                                <div class="kt-section kt-sectioin--last">
                                                    <div class="form-group">
                                                        <label>Tạo bởi:</label>
                                                        <p class="form-control-static">
                                                            {{ isset($ticket->creator) ? "{$ticket->creator->name} - {$ticket->creator->email}" : ''}}
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
                                <div class="col-12 order-3 mt-4">
                                    <div class="kt-portlet">

                                        <!--begin::Form-->
                                        <div class="kt-grid__item kt-grid__item--fluid kt-app__content"
                                            id="kt_chat_content">
                                            <div class="kt-chat">
                                                <div class="kt-portlet kt-portlet--head-lg kt-portlet--last">
                                                    <div class="kt-portlet__head">
                                                        <div class="kt-chat__head ">
                                                            <div class="kt-chat__left">
                                                                <div class="kt-chat__label">
                                                                    <h5>{{ $ticket->name }}</h5>
                                                                </div>
                                                                <div class="kt-chat__pic kt-hidden">
                                                                    <span class="kt-media kt-media--sm kt-media--circle"
                                                                        data-toggle="kt-tooltip" data-placement="right"
                                                                        title="Jason Muller"
                                                                        data-original-title="Tooltip title">
                                                                        <img src="/assets/media/users/300_12.jpg"
                                                                            alt="image">
                                                                    </span>
                                                                    <span class="kt-media kt-media--sm kt-media--circle"
                                                                        data-toggle="kt-tooltip" data-placement="right"
                                                                        title="Nick Bold"
                                                                        data-original-title="Tooltip title">
                                                                        <img src="/assets/media/users/300_11.jpg"
                                                                            alt="image">
                                                                    </span>
                                                                    <span class="kt-media kt-media--sm kt-media--circle"
                                                                        data-toggle="kt-tooltip" data-placement="right"
                                                                        title="Milano Esco"
                                                                        data-original-title="Tooltip title">
                                                                        <img src="/assets/media/users/100_14.jpg"
                                                                            alt="image">
                                                                    </span>
                                                                    <span class="kt-media kt-media--sm kt-media--circle"
                                                                        data-toggle="kt-tooltip" data-placement="right"
                                                                        title="Teresa Fox"
                                                                        data-original-title="Tooltip title">
                                                                        <img src="/assets/media/users/100_4.jpg"
                                                                            alt="image">
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="kt-portlet__body">
                                                        <div class="kt-scroll kt-scroll--pull" data-mobile-height="300"
                                                            wire:ignore.self>
                                                            <div class="kt-chat__messages">
                                                                @foreach ($ticket->comments()->oldest()->get() as $item)
                                                                <div>
                                                                    @if ($item->id == auth()->id())
                                                                    <div
                                                                        class="kt-chat__message kt-chat__message--right">
                                                                        <div class="kt-chat__user">
                                                                            <span class="kt-chat__datetime"
                                                                                data-container="body"
                                                                                data-toggle="kt-tooltip"
                                                                                data-placement="top"
                                                                                data-original-title="{{ $item->pivot->created_at }}">
                                                                                {{ $item->pivot->diff_for_now }}
                                                                            </span>
                                                                            <a href="#" class="kt-chat__username">
                                                                                <span>{{ $item->name }}</span>
                                                                            </a>
                                                                            <span
                                                                                class="kt-media kt-media--circle kt-media--sm">
                                                                                <img src="{{ $item->avatar_url }}"
                                                                                    alt="image">
                                                                            </span>
                                                                        </div>
                                                                        <div
                                                                            class="kt-chat__text text-break kt-bg-light-brand">
                                                                            {!! $item->pivot->content !!}
                                                                        </div>
                                                                    </div>
                                                                    @else
                                                                    <div class="kt-chat__message">
                                                                        <div class="kt-chat__user">
                                                                            <span
                                                                                class="kt-media kt-media--circle kt-media--sm">
                                                                                <img src="{{ $item->avatar_url }}"
                                                                                    alt="image">
                                                                            </span>
                                                                            <a href="#" class="kt-chat__username">
                                                                                <span>{{ $item->name }}</span>
                                                                            </a>
                                                                            <span class="kt-chat__datetime"
                                                                                data-container="body"
                                                                                data-toggle="kt-tooltip"
                                                                                data-placement="top"
                                                                                data-original-title="{{ $item->pivot->created_at }}">
                                                                                {{ $item->pivot->diff_for_now }}
                                                                            </span>
                                                                        </div>
                                                                        <div
                                                                            class="kt-chat__text text-break kt-bg-light-success">
                                                                            {!! $item->pivot->content !!}
                                                                        </div>
                                                                    </div>
                                                                    @endif
                                                                </div>
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
                                <div class="col-sm-12 col-md-12 col-lg-6 order-2">
                                    <x-bootstrap.accordion title="Khách hàng">
                                        <div class="kt-section kt-section--first">
                                            <div class="form-group">
                                                <label>Tên khách hàng:</label>
                                                <input type="text" class="form-control"
                                                    value="{{ $ticket->customer_name }}" readonly>
                                            </div>
                                            <div class="form-group">
                                                <label>Email:</label>
                                                <input type="email" class="form-control"
                                                    value="{{ $ticket->customer_email }}" readonly>
                                            </div>
                                            <div class="form-group">
                                                <label>SĐT:</label>
                                                <input type="tel" class="form-control"
                                                    value="{{ $ticket->customer_phone }}" readonly>
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
                                                                    src="{{ optional($item->causer)->avatar_url }}"
                                                                    alt="image">
                                                            </div>
                                                            <div class="kt-notes__content">
                                                                <div class="kt-notes__section">
                                                                    <div class="kt-notes__info">
                                                                        <a href="javascript:void(0)"
                                                                            class="kt-notes__title"
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
                    @endif
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-link" data-dismiss="modal">Đóng</button>
                </div>
            </div>
        </div>
    </div>
</div>
