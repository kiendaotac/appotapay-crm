<div id="kt_header" class="kt-header kt-grid__item  kt-header--fixed ">

    <!-- begin:: Header Menu -->

    <div class="kt-header-menu-wrapper" id="kt_header_menu_wrapper">
        <div id="kt_header_menu" class="kt-header-menu kt-header-menu-mobile  kt-header-menu--layout-default ">
            <ul class="kt-menu__nav ">
                @if (request()->routeIs('ticket.*'))
                <li class="kt-menu__item  kt-menu__item--open kt-menu__item--here kt-menu__item--submenu kt-menu__item--rel kt-menu__item--open kt-menu__item--here kt-menu__item--active"
                    data-ktmenu-submenu-toggle="click" aria-haspopup="true">
                    <a href="javascript:;" class="kt-menu__link kt-menu__toggle">
                        <span class="kt-menu__link-text">
                            <button type="button" class="btn btn-primary">
                                <x-fas-plus width="10" height="10" />
                                &nbsp;Thêm mới
                            </button>
                        </span>
                        <i class="kt-menu__ver-arrow la la-angle-right"></i>
                    </a>
                    <div class="kt-menu__submenu kt-menu__submenu--classic kt-menu__submenu--left">
                        <ul class="kt-menu__subnav">
                            <li class="kt-menu__item  kt-menu__item--active " aria-haspopup="true">
                                <a href="{{ route('ticket.locals.create') }}" class="kt-menu__link ">
                                    <i class="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i>
                                    <span class="kt-menu__link-text">Nội bộ</span>
                                </a>
                            </li>
                            <li class="kt-menu__item  kt-menu__item--active " aria-haspopup="true">
                                <a href="index.html" class="kt-menu__link ">
                                    <i class="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i>
                                    <span class="kt-menu__link-text">Hỗ trợ</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
                @endif
            </ul>
        </div>
    </div>

    <!-- end:: Header Menu -->

    <!-- begin:: Header Topbar -->
    <div class="kt-header__topbar" data-turbo-permanent>

        <!--begin: Search -->

        <!--begin: Search -->
        <div class="kt-header__topbar-item kt-header__topbar-item--search dropdown" id="kt_quick_search_toggle">
            <div class="kt-header__topbar-wrapper" data-toggle="dropdown" data-offset="10px,0px">
                <span class="kt-header__topbar-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px"
                        height="24px" viewBox="0 0 24 24" version="1.1" class="kt-svg-icon">
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <rect x="0" y="0" width="24" height="24" />
                            <path
                                d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z"
                                fill="#000000" fill-rule="nonzero" opacity="0.3" />
                            <path
                                d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z"
                                fill="#000000" fill-rule="nonzero" />
                        </g>
                    </svg> </span>
            </div>
            <div class="dropdown-menu dropdown-menu-fit dropdown-menu-right dropdown-menu-anim dropdown-menu-lg">
                <div class="kt-quick-search kt-quick-search--dropdown kt-quick-search--result-compact"
                    id="kt_quick_search_dropdown">
                    <form method="get" class="kt-quick-search__form">
                        <div class="input-group">
                            <div class="input-group-prepend"><span class="input-group-text"><i
                                        class="flaticon2-search-1"></i></span></div>
                            <input type="text" class="form-control kt-quick-search__input" placeholder="Search...">
                            <div class="input-group-append"><span class="input-group-text"><i
                                        class="la la-close kt-quick-search__close"></i></span></div>
                        </div>
                    </form>
                    <div class="kt-quick-search__wrapper kt-scroll" data-scroll="true" data-height="325"
                        data-mobile-height="200">
                    </div>
                </div>
            </div>
        </div>

        <!--end: Search -->

        <!--end: Search -->

        <!--begin: Notifications -->
        <livewire:notification.widget />

        <!--end: Notifications -->

        <!--begin: User Bar -->
        <div class="kt-header__topbar-item kt-header__topbar-item--user">
            <div class="kt-header__topbar-wrapper" data-toggle="dropdown" data-offset="0px,0px">
                <div class="kt-header__topbar-user">
                    <span class="kt-header__topbar-username kt-hidden-mobile">{{ auth()->user()->name }}</span>
                    <img class="" alt="Pic" src="{{ auth()->user()->avatar_url }}" />
                </div>
            </div>
            <div
                class="dropdown-menu dropdown-menu-fit dropdown-menu-right dropdown-menu-anim dropdown-menu-top-unround dropdown-menu-xl">

                <!--begin: Head -->
                <div class="kt-user-card kt-user-card--skin-dark kt-notification-item-padding-x"
                    style="background-image: url(/assets/media/misc/bg-1.jpg)">
                    <div class="kt-user-card__avatar">
                        <img class="" alt="Pic" src="{{ auth()->user()->avatar_url }}" />
                    </div>
                    <div class="kt-user-card__name">
                        {{ auth()->user()->name }}
                    </div>
                </div>

                <!--end: Head -->

                <!--begin: Navigation -->
                <div class="kt-notification">
                    <a href="{{ route('profile.information') }}" class="kt-notification__item">
                        <div class="kt-notification__item-icon">
                            <i class="flaticon2-calendar-3 kt-font-success"></i>
                        </div>
                        <div class="kt-notification__item-details">
                            <div class="kt-notification__item-title kt-font-bold">
                                Cá nhân
                            </div>
                            <div class="kt-notification__item-time">
                                Cài đặt hồ sơ cá nhân
                            </div>
                        </div>
                    </a>
                    <a href="{{ route('profile.activity') }}" class="kt-notification__item">
                        <div class="kt-notification__item-icon">
                            <i class="flaticon2-rocket-1 kt-font-danger"></i>
                        </div>
                        <div class="kt-notification__item-details">
                            <div class="kt-notification__item-title kt-font-bold">
                                Hoạt động
                            </div>
                            <div class="kt-notification__item-time">
                                Các hoạt động trên hệ thống
                            </div>
                        </div>
                    </a>
                    <div class="kt-notification__custom kt-space-between">
                        <x-logout class="btn btn-label btn-label-brand btn-sm btn-bold">
                            Đăng xuất
                        </x-logout>
                    </div>
                </div>

                <!--end: Navigation -->
            </div>
        </div>

        <!--end: User Bar -->
    </div>

    <!-- end:: Header Topbar -->
</div>
