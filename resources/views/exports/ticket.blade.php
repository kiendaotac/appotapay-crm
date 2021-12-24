<table>
    <thead>
        <tr>
            <th>Ticket ID</th>
            <th>Tên</th>
            <th>Mô tả</th>
            <th>Sản phẩm</th>
            <th>Trạng thái</th>
            <th>Ưu tiên</th>
            <th>Nhóm lỗi</th>
            <th>Khách hàng - Tên</th>
            <th>Khách hàng - Email</th>
            <th>Khách hàng - SĐT</th>
            <th>Ngày tạo</th>
        </tr>
    </thead>
    <tbody>
        @foreach ($tickets ?? [] as $item)
            <tr>
                <td>{{ $item->id }}</td>
                <td>{{ $item->name }}</td>
                <td>{!! Str::of($item->description)->entitiesDecode()->stripTags() !!}</td>
                <td>{{ $item->product->name ?? '' }}</td>
                <td>{{ $item->status_decoration['value'] }}</td>
                <td>{{ $item->priority_decoration['value'] }}</td>
                <td>{{ $item->variant_decoration['value'] }}</td>
                <td>{{ $item->customer_name }}</td>
                <td>{{ $item->customer_email }}</td>
                <td>{{ $item->customer_phone }}</td>
                <td>{{ $item->created_at }}</td>
            </tr>
        @endforeach
    </tbody>
</table>
