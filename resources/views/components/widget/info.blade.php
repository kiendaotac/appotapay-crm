<div wire:ignore.self class="right-canvas wide" id="log_info">
    <div class="header-canvas d-flex align-items-center border-bottom-gray">
        <h4>Chi tiết cuộc gọi</h4>
        <button class="btn btn-sm btn-no-border ms-auto close-canvas" onclick="close_canvas('log_info');">
            <i class="ic ic-close-gray"></i>
        </button>
    </div>
    @if(isset($ticket))
    <div class="content-canvas p-0">
        <div class="d-flex h-100">
            <div class="col-6 h-100 bg-gray p-3">
                <div class="inner-ticket">
                    <div class="log-user-info d-flex border rounded">
                        <div class="avatar">
                            <img src="https://ui-avatars.com/api/?name={{ urlencode($ticket->customer_name ?? 'Default') }}&color=7F9CF5&background=EBF4FF" class="img-fluid" />
                        </div>
                        <div class="log-user-name ps-3">
                            <div class="text-16">{{ $ticket->customer_name }}</div>
                            <div class="d-flex pt-1 align-items-center">
                                <span class="text-14 d-flex align-items-center pe-3"><i class="ic ic-16 ic-id"></i> ID: {{ $ticket->id }}</span>
                                <span class="text-14 d-flex align-items-center"><i class="ic ic-16 ic-phone-outline"></i><a href="tel:{{ $ticket->customer_phone }}">{{ $ticket->customer_phone }}</a></span>
                            </div>
                        </div>
                    </div>

                    <div class="log-collapse">
                        <a class="text-14 text-600 text-dark text-decoration-none d-flex" data-bs-toggle="collapse" href="#log_guest_info" role="button" aria-expanded="false" aria-controls="log_guest_info">
                            Thông tin khách hàng
                            <span class="ic ic-chevor-right ms-auto"></span>
                        </a>
                        <div class="collapse" id="log_guest_info">
                            <div class="card card-body">
                                <div class="input-info">
                                    <label>Email</label>
                                    <div>{{ $ticket->customer_email }}</div>
                                </div>
                               {{-- <div class="input-info">
                                    <label>Địa chỉ</label>
                                    <div>Số 11/71 Láng Hạ, Ba Đình, Hà Nội</div>
                                </div>
                                <div class="input-info">
                                    <label>Ngày sinh</label>
                                    <div>20/07/1994</div>
                                </div>--}}
                                <div class="input-info">
                                    <a href="#" class="d-flex align-items-center text-decoration-none justify-content-center">
                                        <i class="ic ic-plus-square"></i>
                                        <span>Thêm thông tin</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr>
                    <div class="log-collapse">
                        <a class="text-14 text-600 d-flex text-dark text-decoration-none" data-bs-toggle="collapse" href="#log_guest_type" role="button" aria-expanded="false" aria-controls="log_guest_type">
                            Loại dịch vụ đã sử dụng
                            <span class="ic ic-chevor-right ms-auto"></span>
                        </a>
                        <div class="collapse" id="log_guest_type">
                            <div class="card card-body">
                                <div class="list-item">
                                    <div class="item-img">
                                        <img src="{{ asset('assets/images/appota_pay.png') }}" class="w-32"   />
                                    </div>
                                    <div class="item-content">
                                        Cổng thanh toán
                                    </div>
                                </div>
                                <div class="list-item">
                                    <div class="item-img">
                                        <img src="{{ asset('assets/images/appota_card.png') }}" class="w-32" />
                                    </div>
                                    <div class="item-content">
                                        Appota Card
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr>
                    <div class="text-14 text-600">Lịch sử hỗ trợ</div>
                    <div class="log_history mt-3">
                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#all_ticket" type="button" role="tab" aria-controls="all_ticket" aria-selected="true">Tát cả</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" data-bs-toggle="tab" data-bs-target="#only_ticket" type="button" role="tab" aria-controls="only_ticket" aria-selected="false">Ticket</button>
                            </li>
                        </ul>
                        <div class="tab-content">
                            <div class="tab-pane active" id="all_ticket">
                                @foreach ($activities ?? [] as $item)
                                <div class="log-item">
                                    <div class="log-item-type">
                                        @php
                                            $status     = $item->getExtraProperty('attributes')['status'] ?? 'MISSED';
                                            $variant    = $item->getExtraProperty('attributes')['variant'] ?? $status;
                                            $icon       = \App\Enums\TicketStatusEnum::ICON[$status];
                                            $type       = \App\Enums\TicketStatusEnum::VALUE[$variant];
                                            $color      = \App\Enums\TicketStatusEnum::COLOR[$status];
                                        @endphp
                                        <i class="ic ic-16 {{ $icon }}"></i>
                                    </div>
                                    <div class="log-item-content">
                                        <div class="log-item-left">
                                            <div>{{ $item->getExtraProperty('title') }}</div>
                                            <div class="log-item-date">
                                                {{ $item->created_at->format('d/m/Y - g:i A') }}
                                            </div>
                                        </div>
                                        <div class="log-item-right ms-auto">
                                            <span class="badge badge-{{ $color }}">{{ $type }}</span>
                                        </div>

                                    </div>
                                </div>
                                @endforeach
                               {{-- <div class="log-item">
                                    <div class="log-item-type">
                                        <i class="ic ic-16 ic-misscall"></i>
                                    </div>
                                    <div class="log-item-content">
                                        <div class="log-item-left">
                                            <div>Lỗi thanh toán</div>
                                            <div class="log-item-date">
                                                20/09/2021 - 08:20 AM
                                            </div>
                                        </div>
                                        <div class="log-item-right ms-auto text-end">
                                            <span>0 phút</span>
                                        </div>

                                    </div>
                                </div>
                                <div class="log-item">
                                    <div class="log-item-type">
                                        <i class="ic ic-16 ic-other"></i>
                                    </div>
                                    <div class="log-item-content">
                                        <div class="log-item-left">
                                            <div>Lỗi thanh toán</div>
                                            <div class="log-item-date">
                                                20/09/2021 - 08:20 AM
                                            </div>
                                        </div>
                                        <div class="log-item-right ms-auto text-end">
                                            <span class="badge badge-light-gray">Đã đóng</span>
                                        </div>

                                    </div>
                                </div>
                                <div class="log-item">
                                    <div class="log-item-type">
                                        <i class="ic ic-16 ic-payment"></i>
                                    </div>
                                    <div class="log-item-content">
                                        <div class="log-item-left">
                                            <div>Lỗi thanh toán</div>
                                            <div class="log-item-date">
                                                20/09/2021 - 08:20 AM
                                            </div>
                                        </div>
                                        <div class="log-item-right ms-auto">
                                            <span class="badge badge-light-green">Đang xử lý</span>
                                        </div>

                                    </div>
                                </div>
                                <div class="log-item">
                                    <div class="log-item-type">
                                        <i class="ic ic-16 ic-misscall"></i>
                                    </div>
                                    <div class="log-item-content">
                                        <div class="log-item-left">
                                            <div>Lỗi thanh toán</div>
                                            <div class="log-item-date">
                                                20/09/2021 - 08:20 AM
                                            </div>
                                        </div>
                                        <div class="log-item-right ms-auto text-end">
                                            <span>0 phút</span>
                                        </div>

                                    </div>
                                </div>
                                <div class="log-item">
                                    <div class="log-item-type">
                                        <i class="ic ic-16 ic-other"></i>
                                    </div>
                                    <div class="log-item-content">
                                        <div class="log-item-left">
                                            <div>Lỗi thanh toán</div>
                                            <div class="log-item-date">
                                                20/09/2021 - 08:20 AM
                                            </div>
                                        </div>
                                        <div class="log-item-right ms-auto text-end">
                                            <span class="badge badge-light-gray">Đã đóng</span>
                                        </div>

                                    </div>
                                </div>
                                <div class="log-item">
                                    <div class="log-item-type">
                                        <i class="ic ic-16 ic-payment"></i>
                                    </div>
                                    <div class="log-item-content">
                                        <div class="log-item-left">
                                            <div>Lỗi thanh toán</div>
                                            <div class="log-item-date">
                                                20/09/2021 - 08:20 AM
                                            </div>
                                        </div>
                                        <div class="log-item-right ms-auto">
                                            <span class="badge badge-light-green">Đang xử lý</span>
                                        </div>

                                    </div>
                                </div>
                                <div class="log-item">
                                    <div class="log-item-type">
                                        <i class="ic ic-16 ic-misscall"></i>
                                    </div>
                                    <div class="log-item-content">
                                        <div class="log-item-left">
                                            <div>Lỗi thanh toán</div>
                                            <div class="log-item-date">
                                                20/09/2021 - 08:20 AM
                                            </div>
                                        </div>
                                        <div class="log-item-right ms-auto text-end">
                                            <span>0 phút</span>
                                        </div>

                                    </div>
                                </div>
                                <div class="log-item">
                                    <div class="log-item-type">
                                        <i class="ic ic-16 ic-other"></i>
                                    </div>
                                    <div class="log-item-content">
                                        <div class="log-item-left">
                                            <div>Lỗi thanh toán</div>
                                            <div class="log-item-date">
                                                20/09/2021 - 08:20 AM
                                            </div>
                                        </div>
                                        <div class="log-item-right ms-auto text-end">
                                            <span class="badge badge-light-gray">Đã đóng</span>
                                        </div>

                                    </div>
                                </div>
                                <div class="log-item">
                                    <div class="log-item-type">
                                        <i class="ic ic-16 ic-payment"></i>
                                    </div>
                                    <div class="log-item-content">
                                        <div class="log-item-left">
                                            <div>Lỗi thanh toán</div>
                                            <div class="log-item-date">
                                                20/09/2021 - 08:20 AM
                                            </div>
                                        </div>
                                        <div class="log-item-right ms-auto">
                                            <span class="badge badge-light-green">Đang xử lý</span>
                                        </div>

                                    </div>
                                </div>
                                <div class="log-item">
                                    <div class="log-item-type">
                                        <i class="ic ic-16 ic-misscall"></i>
                                    </div>
                                    <div class="log-item-content">
                                        <div class="log-item-left">
                                            <div>Lỗi thanh toán</div>
                                            <div class="log-item-date">
                                                20/09/2021 - 08:20 AM
                                            </div>
                                        </div>
                                        <div class="log-item-right ms-auto text-end">
                                            <span>0 phút</span>
                                        </div>

                                    </div>
                                </div>
                                <div class="log-item">
                                    <div class="log-item-type">
                                        <i class="ic ic-16 ic-other"></i>
                                    </div>
                                    <div class="log-item-content">
                                        <div class="log-item-left">
                                            <div>Lỗi thanh toán</div>
                                            <div class="log-item-date">
                                                20/09/2021 - 08:20 AM
                                            </div>
                                        </div>
                                        <div class="log-item-right ms-auto text-end">
                                            <span class="badge badge-light-gray">Đã đóng</span>
                                        </div>

                                    </div>
                                </div>--}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-6 h-100">
                <div class="inner-ticket p-3">
                    <div class="ticket-info d-flex">
                        <img src="{{ asset('assets/images/appota_pay.png') }}" class="w-48" />
                        <div class="ticket-info-ct ps-3">
                            <div class="text-14 text-60">Id ticket: {{ $ticket->id }}</div>
                            <div><span class="badge badge-{{ $ticket->status_decoration['color'] }}">{{ $ticket->variant_decoration['value'] }}</span></div>
                        </div>
                    </div>
                    <div class="ticket-item pt-3">
                        <label class="text-gray text-12">Số điện thoại gọi đến</label>
                        <div>{{ $ticket->customer_phone }}</div>
                    </div>
                    <div class="ticket-item pt-3">
                        <label class="text-gray text-12">Loại cuộc gọi</label>
                        <div>{{ $ticket->variant_decoration['value'] }}</div>
                    </div>
                    <div class="ticket-item pt-3">
                        <label class="text-gray text-12">File ghi âm cuộc gọi</label>
                        <button class="btn btn-block btn-gray d-flex align-items-center justify-content-center">
                            <span class="w-24 circled bg-white border-gray"><i class="ic ic-16 ic-mic"></i></span>
                            <span class="text-14 text-normal ps-2">Bấm để nghe lại</span>
                        </button>
                    </div>
                    <div class="ticket-item pt-3">
                        <label class="text-gray text-12">Nhóm lỗi</label>
                        <div class="input-group input-search">
                            <input class="form-control" type="search" placeholder="Gán cho" aria-label="Gán cho">
                            <button class="btn" type="submit">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 8C2 4.691 4.691 2 8 2C11.309 2 14 4.691 14 8C14 11.309 11.309 14 8 14C4.691 14 2 11.309 2 8ZM17.707 16.293L14.312 12.897C15.365 11.543 16 9.846 16 8C16 3.589 12.411 0 8 0C3.589 0 0 3.589 0 8C0 12.411 3.589 16 8 16C9.846 16 11.543 15.365 12.897 14.312L16.293 17.707C16.488 17.902 16.744 18 17 18C17.256 18 17.512 17.902 17.707 17.707C18.098 17.316 18.098 16.684 17.707 16.293Z" fill="#2C4046"/>
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div class="ticket-item pt-3">
                        <label class="text-gray text-12">Giao cho</label>
                        <div class="text-600">{{ $ticket->assignees()->pluck('email')->implode(', ') }}</div>
                    </div>

                    <div class="ticket-item pt-3">
                        <label class="text-gray text-12">Theo dõi</label>
                        <div class="form-group">
                            <button id="dp_status" type="button" class="btn btn-block btn-dropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                Trạng thái
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dp_status">
                                <li><a class="dropdown-item" href="#">Gọi nhỡ</a></li>
                                <li><a class="dropdown-item active" href="#">Đã nghe</a></li>
                                <li><a class="dropdown-item" href="#">Đã gọi</a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="ticket-item border-gray p-2 mt-3 rounded">
                        <div class="d-flex align-items-center">
                            <i class="ic ic-edit-underline"></i>
                            <span class="text-600">Ghi chú</span>
                        </div>
                        <div>
                            <input type="text" multiple placeholder="Nhập ghi chú" class=" text-14 form-control border-none outline-none" />
                        </div>

                        <div class="d-flex pb-2">
                            <div class="col ps-2">
                                <button class="btn btn-gray btn-36 btn-block">Huỷ</button>
                            </div>
                            <div class="col ps-2">
                                <button class="btn btn-success btn-block btn-36">Lưu</button>
                            </div>
                        </div>
                    </div>

                    <div class="ticket-item pt-3">
                        <label class="text-gray text-12">Tạo mới ticket</label>
                        <div class="d-flex">
                            <div class="col">
                                <div class="form-group">
                                    <button id="dp_status" type="button" class="btn btn-block btn-dropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                        Trạng thái
                                    </button>
                                    <ul class="dropdown-menu" aria-labelledby="dp_status">
                                        <li><a class="dropdown-item" href="#">Gọi nhỡ</a></li>
                                        <li><a class="dropdown-item active" href="#">Đã nghe</a></li>
                                        <li><a class="dropdown-item" href="#">Đã gọi</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-auto ps-2">
                                <button type="button" class="btn btn-success d-flex align-items-center">
                                    <span class="pe-1">Tạo</span>
                                    <i class="ic ic-24 ic-plus-white"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    @endif
</div>
