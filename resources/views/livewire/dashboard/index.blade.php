<div class="kt-content  kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor" id="kt_content">
    <div class="kt-subheader  kt-grid__item" id="kt_subheader" wire:init="startLoading">
        <div class="kt-container  kt-container--fluid ">
            <div class="kt-subheader__main">
                <h3 class="kt-subheader__title">Dashboard</h3>
            </div>
            <div class="kt-subheader__toolbar">
                <div class="kt-subheader__wrapper">
                    <a href="javascript:void(0)" class="btn kt-subheader__btn-daterange"
                        id="kt_dashboard_daterangepicker" data-toggle="kt-tooltip" data-placement="left">
                        <span class="kt-subheader__btn-daterange-title"
                            id="kt_dashboard_daterangepicker_title"></span>&nbsp;
                        <span class="kt-subheader__btn-daterange-date" id="kt_dashboard_daterangepicker_date">
                            <div x-data="{
                                        timer: 1000,
                                        options: { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', 'minute': 'numeric', 'second': 'numeric' },
                                        now: new Date().toLocaleString('vi-VN'),
                                        addOne: function() {
                                            this.now = new Date().toLocaleString('vi-VN', this.options)
                                        }
                                    }" x-init="$interval(addOne, timer)" x-text="now">
                            </div>
                        </span>
                        <i class="flaticon2-calendar-1"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>

    <!-- begin:: Content -->
    <div class="kt-container  kt-container--fluid  kt-grid__item kt-grid__item--fluid">

        <!--Begin::Dashboard 1-->

        <!--Begin::Row-->
        <div class="row">
            <div class="col-lg-6 col-xl-4 order-lg-1 order-xl-1">

                <!--begin:: Widgets/Activity-->
                <div
                    class="kt-portlet kt-portlet--fit kt-portlet--head-lg kt-portlet--head-overlay kt-portlet--skin-solid kt-portlet--height-fluid">
                    <div class="kt-portlet__head kt-portlet__head--noborder kt-portlet__space-x">
                        <div class="kt-portlet__head-label">
                            <h3 class="kt-portlet__head-title">
                                Ticket Nội bộ
                            </h3>
                        </div>
                        <div class="kt-portlet__head-toolbar">
                            <a href="#" class="btn btn-label-light btn-sm btn-bold dropdown-toggle"
                                data-toggle="dropdown">
                                Loại ticket
                            </a>
                            <div class="dropdown-menu dropdown-menu-fit dropdown-menu-right">
                                <ul class="kt-nav">
                                    <li class="kt-nav__item">
                                        <a href="#" class="kt-nav__link">
                                            <span class="kt-menu__link-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                    xmlns:xlink="http://www.w3.org/1999/xlink" width="24px"
                                                    height="24px" viewBox="0 0 24 24" version="1.1" class="kt-svg-icon">
                                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                        <rect x="0" y="0" width="24" height="24" />
                                                        <path
                                                            d="M8,17 C8.55228475,17 9,17.4477153 9,18 L9,21 C9,21.5522847 8.55228475,22 8,22 L3,22 C2.44771525,22 2,21.5522847 2,21 L2,18 C2,17.4477153 2.44771525,17 3,17 L3,16.5 C3,15.1192881 4.11928813,14 5.5,14 C6.88071187,14 8,15.1192881 8,16.5 L8,17 Z M5.5,15 C4.67157288,15 4,15.6715729 4,16.5 L4,17 L7,17 L7,16.5 C7,15.6715729 6.32842712,15 5.5,15 Z"
                                                            fill="#000000" opacity="0.3" />
                                                        <path
                                                            d="M2,11.8650466 L2,6 C2,4.34314575 3.34314575,3 5,3 L19,3 C20.6568542,3 22,4.34314575 22,6 L22,15 C22,15.0032706 21.9999948,15.0065399 21.9999843,15.009808 L22.0249378,15 L22.0249378,19.5857864 C22.0249378,20.1380712 21.5772226,20.5857864 21.0249378,20.5857864 C20.7597213,20.5857864 20.5053674,20.4804296 20.317831,20.2928932 L18.0249378,18 L12.9835977,18 C12.7263047,14.0909841 9.47412135,11 5.5,11 C4.23590829,11 3.04485894,11.3127315 2,11.8650466 Z M6,7 C5.44771525,7 5,7.44771525 5,8 C5,8.55228475 5.44771525,9 6,9 L15,9 C15.5522847,9 16,8.55228475 16,8 C16,7.44771525 15.5522847,7 15,7 L6,7 Z"
                                                            fill="#000000" />
                                                    </g>
                                                </svg>
                                            </span>
                                            <span class="kt-nav__link-text">&nbsp;&nbsp;Ticket Nội bộ</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="kt-portlet__body kt-portlet__body--fit">
                        <div class="kt-widget17">
                            <div class="kt-widget17__visual kt-widget17__visual--chart kt-portlet-fit--top kt-portlet-fit--sides"
                                style="background-color: #fd397a">
                                <div class="kt-widget17__chart" style="height:320px;">
                                    <canvas id="kt_chart_activities"></canvas>
                                </div>
                            </div>
                            <div class="kt-widget17__stats">
                                <div class="kt-widget17__items">
                                    <a href="{{ route($this->ticketIndexRoute, ['status' => \App\Enums\TicketStatusEnum::FRESH]) }}"
                                        class="kt-widget17__item">
                                        <span class="kt-widget17__icon">
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px"
                                                viewBox="0 0 24 24" version="1.1"
                                                class="kt-svg-icon kt-svg-icon--brand">
                                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                    <rect x="0" y="0" width="24" height="24" />
                                                    <path
                                                        d="M5,3 L6,3 C6.55228475,3 7,3.44771525 7,4 L7,20 C7,20.5522847 6.55228475,21 6,21 L5,21 C4.44771525,21 4,20.5522847 4,20 L4,4 C4,3.44771525 4.44771525,3 5,3 Z M10,3 L11,3 C11.5522847,3 12,3.44771525 12,4 L12,20 C12,20.5522847 11.5522847,21 11,21 L10,21 C9.44771525,21 9,20.5522847 9,20 L9,4 C9,3.44771525 9.44771525,3 10,3 Z"
                                                        fill="#000000" />
                                                    <rect fill="#000000" opacity="0.3"
                                                        transform="translate(17.825568, 11.945519) rotate(-19.000000) translate(-17.825568, -11.945519) "
                                                        x="16.3255682" y="2.94551858" width="3" height="18" rx="1" />
                                                </g>
                                            </svg> </span>
                                        <span class="kt-widget17__subtitle">
                                            Mới
                                        </span>
                                        <span class="kt-widget17__desc">
                                            {{ $ticketFresh ?? 0 }} ticket mới
                                        </span>
                                    </a>
                                    <a href="{{ route($this->ticketIndexRoute, ['status' => \App\Enums\TicketStatusEnum::PROCESSING]) }}"
                                        class="kt-widget17__item">
                                        <span class="kt-widget17__icon">
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px"
                                                viewBox="0 0 24 24" version="1.1"
                                                class="kt-svg-icon kt-svg-icon--success">
                                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                    <polygon points="0 0 24 0 24 24 0 24" />
                                                    <path
                                                        d="M12.9336061,16.072447 L19.36,10.9564761 L19.5181585,10.8312381 C20.1676248,10.3169571 20.2772143,9.3735535 19.7629333,8.72408713 C19.6917232,8.63415859 19.6104327,8.55269514 19.5206557,8.48129411 L12.9336854,3.24257445 C12.3871201,2.80788259 11.6128799,2.80788259 11.0663146,3.24257445 L4.47482784,8.48488609 C3.82645598,9.00054628 3.71887192,9.94418071 4.23453211,10.5925526 C4.30500305,10.6811601 4.38527899,10.7615046 4.47382636,10.8320511 L4.63,10.9564761 L11.0659024,16.0730648 C11.6126744,16.5077525 12.3871218,16.5074963 12.9336061,16.072447 Z"
                                                        fill="#000000" fill-rule="nonzero" />
                                                    <path
                                                        d="M11.0563554,18.6706981 L5.33593024,14.122919 C4.94553994,13.8125559 4.37746707,13.8774308 4.06710397,14.2678211 C4.06471678,14.2708238 4.06234874,14.2738418 4.06,14.2768747 L4.06,14.2768747 C3.75257288,14.6738539 3.82516916,15.244888 4.22214834,15.5523151 C4.22358765,15.5534297 4.2250303,15.55454 4.22647627,15.555646 L11.0872776,20.8031356 C11.6250734,21.2144692 12.371757,21.2145375 12.909628,20.8033023 L19.7677785,15.559828 C20.1693192,15.2528257 20.2459576,14.6784381 19.9389553,14.2768974 C19.9376429,14.2751809 19.9363245,14.2734691 19.935,14.2717619 L19.935,14.2717619 C19.6266937,13.8743807 19.0546209,13.8021712 18.6572397,14.1104775 C18.654352,14.112718 18.6514778,14.1149757 18.6486172,14.1172508 L12.9235044,18.6705218 C12.377022,19.1051477 11.6029199,19.1052208 11.0563554,18.6706981 Z"
                                                        fill="#000000" opacity="0.3" />
                                                </g>
                                            </svg> </span>
                                        <span class="kt-widget17__subtitle">
                                            Đang xử lý
                                        </span>
                                        <span class="kt-widget17__desc">
                                            {{ $ticketProcessing ?? 0 }} ticket đang được xử lý
                                        </span>
                                    </a>
                                </div>
                                <div class="kt-widget17__items">
                                    <a href="{{ route($this->ticketIndexRoute, ['priority' => \App\Enums\TicketPriorityEnum::HIGH]) }}"
                                        class="kt-widget17__item">
                                        <span class="kt-widget17__icon">
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px"
                                                viewBox="0 0 24 24" version="1.1"
                                                class="kt-svg-icon kt-svg-icon--warning">
                                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                    <rect x="0" y="0" width="24" height="24" />
                                                    <path
                                                        d="M12.7037037,14 L15.6666667,10 L13.4444444,10 L13.4444444,6 L9,12 L11.2222222,12 L11.2222222,14 L6,14 C5.44771525,14 5,13.5522847 5,13 L5,3 C5,2.44771525 5.44771525,2 6,2 L18,2 C18.5522847,2 19,2.44771525 19,3 L19,13 C19,13.5522847 18.5522847,14 18,14 L12.7037037,14 Z"
                                                        fill="#000000" opacity="0.3" />
                                                    <path
                                                        d="M9.80428954,10.9142091 L9,12 L11.2222222,12 L11.2222222,16 L15.6666667,10 L15.4615385,10 L20.2072547,6.57253826 C20.4311176,6.4108595 20.7436609,6.46126971 20.9053396,6.68513259 C20.9668779,6.77033951 21,6.87277228 21,6.97787787 L21,17 C21,18.1045695 20.1045695,19 19,19 L5,19 C3.8954305,19 3,18.1045695 3,17 L3,6.97787787 C3,6.70173549 3.22385763,6.47787787 3.5,6.47787787 C3.60510559,6.47787787 3.70753836,6.51099993 3.79274528,6.57253826 L9.80428954,10.9142091 Z"
                                                        fill="#000000" />
                                                </g>
                                            </svg> </span>
                                        <span class="kt-widget17__subtitle">
                                            Cần ưu tiên
                                        </span>
                                        <span class="kt-widget17__desc">
                                            {{ $ticketHighPriority ?? 0 }} ticket có độ ưu tiên cao
                                        </span>
                                    </a>
                                    <a href="{{ route($this->ticketIndexRoute, ['assignee' => auth()->id()]) }}"
                                        class="kt-widget17__item">
                                        <span class="kt-widget17__icon">
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px"
                                                viewBox="0 0 24 24" version="1.1"
                                                class="kt-svg-icon kt-svg-icon--danger">
                                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                    <rect x="0" y="0" width="24" height="24" />
                                                    <path
                                                        d="M3,16 L5,16 C5.55228475,16 6,15.5522847 6,15 C6,14.4477153 5.55228475,14 5,14 L3,14 L3,12 L5,12 C5.55228475,12 6,11.5522847 6,11 C6,10.4477153 5.55228475,10 5,10 L3,10 L3,8 L5,8 C5.55228475,8 6,7.55228475 6,7 C6,6.44771525 5.55228475,6 5,6 L3,6 L3,4 C3,3.44771525 3.44771525,3 4,3 L10,3 C10.5522847,3 11,3.44771525 11,4 L11,19 C11,19.5522847 10.5522847,20 10,20 L4,20 C3.44771525,20 3,19.5522847 3,19 L3,16 Z"
                                                        fill="#000000" opacity="0.3" />
                                                    <path
                                                        d="M16,3 L19,3 C20.1045695,3 21,3.8954305 21,5 L21,15.2485298 C21,15.7329761 20.8241635,16.200956 20.5051534,16.565539 L17.8762883,19.5699562 C17.6944473,19.7777745 17.378566,19.7988332 17.1707477,19.6169922 C17.1540423,19.602375 17.1383289,19.5866616 17.1237117,19.5699562 L14.4948466,16.565539 C14.1758365,16.200956 14,15.7329761 14,15.2485298 L14,5 C14,3.8954305 14.8954305,3 16,3 Z"
                                                        fill="#000000" />
                                                </g>
                                            </svg> </span>
                                        <span class="kt-widget17__subtitle">
                                            Được gán
                                        </span>
                                        <span class="kt-widget17__desc">
                                            {{ $ticketAssignedToYou ?? 0 }} ticket được gán cho bạn
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!--end:: Widgets/Activity-->
            </div>
            <div class="col-lg-6 col-xl-4 order-lg-1 order-xl-1">

                <!--begin:: Widgets/Inbound Bandwidth-->
                <div class="kt-portlet kt-portlet--fit kt-portlet--head-noborder kt-portlet--height-fluid-half">
                    <div class="kt-portlet__head kt-portlet__space-x">
                        <div class="kt-portlet__head-label">
                            <h3 class="kt-portlet__head-title">
                                Ticket Nội bộ
                            </h3>
                        </div>
                    </div>
                    <div class="kt-portlet__body kt-portlet__body--fluid">
                        <div class="kt-widget20">
                            <div class="kt-widget20__content kt-portlet__space-x">
                                <span
                                    class="kt-widget20__number kt-font-brand">{{ $ticketLocalTodayCount ?? 0 }}+</span>
                                <span class="kt-widget20__desc">Ticket nội bộ mới</span>
                            </div>
                            <div class="kt-widget20__chart" style="height:130px;">
                                <canvas id="kt_chart_bandwidth1"></canvas>
                            </div>
                        </div>
                    </div>
                </div>

                <!--end:: Widgets/Inbound Bandwidth-->
                <div class="kt-space-20"></div>

                <!--begin:: Widgets/Outbound Bandwidth-->
                <div class="kt-portlet kt-portlet--fit kt-portlet--head-noborder kt-portlet--height-fluid-half">
                    <div class="kt-portlet__head kt-portlet__space-x">
                        <div class="kt-portlet__head-label">
                            <h3 class="kt-portlet__head-title">
                                Ticket Cuộc gọi
                            </h3>
                        </div>
                    </div>
                    <div class="kt-portlet__body kt-portlet__body--fluid">
                        <div class="kt-widget20">
                            <div class="kt-widget20__content kt-portlet__space-x">
                                <span
                                    class="kt-widget20__number kt-font-danger">{{ $ticketCallTodayCount ?? 0 }}+</span>
                                <span class="kt-widget20__desc">Ticket cuộc gọi mới</span>
                            </div>
                            <div class="kt-widget20__chart" style="height:130px;">
                                <canvas id="kt_chart_bandwidth2"></canvas>
                            </div>
                        </div>
                    </div>
                </div>

                <!--end:: Widgets/Outbound Bandwidth-->
            </div>
            <div class="col-lg-6 col-xl-4 order-lg-1 order-xl-1">

                <!--Begin::Portlet-->
                <div class="kt-portlet kt-portlet--height-fluid">
                    <div class="kt-portlet__head">
                        <div class="kt-portlet__head-label">
                            <h3 class="kt-portlet__head-title">
                                Hoạt động
                            </h3>
                        </div>
                        <div class="kt-portlet__head-toolbar">
                            <div class="dropdown dropdown-inline">
                                <button type="button" class="btn btn-clean btn-sm btn-icon btn-icon-md"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i class="flaticon-more-1"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="kt-portlet__body">

                        <!--Begin::Timeline 3 -->
                        <div class="kt-timeline-v2">
                            <div class="kt-timeline-v2__items  kt-padding-top-25 kt-padding-bottom-30">
                                @php
                                $colors = collect(['brand', 'warning', 'primary', 'success', 'danger']);
                                @endphp
                                @foreach ($activities ?? [] as $item)
                                <div class="kt-timeline-v2__item">
                                    <span
                                        class="kt-timeline-v2__item-time">{{ $item->created_at->format('H:i') }}</span>
                                    <div class="kt-timeline-v2__item-cricle">
                                        <i class="fa fa-genderless kt-font-{{ $color = $colors->pop() }}"></i>
                                    </div>
                                    @php
                                    $colors->prepend($color);
                                    @endphp
                                    <div class="kt-timeline-v2__item-text  kt-padding-top-5">
                                        {{ $item->getExtraProperty('title') ?? $item->description }}
                                    </div>
                                </div>
                                @endforeach
                            </div>
                        </div>

                        <!--End::Timeline 3 -->
                    </div>
                </div>

                <!--End::Portlet-->
            </div>
        </div>

        <!--End::Row-->

        <!--End::Dashboard 1-->
    </div>

    <!-- end:: Content -->
</div>
