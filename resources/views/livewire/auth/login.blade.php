<div class="kt-login__body">

    <!--begin::Signin-->
    <div class="kt-login__form p-5 m-5 bg-white rounded shadow">
        <div class="kt-login__title">
            <h3>{{ __('Login') }}</h3>
        </div>

        <!--begin::Form-->
        <form class="kt-form" wire:submit.prevent="login" novalidate="novalidate" id="kt_login_form" method="POST">
            @csrf
            <div class="form-group">
                <input class="form-control border rounded" type="text" placeholder="{{ __('Email') }}" wire:model.defer="email"
                    autocomplete="off">
                <x-custom.alert-inline key="email" />
            </div>
            <div class="form-group">
                <input class="form-control border rounded" type="password" placeholder="{{ __('Password') }}"
                    wire:model.defer="password" autocomplete="off">
                <x-custom.alert-inline key="password" />
            </div>

            <!--begin::Action-->
            <div class="kt-login__actions text-center">
                <button id="kt_login_signin_submit"
                    class="btn btn-primary btn-block btn-elevate kt-login__btn-primary">{{ __('Login') }}</button>
            </div>

            <!--end::Action-->
        </form>

        <!--end::Form-->

        <!--begin::Divider-->
        <div class="kt-login__divider">
            <div class="kt-divider">
                <span></span>
                <span>***</span>
                <span></span>
            </div>
        </div>

        <!--end::Divider-->

        <!--begin::Options-->
        <div class="kt-login__options mb-2">
            <a href="{{ route('login.redirectToAppotaPayProvider') }}" class="btn btn-block btn-info kt-btn">
                <x-image.logo-appota width="24" height="24" />
                &nbsp;&nbsp;Pay
            </a>
        </div>

        <!--end::Options-->
    </div>

    <!--end::Signin-->
</div>
