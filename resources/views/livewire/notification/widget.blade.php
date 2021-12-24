<div class="kt-header__topbar-item dropdown">
    <div class="kt-header__topbar-wrapper" data-toggle="dropdown" data-offset="30px,0px" aria-expanded="true">
        <span class="kt-header__topbar-icon kt-pulse kt-pulse--brand">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" class="kt-svg-icon">
                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <path d="M17,12 L18.5,12 C19.3284271,12 20,12.6715729 20,13.5 C20,14.3284271 19.3284271,15 18.5,15 L5.5,15 C4.67157288,15 4,14.3284271 4,13.5 C4,12.6715729 4.67157288,12 5.5,12 L7,12 L7.5582739,6.97553494 C7.80974924,4.71225688 9.72279394,3 12,3 C14.2772061,3 16.1902508,4.71225688 16.4417261,6.97553494 L17,12 Z" fill="#000000"/>
                    <rect fill="#000000" opacity="0.3" x="10" y="16" width="4" height="4" rx="2"/>
                </g>
            </svg>
            @if ($unreadCount)
            <span class="kt-badge kt-badge--danger kt-badge" style="margin:-15px 0 0 -10px">{{ $unreadCount < 10 ? $unreadCount : '9+' }}</span>
            <span class="kt-pulse__ring"></span>
            @endif
        </span>
    </div>
    <div
        class="dropdown-menu dropdown-menu-fit dropdown-menu-right dropdown-menu-anim dropdown-menu-top-unround dropdown-menu-lg">
        <form>

            <!--begin: Head -->
            <div class="kt-head kt-head--skin-dark kt-head--fit-x kt-head--fit-b"
                style="background-image: url(/assets/media/misc/bg-1.jpg)">
                <h3 class="kt-head__title">
                    Thông báo
                    &nbsp;
                    @if ($unreadCount)
                    <span class="btn btn-success btn-sm btn-bold btn-font-md">{{ $unreadCount }} mới</span>
                    @endif
                </h3>
                <div class="d-flex justify-content-between mt-3 p-2">
                    <div>
                        <a href="{{ route('profile.notification') }}" class="text-white">Xem thêm</a>
                    </div>
                    <div>
                        <a wire:click.prevent="markAllAsRead" href="javascript:void(0)" class="text-white">Đánh dấu tất
                            cả đã xem</a>
                    </div>
                </div>
            </div>

            <!--end: Head -->
            <div class="kt-notification kt-margin-t-10 kt-margin-b-10 kt-scroll" data-scroll="true" data-height="300"
                data-mobile-height="200">

                @forelse ($notifications as $item)
                <a wire:click="markAsRead('{{ $item->id }}')" wire:key="{{ $item->id }}"
                    href="{{ $item->data['url'] ?? 'javascript:void(0)' }}" target="_blank"
                    class="kt-notification__item {{ isset($item->read_at) ? 'kt-notification__item--read':'' }}">
                    <div class="kt-notification__item-icon">
                        <i class="{{ $item->data['icon'] ?? 'flaticon-exclamation-1 kt-font-primary' }}"></i>
                    </div>
                    <div class="kt-notification__item-details">
                        <div class="kt-notification__item-title">
                            {{ $item->data['description'] ?? 'Thông báo mới' }}
                        </div>
                        <div class="kt-notification__item-time">
                            {{ $item->created_at->locale('vi_VN')->diffForHumans() }}
                        </div>
                    </div>
                </a>
                @empty
                <div class="kt-grid kt-grid--ver" style="min-height: 200px;">
                    <div class="kt-grid kt-grid--hor kt-grid__item kt-grid__item--fluid kt-grid__item--middle">
                        <div class="kt-grid__item kt-grid__item--middle kt-align-center">
                            Không có thông báo mới
                        </div>
                    </div>
                </div>
                @endforelse
            </div>
        </form>
    </div>
</div>
