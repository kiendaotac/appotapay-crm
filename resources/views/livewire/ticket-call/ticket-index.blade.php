<main>
    <div class="page-header">
        <div class="container-fluid">
            <div class="page-header-inner pt-3 ps-3 pe-3 d-flex align-items-center">
                <h2 class="page-title">
                    Quản lý cuộc gọi
                </h2>
                <ul class="nav nav-tabs ms-5" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="all-tab" data-bs-toggle="tab" data-bs-target="#all" type="button" role="tab" aria-controls="all" aria-selected="true">Tất cả (24)</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="new-tab" data-bs-toggle="tab" data-bs-target="#new" type="button" role="tab" aria-controls="new" aria-selected="false">Mới (20)</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pending-payment-tab" data-bs-toggle="tab" data-bs-target="#pending-payment" type="button" role="tab" aria-controls="pending-payment" aria-selected="false">Chờ thêm TT(15)</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="added-payment-tab" data-bs-toggle="tab" data-bs-target="#added-payment" type="button" role="tab" aria-controls="added-payment" aria-selected="false">Đã thêm TT(15)</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pending-tab" data-bs-toggle="tab" data-bs-target="#pending" type="button" role="tab" aria-controls="pending" aria-selected="false">Đang xử lý(15)</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="done-tab" data-bs-toggle="tab" data-bs-target="#done" type="button" role="tab" aria-controls="done" aria-selected="false">Đã xử lý(15)</button>
                    </li>
                </ul>
                <div class="ms-auto d-flex pb-2">
                    <button class="btn btn-sm d-flex align-items-center btn-gradient-orange">
                        <span>Tải về</span>
                        <i class="btn-icon btn-icon-dl"></i>
                    </button>
                    <button class="ms-2 btn btn-sm btn-shadow btn-white" onclick="show_canvas('filter_log');">
                        <i class="btn-icon btn-icon-sort"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
    <!-- end page header -->
    <div class="container-fluid">
        <div class="page-content p-3">
            <div class="page-logs">
                <div class="tab-content">
                    <div class="tab-pane active" id="all">
                        <x-widget.ticket-call-table :tickets="$tickets" :statuses="$statuses" :id="'all'" />
                    </div>
                    <div class="tab-pane" id="pending-payment">
                        <x-widget.ticket-call-table :tickets="$tickets" :statuses="$statuses" :id="'pending-payment'" />
                    </div>
                    <div class="tab-pane" id="added-payment">
                        <x-widget.ticket-call-table :tickets="$tickets" :statuses="$statuses" :id="'added-payment'" />
                    </div>
                    <div class="tab-pane" id="pending">
                        <x-widget.ticket-call-table :tickets="$tickets" :statuses="$statuses" :id="'pending'" />
                    </div>
                    <div class="tab-pane" id="done">
                        <x-widget.ticket-call-table :tickets="$tickets" :statuses="$statuses" :id="'done'" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>
<livewire:ticket-call.ticket-show />