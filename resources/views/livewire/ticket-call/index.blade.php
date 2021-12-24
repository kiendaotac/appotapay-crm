<div class="kt-content  kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor" id="kt_content">

    <!-- begin:: Content -->
    <div class="kt-container  kt-container--fluid  kt-grid__item kt-grid__item--fluid">
        <div class="kt-portlet kt-portlet--mobile">
            <div class="kt-portlet__head kt-portlet__head--lg">
                <div class="kt-portlet__head-label">
                    <span class="kt-portlet__head-icon">
                        <i class="kt-font-brand flaticon2-line-chart"></i>
                    </span>
                    <a data-toggle="collapse" href="#advanced-search" aria-expanded="true"
                        aria-controls="advanced-search">
                        <h3 class="kt-portlet__head-title">
                            {{ __('Advanced Search') }}
                            <i class="kt-menu__ver-arrow la la-angle-down"></i>
                        </h3>
                    </a>
                </div>
                <div class="kt-portlet__head-toolbar">
                    <div class="kt-portlet__head-wrapper">
                        <div class="kt-portlet__head-actions">
                            <div class="dropdown dropdown-inline">
                                <button type="button" class="btn btn-default btn-icon-sm dropdown-toggle"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i class="la la-download"></i> Export
                                </button>
                                <div class="dropdown-menu dropdown-menu-right">
                                    <ul class="kt-nav">
                                        <li class="kt-nav__section kt-nav__section--first">
                                            <span class="kt-nav__section-text"></span>
                                        </li>
                                        <li class="kt-nav__item">
                                            <a href="#" class="kt-nav__link" wire:click.prevent="exportExcel">
                                                <i class="kt-nav__link-icon la la-file-excel-o"></i>
                                                <span class="kt-nav__link-text">Excel</span>
                                            </a>
                                        </li>
                                        <li class="kt-nav__item">
                                            <a href="#" class="kt-nav__link" wire:click.prevent="exportCsv">
                                                <i class="kt-nav__link-icon la la-file-text-o"></i>
                                                <span class="kt-nav__link-text">CSV</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="kt-portlet__body">

                <!--begin: Search Form -->
                <form class="kt-form kt-form--fit kt-margin-b-20 collapse show" id="advanced-search"
                    wire:submit.prevent="filter">

                    <div class="row kt-margin-b-20">
                        <div class="col-lg-3 kt-margin-b-10-tablet-and-mobile">
                            <label>Ngày tạo:</label>
                            <div class="input-daterange input-group" id="kt_datepicker">
                                <x-widget.datepicker class="form-control kt-input" wire:model.defer="start"
                                    placeholder="Từ ngày" data-col-index="5" />
                                <div class="input-group-append">
                                    <span class="input-group-text"><i class="la la-ellipsis-h"></i></span>
                                </div>
                                <x-widget.datepicker class="form-control kt-input" wire:model.defer="end"
                                    placeholder="Tới ngày" data-col-index="6" />
                            </div>
                        </div>
                        <div class="col-lg-3 kt-margin-b-10-tablet-and-mobile">
                            <label>Trạng thái:</label>
                            <x-widget.selectpicker class="form-control" data-col-index="7" wire:model.defer="status">
                                <option value="">Chọn</option>
                                @foreach ($statuses as $key => $item)
                                <option value="{{ $key }}">{{ $item }}</option>
                                @endforeach
                            </x-widget.selectpicker>
                        </div>
                        <div class="col-lg-3 kt-margin-b-10-tablet-and-mobile">
                            <label>Độ ưu tiên:</label>
                            <x-widget.selectpicker class="form-control" data-col-index="8" wire:model.defer="priority">
                                <option value="">Chọn</option>
                                @foreach ($priorities as $key => $item)
                                <option value="{{ $key }}">{{ $item }}</option>
                                @endforeach
                            </x-widget.selectpicker>
                        </div>
                        <div class="col-lg-3 kt-margin-b-10-tablet-and-mobile">
                            <label>Nhóm lỗi:</label>
                            <x-widget.selectpicker class="form-control" data-col-index="9" wire:model.defer="variant"
                                data-live-search="true" data-live-search-normalize="true">
                                <option value="">Chọn</option>
                                @foreach ($variants as $key => $item)
                                <option value="{{ $key }}">{{ $item }}</option>
                                @endforeach
                            </x-widget.selectpicker>
                        </div>
                    </div>
                    <div class="row kt-margin-b-20">
                        <div class="col-lg-3 kt-margin-b-10-tablet-and-mobile">
                            <label>Chung:</label>
                            <input type="text" class="form-control kt-input"
                                placeholder="VD: ID, Tiêu đề, Thông tin khách hàng" data-col-index="10"
                                wire:model.defer="keyword">
                        </div>
                        <div class="col-lg-3 kt-margin-b-10-tablet-and-mobile">
                            <label>Sản phẩm:</label>
                            <x-widget.selectpicker class="form-control" data-col-index="11">
                                <option value="">Chọn</option>
                                @foreach ($products as $item)
                                <option value="{{ $item->id }}">{{ $item->name }}</option>
                                @endforeach
                            </x-widget.selectpicker>
                        </div>
                        <div class="col-lg-3 kt-margin-b-10-tablet-and-mobile">
                            <label>Gán cho:</label>
                            <x-widget.selectpicker class="form-control" data-col-index="11" wire:model.defer="assignee"
                                data-live-search="true" data-live-search-normalize="true">
                                <option value="">Chọn</option>
                                @foreach ($agents as $item)
                                <option value="{{ $item->id }}">{{ $item->name }} ({{ $item->email }})</option>
                                @endforeach
                            </x-widget.selectpicker>
                        </div>
                        <div class="col-lg-3 kt-margin-b-10-tablet-and-mobile">
                            <label>Từ khóa:</label>
                            <x-widget.selectpicker class="form-control" data-col-index="11" wire:model.defer="tag"
                                multiple data-live-search="true" data-live-search-normalize="true"
                                data-selected-text-format="count > 4" title="Chọn">
                                @foreach ($tags as $item)
                                <option value="{{ $item->name }}">{{ $item->name }}</option>
                                @endforeach
                            </x-widget.selectpicker>
                        </div>
                    </div>
                    <div class="kt-separator kt-sepacrator--sm kt-separator--dashed"></div>
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="kt-pagination kt-pagination--brand">
                                <div class="kt-pagination__toolbar">
                                    <select class="form-control kt-font-brand" style="width: 60px" wire:model="perPage">
                                        <option value="5">5</option>
                                        <option value="10">10</option>
                                        <option value="25">25</option>
                                        <option value="50">50</option>
                                    </select>
                                    <span class="pagination__desc">
                                        {{ __('Showing') . ' ' . $tickets->firstItem() . ' - ' . $tickets->lastItem() . ' ' . __('of') . ' ' . $tickets->total() . ' ' . __('records') }}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 flex-row-reverse d-flex">
                            <button class="btn btn-primary btn-brand--icon" id="kt_search">
                                <span>
                                    <i class="la la-search"></i>
                                    <span>Tìm kiếm</span>
                                </span>
                            </button>
                            &nbsp;&nbsp;
                            <button class="btn btn-secondary btn-secondary--icon" id="kt_reset"
                                wire:click="resetFilter">
                                <span>
                                    <i class="la la-close"></i>
                                    <span>Hủy</span>
                                </span>
                            </button>
                        </div>
                    </div>
                </form>
                <!--begin: Datatable -->
                <div class="kt-separator kt-separator--border-dashed kt-separator--space-md mt-0"></div>
                <table class="table table-striped table-hover table-checkable" id="kt_table_1">
                    <thead>
                        <tr>
                            <th>Ticket ID</th>
                            <th>Tên</th>
                            <th>Sản phẩm</th>
                            <th>Gán cho</th>
                            <th>Trạng thái</th>
                            <th>Ưu tiên</th>
                            <th>Nhóm lỗi</th>
                            <th class="text-right">Ngày tạo</th>
                            <th class="text-right">#</th>
                        </tr>
                    </thead>
                    <tbody>
                        @forelse ($tickets as $ticket)
                        <tr wire:key="{{ $ticket->id }}">
                            <td>{{ $ticket->id }}</td>
                            <td>{{ Str::limit($ticket->name, 34) }}</td>
                            <td class="font-weight-bold text-primary">{{ $ticket->product->name ?? '' }}</td>
                            <td>
                                @foreach ($ticket->assignees as $item)
                                @if ($loop->index === 3)
                                <p>...</p>
                                @break
                                @endif
                                <p>{{ $item->email }} {{ $loop->last ? '' : ',' }}</p>
                                @endforeach
                            </td>
                            <td>
                                <span
                                    class="kt-badge kt-badge--{{ $ticket->status_decoration['color'] }} kt-badge--dot"></span>
                                &nbsp;
                                <span
                                    class="kt-font-bold kt-font-{{ $ticket->status_decoration['color'] }}">{{ $ticket->status_decoration['value'] }}</span>
                            </td>
                            <td>
                                <span class="badge badge-{{ $ticket->priority_decoration['color']}}">
                                    {{ $ticket->priority_decoration['value']}}
                                </span>
                            </td>
                            <td>
                                <span
                                    class="kt-badge kt-badge--unified-{{ $ticket->variant_decoration['color'] }} kt-badge--bold kt-badge--inline">
                                    {{ $ticket->variant_decoration['value'] }}
                                </span>
                            </td>
                            <td class="text-right">{{ $ticket->created_at }}</td>
                            <td class="text-right">
                                <div class="dropdown">
                                    <a href="javascript:;" class="btn btn-sm btn-clean btn-icon btn-icon-md"
                                        data-toggle="dropdown">
                                        <i class="flaticon-more-1"></i>
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-right">
                                        <ul class="kt-nav">
                                            <li class="kt-nav__item">
                                                <a href="#" role="button" class="kt-nav__link" data-toggle="modal"
                                                    data-target="#show-ticket-call-modal"
                                                    wire:click="$emit('show', {{ $ticket->id }})">
                                                    <i class="kt-nav__link-icon flaticon2-expand"></i>
                                                    <span class="kt-nav__link-text">View</span>
                                                </a>
                                            </li>
                                            @can('ticket-call-update', $ticket)
                                            <li class="kt-nav__item">
                                                <a href="{{ route('ticket.calls.edit', $ticket->id) }}"
                                                    class="kt-nav__link">
                                                    <i class="kt-nav__link-icon flaticon2-contract"></i>
                                                    <span class="kt-nav__link-text">Edit</span>
                                                </a>
                                            </li>
                                            @endcan
                                            @can('ticket-call-delete', $ticket)
                                            <li class="kt-nav__item">
                                                <a href="#" class="kt-nav__link" x-data
                                                    x-on:click.prevent="deleteTicket({{ $ticket->id }})">
                                                    <i class="kt-nav__link-icon flaticon2-trash"></i>
                                                    <span class="kt-nav__link-text">Delete</span>
                                                </a>
                                            </li>
                                            @endcan
                                        </ul>
                                    </div>
                                </div>

                            </td>
                        </tr>
                        @empty
                        <tr>
                            <td colspan="9" class="text-center p-5">Không tìm thấy kết quả</td>
                        </tr>
                        @endforelse
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Ticket ID</th>
                            <th>Tên</th>
                            <th>Sản phẩm</th>
                            <th>Gán cho</th>
                            <th>Trạng thái</th>
                            <th>Ưu tiên</th>
                            <th>Nhóm lỗi</th>
                            <th class="text-right">Ngày tạo</th>
                            <th class="text-right">#</th>
                        </tr>
                    </tfoot>
                </table>

                <!--end: Datatable -->
                {{ $tickets->links() }}
            </div>
        </div>
    </div>

    <!-- end:: Content -->
    <livewire:ticket-call.show />
</div>

@push('js')
<script type="text/javascript" src="https://static.stringee.com/web_phone/lastest/js/StringeeSoftPhone-lastest.js">
</script>
<script src="{{ mix('assets/js/stringee.js') }}"></script>
<script>
    function deleteTicket(id) {
        swal.fire({
            title: 'Xác nhận',
            text: "Bạn chắc chắn muốn xóa ticket này chứ?",
            type: 'warning',
            buttonsStyling: false,
            confirmButtonClass: "btn btn-danger",
            cancelButtonClass: "btn btn-link",
            showCancelButton: true,
            confirmButtonText: 'Xóa!',
            cancelButtonText: "Hủy"
        }).then(function(result) {
            if (result.value) {
                @this.destroy(id)
            }
            swal.close();
        });
    }

    Livewire.on('edit-ticket' , path => window.open(path))
</script>
@endpush