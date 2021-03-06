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

                                <button wire:click.prevent="$emit('exportLocalTicketScript')" type="button" class="btn btn-default"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i class="la la-download"></i> Export
                                </button>

                                {{-- <button type="button" class="btn btn-default btn-icon-sm dropdown-toggle"
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
                                </div> --}}
                            </div>
                            @can('ticket-local-create', )
                            <a href="{{ route('ticket.locals.create') }}" class="btn btn-brand btn-elevate btn-icon-sm">
                                <i class="la la-plus"></i>
                                Ticket m???i
                            </a>
                            @endcan
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
                            <label>Ng??y t???o:</label>
                            <div class="input-daterange input-group" id="kt_datepicker">
                                <x-widget.datepicker id="startTimeTicket" class="form-control kt-input" wire:model.defer="start"
                                    placeholder="T??? ng??y" data-col-index="5" />
                                <div class="input-group-append">
                                    <span class="input-group-text"><i class="la la-ellipsis-h"></i></span>
                                </div>
                                <x-widget.datepicker id="endTimeTicket" class="form-control kt-input" wire:model.defer="end"
                                    placeholder="T???i ng??y" data-col-index="6" />
                            </div>
                        </div>
                        <div class="col-lg-3 kt-margin-b-10-tablet-and-mobile">
                            <label>Tr???ng th??i:</label>
                            <x-widget.selectpicker id="statusTicket" class="form-control" data-col-index="7" wire:model.defer="status">
                                <option value="">Ch???n</option>
                                @foreach ($statuses as $key => $item)
                                <option value="{{ $key }}">{{ $item }}</option>
                                @endforeach
                            </x-widget.selectpicker>
                        </div>
                        <div class="col-lg-3 kt-margin-b-10-tablet-and-mobile">
                            <label>????? ??u ti??n:</label>
                            <x-widget.selectpicker id="priorityTicket" class="form-control" data-col-index="8" wire:model.defer="priority">
                                <option value="">Ch???n</option>
                                @foreach ($priorities as $key => $item)
                                <option value="{{ $key }}">{{ $item }}</option>
                                @endforeach
                            </x-widget.selectpicker>
                        </div>
                        <div class="col-lg-3 kt-margin-b-10-tablet-and-mobile">
                            <label>Nh??m l???i:</label>
                            <x-widget.selectpicker id="variantTicket" class="form-control" data-col-index="9" wire:model.defer="variant"
                                data-live-search="true" data-live-search-normalize="true">
                                <option value="">Ch???n</option>
                                @foreach ($variants as $key => $item)
                                <option value="{{ $key }}">{{ $item }}</option>
                                @endforeach
                            </x-widget.selectpicker>
                        </div>
                    </div>
                    <div class="row kt-margin-b-20">
                        <div class="col-lg-3 kt-margin-b-10-tablet-and-mobile">
                            <label>Chung:</label>
                            <input id="keywordTicketChung" type="text" class="form-control kt-input" placeholder="VD: ID, Ti??u ?????, Th??ng tin kh??ch h??ng" data-col-index="10"
                                wire:model.defer="keyword">
                        </div>
                        <div class="col-lg-3 kt-margin-b-10-tablet-and-mobile">
                            <label>S???n ph???m:</label>
                            <x-widget.selectpicker id="productsTicket" class="form-control" data-col-index="11">
                                <option value="">Ch???n</option>
                                @foreach ($products as $item)
                                <option value="{{ $item->id }}">{{ $item->name }}</option>
                                @endforeach
                            </x-widget.selectpicker>
                        </div>
                        <div class="col-lg-3 kt-margin-b-10-tablet-and-mobile">
                            <label>G??n cho:</label>
                            <x-widget.selectpicker id="assigneeTicket" class="form-control" data-col-index="11" wire:model.defer="assignee"
                                data-live-search="true" data-live-search-normalize="true">
                                <option value="">Ch???n</option>
                                @foreach ($agents as $item)
                                <option value="{{ $item->id }}">{{ $item->name }} ({{ $item->email }})</option>
                                @endforeach
                            </x-widget.selectpicker>
                        </div>
                        <div class="col-lg-3 kt-margin-b-10-tablet-and-mobile">
                            <label>T??? kh??a:</label>
                            <x-widget.selectpicker id="tagTicket" class="form-control" data-col-index="11" wire:model.defer="tag"
                                multiple data-live-search="true" data-live-search-normalize="true"
                                data-selected-text-format="count > 4" title="Ch???n">
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
                                    <span>T??m ki???m</span>
                                </span>
                            </button>
                            &nbsp;&nbsp;
                            <button class="btn btn-secondary btn-secondary--icon" id="kt_reset"
                                wire:click="resetFilter">
                                <span>
                                    <i class="la la-close"></i>
                                    <span>H???y</span>
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
                            <th>T??n</th>
                            <th>S???n ph???m</th>
                            <th>G??n cho</th>
                            <th>Tr???ng th??i</th>
                            <th>??u ti??n</th>
                            <th>Nh??m l???i</th>
                            <th class="text-right">Ng??y t???o</th>
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
                                                    data-target="#show-ticket-local-modal"
                                                    wire:click="$emit('show', {{ $ticket->id }})">
                                                    <i class="kt-nav__link-icon flaticon2-expand"></i>
                                                    <span class="kt-nav__link-text">View</span>
                                                </a>
                                            </li>
                                            @can('ticket-local-update', $ticket)
                                            <li class="kt-nav__item">
                                                <a href="{{ route('ticket.locals.edit', $ticket->id) }}"
                                                    class="kt-nav__link">
                                                    <i class="kt-nav__link-icon flaticon2-contract"></i>
                                                    <span class="kt-nav__link-text">Edit</span>
                                                </a>
                                            </li>
                                            @endcan
                                            @can('ticket-local-delete', $ticket)
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
                            <td colspan="9" class="text-center p-5">Kh??ng t??m th???y k???t qu???</td>
                        </tr>
                        @endforelse
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Ticket ID</th>
                            <th>T??n</th>
                            <th>S???n ph???m</th>
                            <th>G??n cho</th>
                            <th>Tr???ng th??i</th>
                            <th>??u ti??n</th>
                            <th>Nh??m l???i</th>
                            <th class="text-right">Ng??y t???o</th>
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
    <livewire:ticket-local.show />
