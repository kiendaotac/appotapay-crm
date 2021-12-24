<div class="kt-content  kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor" id="kt_content">

    <!-- begin:: Content -->
    <div class="kt-container  kt-container--fluid  kt-grid__item kt-grid__item--fluid">
        <div class="kt-portlet kt-portlet--mobile">
            <div class="kt-portlet__head kt-portlet__head--lg">
                <div class="kt-portlet__head-label">
                    <span class="kt-portlet__head-icon">
                        <i class="kt-font-brand flaticon2-line-chart"></i>
                    </span>
                    <h3 class="kt-portlet__head-title">

                    </h3>
                </div>
                <div class="kt-portlet__head-toolbar">
                    <div class="kt-portlet__head-wrapper">
                        <div class="kt-portlet__head-actions">
                            @can('create', \App\Models\Product::class)
                            <livewire:product.create />
                            @endcan
                        </div>
                    </div>
                </div>
            </div>
            <div class="kt-portlet__body">
                <div class="kt-pagination kt-pagination--brand">
                    <div class="kt-pagination__toolbar">
                        <select class="form-control kt-font-brand" style="width: 60px" wire:model="perPage">
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                        </select>
                    </div>
                    <div class="kt-margin-b-10-tablet-and-mobile">
                        <input type="text" class="form-control kt-input" placeholder="Tìm kiếm nhanh" data-col-index="0"
                            wire:model.debounce="search">
                    </div>
                </div>
                <!--begin: Datatable -->
                <div class="kt-separator kt-separator--border-dashed kt-separator--space-md"></div>
                <table class="table table-striped table-bordered table-hover table-checkable" id="kt_table_1">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Mã</th>
                            <th>Tên</th>
                            <th class="text-right">#</th>
                        </tr>
                    </thead>
                    <tbody>
                        @forelse ($products as $product)
                        <tr wire:key="{{ $product->id }}">
                            <td>{{ $product->id }}</td>
                            <td>{{ $product->code }}</td>
                            <td>{{ $product->name }}</td>
                            <td class="text-right">
                                @can('update', $product)
                                <button data-toggle="modal" data-target="#update-product-modal"
                                    wire:click="$emit('edit', {{ $product->id }})"
                                    class="btn btn-icon btn-primary btn-sm">
                                    <x-fas-pencil-alt width="15" height="15" />
                                </button>
                                @endcan
                                @can('delete', $product)
                                <button class="btn btn-icon btn-danger btn-sm" type="button" x-data
                                    x-on:click="deleteProduct({{$product->id}})">
                                    <x-fas-trash-alt width="15" height="15" />
                                </button>
                                @endcan
                            </td>
                        </tr>
                        @empty

                        @endforelse

                    </tbody>
                    <tfoot>
                        <tr>
                            <th>ID</th>
                            <th>Mã</th>
                            <th>Tên</th>
                            <th class="text-right">#</th>
                        </tr>
                    </tfoot>
                </table>

                <!--end: Datatable -->
                {{ $products->links() }}
            </div>
        </div>
    </div>
    <livewire:product.edit />
</div>

@push('js')
<script>
    function deleteProduct(id) {
        swal.fire({
            title: 'Xác nhận',
            text: "Bạn chắc chắn muốn xóa sản phẩm này chứ?",
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Xóa!',
            cancelButtonText: "Hủy"
        }).then(function(result) {
            if (result.value) {
                @this.delete(id)
            }
            swal.close();
        });
    }
</script>
@endpush
