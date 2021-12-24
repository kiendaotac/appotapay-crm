<x-app-layout>
    <div class="kt-login__body">

        <!--begin::Signin-->
        <div class="kt-login__form p-5 m-5 bg-white rounded shadow">
            <div class="kt-login__title">
                <h3>{{ __('Login') }}</h3>
            </div>

            <!--begin::Form-->
            <form class="kt-form" action="{{ route('perform-login') }}" novalidate="novalidate" id="kt_login_form"
                method="POST">
                @csrf

                <x-bootstrap.alert :active="$errors->any()" :type="'danger'">
                    <x-slot name="icon">
                        <x-fas-exclamation-circle width="30" height="30" />
                    </x-slot>
                    {{ $errors->first() }}
                </x-bootstrap.alert>

                <div class="form-group">
                    <input class="form-control border rounded" type="text" placeholder="{{ __('Email') }}" name="email"
                        autocomplete="off" value="{{ old('email') }}">
                </div>
                <div class="form-group">
                    <input class="form-control border rounded" type="password" placeholder="{{ __('Password') }}"
                        name="password" autocomplete="off">
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
</x-app-layout>