</div>

@push('js')
<script>
    function deleteTicket(id) {
        swal.fire({
            title: 'X??c nh???n',
            text: "B???n ch???c ch???n mu???n x??a ticket n??y ch????",
            type: 'warning',
            buttonsStyling: false,
            confirmButtonClass: "btn btn-danger",
            cancelButtonClass: "btn btn-link",
            showCancelButton: true,
            confirmButtonText: 'X??a!',
            cancelButtonText: "H???y"
        }).then(function(result) {
            if (result.value) {
                @this.destroy(id)
            }
            swal.close();
        });
    }
</script>



<script>
        document.addEventListener('livewire:load', function () {
            // Your JS here. exportLocalTicketScript
            Livewire.on('exportLocalTicketScript', ()=>{
                var startTimeTicket = document.getElementById("startTimeTicket").value;
                var endTimeTicket = document.getElementById("endTimeTicket").value;
                var statusTicket = document.getElementById("statusTicket").value;
                var priorityTicket = document.getElementById("priorityTicket").value;
                var variantTicket = document.getElementById("variantTicket").value;
                var keywordTicketChung = document.getElementById("keywordTicketChung").value;
                var productsTicket = document.getElementById("productsTicket").value;
                var assigneeTicket = document.getElementById("assigneeTicket").value;
                var tagTicket = document.getElementById("tagTicket").value;

                // Livewire.emit("exportLocalTicket",
                //     startTimeTicket,
                //     endTimeTicket,
                //     statusTicket,
                //     priorityTicket,
                //     variantTicket,
                //     keywordTicketChung,
                //     productsTicket,
                //     assigneeTicket,
                //     tagTicket
                //     );

                var protocol = window.location.protocol;
                var host = window.location.host;
                var url = protocol + '//' + host + '/';

                window.open(url + 'exportTicketCSV?startTimeTicket='+ startTimeTicket +'&endTimeTicket='+endTimeTicket+'&statusTicket='+statusTicket+'&priorityTicket='+priorityTicket+'&variantTicket='+variantTicket+'&keywordTicketChung='+keywordTicketChung+'&productsTicket='+productsTicket+'&assigneeTicket='+assigneeTicket+'&tagTicket='+tagTicket);

            });
        })
</script>


@endpush
