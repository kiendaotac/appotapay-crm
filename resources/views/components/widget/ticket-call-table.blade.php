<table id="{{ $id }}" class="table table-striped  datatable-list" style="width:100%">
    <thead>
    <tr>
        <th>ID Ticket</th>
        <th>Số điện thoại</th>
        <th>Trạng thái</th>
        <th>Nhóm lỗi</th>
        <th>Tóm tắt ND ticket</th>
        <th>Gán cho</th>
        <th>Ngày tạo</th>
        <th>Cuộc gọi</th>
        <th>Edit</th>
    </tr>
    </thead>
    <tbody>
    @foreach($tickets as $ticket)
        <tr wire:key="{{ $ticket->id }}">
            <td>{{ $ticket->id }}</td>
            <td>{{ $ticket->customer_phone }}</td>
            <td><span class="badge badge-{{ $ticket->status_decoration['color'] }}">{{ $ticket->status_decoration['value'] }}</span></td>
            <td>{{ $ticket->variant_decoration['value'] }}</td>
            <td>{!! $ticket->description !!}</td>
            <td>
                <span class="assign_to">{{ $ticket->customer_name ?? $ticket->customer_email }}</span>
            </td>
            <td>{{ $ticket->created_at->format('d/m/Y H:m:s') }}</td>
            <td>
                <button class="btn btn-sm btn-circle btn-white text-center p-0 btn-border"><i class="ic ic-call"></i></button>
            </td>
            <td>
                <button class="btn btn-sm" onclick="show_canvas('log_info')" wire:click="$emit('show', {{ $ticket->id }})">
                    <i class="ic ic-edit"></i>
                </button>
            </td>
        </tr>
    @endforeach
    </tbody>
</table>
{{ $tickets->links() }}