<x-custom.profile-layout>
    <div class="kt-grid__item kt-grid__item--fluid kt-app__content">
        <div class="row">
            <div class="col-xl-12">
                <div class="kt-portlet">
                    <div class="kt-portlet__head">
                        <div class="kt-portlet__head-label">
                            <h3 class="kt-portlet__head-title">
                                Hoạt động gần đây
                            </h3>
                        </div>
                    </div>

                    <div class="kt-portlet__body">
                        <div class="kt-section kt-section--first">
                            <div class="kt-section__body">
                                <div class="kt-pagination kt-pagination--brand">
                                    <div class="kt-pagination__toolbar">
                                        <select class="form-control kt-font-brand" style="width: 60px"
                                            wire:model="perPage">
                                            <option value="5">5</option>
                                            <option value="10">10</option>
                                            <option value="25">25</option>
                                            <option value="50">50</option>
                                        </select>
                                    </div>
                                </div>
                                <!--begin: Datatable -->
                                <div class="kt-separator kt-separator--border-dashed kt-separator--space-md"></div>
                                <div class="table-responsive">
                                    <table class="table table-striped table-hover">
                                        <thead>
                                            <tr>
                                                <th width="80%">Mô tả</th>
                                                <th width="20%">Thời gian</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            @forelse ($activities ?? [] as $item)
                                            <tr>
                                                <td>
                                                    <b>{{ $item->getExtraProperty('title') ?? $item->description }}</b>
                                                    <br>
                                                    {{ $item->getExtraProperty('detail') ?? '' }}
                                                </td>
                                                <td>{{ $item->created_at }}</td>
                                            </tr>
                                            @empty
                                            <tr>
                                                <td class="text-center" colspan="2">Không có hoạt động nào</td>
                                            </tr>
                                            @endforelse
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="kt-portlet__foot">
                        {{ $activities->links() }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</x-custom.profile-layout>
