<select class="form-control form-sm status-progress" data-bs-toggle="status" wire:model="status">
    @foreach($statuses as $key => $value)
        <option value="{{ $key }}" @if($key === $currentStatus) selected @endif data-bs-status="status-progress">{{ $value }}</option>
    @endforeach
    {{--                <option value="1" data-bs-status="status-done">Hoàn thành</option>--}}
    {{--                <option value="1" data-bs-status="status-progress">Đang xử lý</option>--}}
</select>