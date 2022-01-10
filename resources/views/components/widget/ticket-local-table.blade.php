<table class="table table-striped datatable-list" style="width:100%">
    <thead>
    <tr>
        <th>ID Ticket</th>
        <th>Số điện thoại</th>
        <th>Nhóm lỗi</th>
        <th>Ưu tiên</th>
        <th>Tóm tắt ND ticket</th>
        <th>Gán cho</th>
        <th>Trạng thái</th>
        <th>Ngày tạo</th>
        <th>Edit</th>
    </tr>
    </thead>
    <tbody>
    @foreach($tickets as $ticket)
    <tr>
        <td>{{ $ticket->id }}</td>
        <td>{{ $ticket->customer_phone }}</td>
        <td>{{ $ticket->variant_decoration['value'] }}</td>
        <td><span class="badge badge-{{ $ticket->priority_decoration['color']}}">{{ $ticket->priority_decoration['value']}}</span></td>
        <td>
            <div class="d-flex l-short">
                <div class="flex-auto">{!! $ticket->description !!}</div>
                <div class="me-auto l-short-action">
{{--                    <span class="btn btn-xs btn-success"><button>a</button>Chi tiết</span>--}}
                </div>
            </div>
        </td>
        <td>
            @foreach($ticket->assignees as $user)
            <div class="assign_to">
                <img src="{{ $user->avatar_url }}" width="20px"/>
                <span>{{ $user->email }}</span>
            </div>
            @endforeach
        </td>
        <td>
            @livewire('ticket-local.ticket-status', ['ticket' => $ticket, 'currentStatus' => $ticket->status])
        </td>
        <td>{{ $ticket->created_at->format('d/m/Y H:s:i') }}</td>

        <td>
            <button class="btn btn-sm"  onclick="show_canvas('log_info');" wire:click="$emit('show', {{ $ticket->id }})">
                <i class="ic ic-edit"></i>
            </button>
        </td>
    </tr>
    @endforeach
{{--    <tr>
        <td>012</td>
        <td>0344343424</td>
        <td>E12</td>
        <td><span class="badge badge-light-danger">Bình thường</span></td>
        <td>
            <div class="d-flex l-short">
                <div class="flex-auto">Không đăng nhập được...</div>
                <div class="me-auto l-short-action"><span class="btn btn-xs btn-success">Chi tiết</span></div>
            </div>
        </td>
        <td>
            <span class="assign_to"><img src="assets/images/avatar@32.png" /><span>loct@gamota.com</span></span>
        </td>
        <td>
            <select class="form-control form-sm status-progress" data-bs-toggle="status">
                <option value="1" data-bs-status="status-new">Mới</option>
                <option value="1" data-bs-status="status-done">Hoàn thành</option>
                <option value="1" data-bs-status="status-progress">Đang xử lý</option>
            </select>
        </td>
        <td>2021-02-23 12:00:23</td>

        <td>
            <button class="btn btn-sm"  onclick="show_canvas('log_info');"><i class="ic ic-edit"></i></button>
        </td>
    </tr>
    <tr>
        <td>012</td>
        <td>0344343424</td>
        <td>E12</td>
        <td><span class="badge badge-light-primary">Cao</span></td>
        <td>
            <div class="d-flex l-short">
                <div class="flex-auto">Không đăng nhập được...</div>
                <div class="me-auto l-short-action"><span class="btn btn-xs btn-success">Chi tiết</span></div>
            </div>
        </td>
        <td>
            <span class="assign_to"><img src="assets/images/avatar@32.png" /><span>loct@gamota.com</span></span>
        </td>
        <td>
            <select class="form-control form-sm status-new" data-bs-toggle="status">
                <option value="1" data-bs-status="status-new">Mới</option>
                <option value="1" data-bs-status="status-done">Hoàn thành</option>
                <option value="1" data-bs-status="status-progress">Đang xử lý</option>
            </select>
        </td>
        <td>2021-02-23 12:00:23</td>

        <td>
            <button class="btn btn-sm"  onclick="show_canvas('log_info');"><i class="ic ic-edit"></i></button>
        </td>
    </tr>--}}
    </tbody>
</table>