<header class="pe-3 ps-3 pt-1 pb-1">
    <div class="container-fluid">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                <img src="{{ asset('assets/images/appotapay.png') }}" width="34" height="34" />
            </a>
            <div class="line-hr"></div>
            <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <li class="nav-item ">
                    <a class="nav-link " href="#">
                        Cuộc gọi
                    </a>
                <li class="nav-item">
                    <a class="nav-link active" href="#">
                        Ticket hỗ trợ
                    </a>
                    <!-- <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li><a class="dropdown-item" href="#">Action</a></li>
                      <li><a class="dropdown-item" href="#">Another action</a></li>
                      <li><hr class="dropdown-divider"></li>
                      <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul> -->
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        Ticket nội bộ
                    </a>
                    <!-- <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li><a class="dropdown-item" href="#">Action</a></li>
                      <li><a class="dropdown-item" href="#">Another action</a></li>
                      <li><hr class="dropdown-divider"></li>
                      <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul> -->
                </li>
            </ul>

            <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3 d-flex">
                <input class="form-control" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 8C2 4.691 4.691 2 8 2C11.309 2 14 4.691 14 8C14 11.309 11.309 14 8 14C4.691 14 2 11.309 2 8ZM17.707 16.293L14.312 12.897C15.365 11.543 16 9.846 16 8C16 3.589 12.411 0 8 0C3.589 0 0 3.589 0 8C0 12.411 3.589 16 8 16C9.846 16 11.543 15.365 12.897 14.312L16.293 17.707C16.488 17.902 16.744 18 17 18C17.256 18 17.512 17.902 17.707 17.707C18.098 17.316 18.098 16.684 17.707 16.293Z" fill="#2C4046"/>
                    </svg>
                </button>
            </form>

            <div class="text-end">
                <ul class=" nav nav-user">
                    <li>
                        <a href="#">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.06 14.7229L3.06002 14.7229L3.05901 14.7202C2.84718 14.1578 2.91598 13.5293 3.26393 12.9545L3.26423 12.954L4.22256 11.3623L4.22276 11.362C4.33914 11.168 4.44228 10.8939 4.51609 10.6257C4.58994 10.3575 4.64172 10.0688 4.64172 9.84168V7.43335C4.64172 4.47142 7.05479 2.05835 10.0167 2.05835C12.9787 2.05835 15.3917 4.47142 15.3917 7.43335V9.84168C15.3917 10.0648 15.4436 10.3535 15.5172 10.6232C15.5909 10.8931 15.6938 11.1706 15.8093 11.368L15.8093 11.368L15.8107 11.3703L16.7604 12.9532C16.7605 12.9533 16.7605 12.9534 16.7606 12.9535C17.0799 13.4883 17.1395 14.1344 16.9237 14.7222C16.7087 15.3079 16.242 15.7528 15.6552 15.9459L15.6537 15.9464C13.8469 16.5541 11.9322 16.8583 10.0167 16.8583C8.10172 16.8583 6.18728 16.5543 4.37218 15.9466C3.73457 15.7262 3.26423 15.2845 3.06 14.7229ZM3.91088 13.3377L3.91017 13.3389C3.70028 13.6919 3.62366 14.097 3.76581 14.4624C3.89868 14.834 4.21904 15.0945 4.61093 15.2283L4.61232 15.2287C8.14707 16.4126 11.8944 16.4127 15.4291 15.2289C15.801 15.1049 16.0923 14.8243 16.2269 14.4516C16.3594 14.0845 16.3301 13.6804 16.1224 13.3375C16.1223 13.3373 16.1223 13.3372 16.1222 13.3371L15.1651 11.7475C14.8709 11.2434 14.6417 10.3962 14.6417 9.83335V7.43335C14.6417 4.87861 12.5715 2.80835 10.0167 2.80835C7.47063 2.80835 5.39172 4.8783 5.39172 7.43335V9.84168C5.39172 10.4039 5.15458 11.2594 4.86849 11.7473L3.91088 13.3377Z" fill="#8A8F97" stroke="#8A8F97" stroke-width="0.5"/>
                                <path d="M12.2911 2.23122L12.2911 2.23121L12.2903 2.2292C11.9261 1.28751 11.0368 0.683313 10.0254 0.683313C9.01376 0.683313 8.1254 1.29598 7.76109 2.22773C7.64746 2.50776 7.7105 2.81803 7.90586 3.03395C8.10158 3.25028 8.41159 3.34462 8.70309 3.25162C9.32239 3.06686 9.9835 3.01804 10.6715 3.1069C10.8893 3.13922 11.1159 3.18776 11.3516 3.25274C11.4226 3.27295 11.4945 3.28331 11.5671 3.28331C11.7719 3.28331 11.9876 3.20182 12.1432 3.0359L12.1432 3.03592L12.145 3.03395C12.3433 2.81472 12.3925 2.50503 12.2911 2.23122Z" fill="#8A8F97" stroke="#8A8F97" stroke-width="0.3"/>
                                <path d="M6.89136 16.6167H6.84136V16.6667C6.84136 17.505 7.18001 18.3177 7.77267 18.9104C8.36532 19.503 9.17802 19.8417 10.0164 19.8417C11.769 19.8417 13.1914 18.4193 13.1914 16.6667V16.6167H13.1414H11.8914H11.8414V16.6667C11.8414 17.6724 11.0221 18.4917 10.0164 18.4917C9.53798 18.4917 9.06736 18.297 8.72671 17.9563C8.38607 17.6157 8.19136 17.1451 8.19136 16.6667V16.6167H8.14136H6.89136Z" fill="#8A8F97" stroke="#8A8F97" stroke-width="0.1"/>
                            </svg>

                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.9902 20H16.0002V13C16.0002 12.447 15.5522 12 15.0002 12H9.00024C8.44724 12 8.00024 12.447 8.00024 13V20H5.00024L5.00624 11.583L11.9982 4.43202L19.0002 11.624L18.9902 20ZM10.0002 20H14.0002V14H10.0002V20ZM20.4242 10.185L12.7152 2.30102C12.3382 1.91602 11.6622 1.91602 11.2852 2.30102L3.57524 10.186C3.21024 10.561 3.00024 11.085 3.00024 11.624V20C3.00024 21.103 3.84724 22 4.88824 22H9.00024H15.0002H19.1112C20.1522 22 21.0002 21.103 21.0002 20V11.624C21.0002 11.085 20.7902 10.561 20.4242 10.185Z" fill="#8A8F97"/>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.5 9.5C8.5 7.57 10.07 6 12 6C13.93 6 15.5 7.57 15.5 9.5C15.5 11.08 14.44 12.403 13 12.837V14C13 14.553 12.553 15 12 15C11.447 15 11 14.553 11 14V12C11 11.447 11.447 11 12 11C12.827 11 13.5 10.327 13.5 9.5C13.5 8.673 12.827 8 12 8C11.173 8 10.5 8.673 10.5 9.5C10.5 10.053 10.053 10.5 9.5 10.5C8.947 10.5 8.5 10.053 8.5 9.5ZM11 17C11 16.447 11.447 16 12 16C12.553 16 13 16.447 13 17C13 17.553 12.553 18 12 18C11.447 18 11 17.553 11 17ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20ZM12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2Z" fill="#8A8F97"/>
                            </svg>
                        </a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <img class="circled" src="{{ auth()->user()->avatar_url ?? 'https://ui-avatars.com/api/?name=' . urlencode("Default") . '&color=7F9CF5&background=EBF4FF' }}" width="40" />
                            <span class="text-12">{{ auth()->user()->name }}</span>
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="{{ route('profile.information') }}">{{ __('Cài đặt hồ sơ cá nhân') }}</a></li>
                            <li><a class="dropdown-item" href="{{ route('profile.activity') }}">{{ __('Các hoạt động trên hệ thống') }}</a></li>
                            <li><hr class="dropdown-divider"></li>
                            <li><a class="dropdown-item" href="{{ route('get.logout') }}">{{ __('Logout') }}</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</header>