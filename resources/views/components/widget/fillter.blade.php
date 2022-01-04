<div class="right-canvas" id="filter_log">
    <div class="header-canvas bg-green d-flex align-items-center">
        <h4>Bộ lọc</h4>
        <button class="btn btn-sm btn-no-border ms-auto close-canvas" onclick="close_canvas('filter_log');">
            <i class="ic ic-close-w"></i>
        </button>
    </div>
    <div class="content-canvas p-4">
        <div class="inner-ticket">
            <h5>
                <strong>Lọc theo</strong>
            </h5>
            <hr>
            <form>
                <div class="form-group d-flex align-items-center mb-3">
                    <div class="input-date col-5">
                        <div class="input-append date text-14" id="dp3" data-date="12-02-2012" data-date-format="dd-mm-yyyy">
                            <input class="form-control text-14" size="16" type="text" value="12-02-2012">
                            <span class="add-on"></span>
                        </div>
                    </div>
                    <div class="col-auto ps-2 pe-2"><i class="ic ic-arrow-right"></i></div>
                    <div class="input-date col-5">
                        <div class="input-append date text-14" id="dp3" data-date="12-02-2012" data-date-format="dd-mm-yyyy">
                            <input class="form-control text-14" size="16" type="text" value="12-02-2012">
                            <span class="add-on"></span>
                        </div>
                    </div>
                </div>
                <div class="form-group mb-3">
                    <div class="input-group input-search">
                        <input class="form-control" type="search" placeholder="Gán cho" aria-label="Gán cho">
                        <button class="btn" type="submit">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M2 8C2 4.691 4.691 2 8 2C11.309 2 14 4.691 14 8C14 11.309 11.309 14 8 14C4.691 14 2 11.309 2 8ZM17.707 16.293L14.312 12.897C15.365 11.543 16 9.846 16 8C16 3.589 12.411 0 8 0C3.589 0 0 3.589 0 8C0 12.411 3.589 16 8 16C9.846 16 11.543 15.365 12.897 14.312L16.293 17.707C16.488 17.902 16.744 18 17 18C17.256 18 17.512 17.902 17.707 17.707C18.098 17.316 18.098 16.684 17.707 16.293Z" fill="#2C4046"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="form-group mb-3">
                    <button id="dp_priority" type="button" class="btn btn-block btn-dropdown" data-bs-toggle="dropdown" aria-expanded="false">
                        Ưu tiên
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dp_priority">
                        <li><a class="dropdown-item" href="#">Cao</a></li>
                        <li><a class="dropdown-item active" href="#">Trung bình</a></li>
                        <li><a class="dropdown-item" href="#">Thấp</a></li>
                    </ul>
                </div>
                <div class="form-group mb-3">
                    <button id="dp_status" type="button" class="btn btn-block btn-dropdown" data-bs-toggle="dropdown" aria-expanded="false">
                        Trạng thái
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dp_status">
                        <li><a class="dropdown-item" href="#">Gọi nhỡ</a></li>
                        <li><a class="dropdown-item active" href="#">Đã nghe</a></li>
                        <li><a class="dropdown-item" href="#">Đã gọi</a></li>
                    </ul>
                </div>
                <div class="form-group mb-3">
                    <div class="input-group input-search">
                        <input class="form-control" type="search" placeholder="Sản phẩm" aria-label="Gán cho">
                        <button class="btn" type="submit">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M2 8C2 4.691 4.691 2 8 2C11.309 2 14 4.691 14 8C14 11.309 11.309 14 8 14C4.691 14 2 11.309 2 8ZM17.707 16.293L14.312 12.897C15.365 11.543 16 9.846 16 8C16 3.589 12.411 0 8 0C3.589 0 0 3.589 0 8C0 12.411 3.589 16 8 16C9.846 16 11.543 15.365 12.897 14.312L16.293 17.707C16.488 17.902 16.744 18 17 18C17.256 18 17.512 17.902 17.707 17.707C18.098 17.316 18.098 16.684 17.707 16.293Z" fill="#2C4046"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="form-group mb-3">
                    <div class="input-group input-search">
                        <input class="form-control" type="search" placeholder="Nhóm lỗi" aria-label="Gán cho">
                        <button class="btn" type="submit">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M2 8C2 4.691 4.691 2 8 2C11.309 2 14 4.691 14 8C14 11.309 11.309 14 8 14C4.691 14 2 11.309 2 8ZM17.707 16.293L14.312 12.897C15.365 11.543 16 9.846 16 8C16 3.589 12.411 0 8 0C3.589 0 0 3.589 0 8C0 12.411 3.589 16 8 16C9.846 16 11.543 15.365 12.897 14.312L16.293 17.707C16.488 17.902 16.744 18 17 18C17.256 18 17.512 17.902 17.707 17.707C18.098 17.316 18.098 16.684 17.707 16.293Z" fill="#2C4046"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="form-group mb-3">
                    <button type="button" class="btn btn-success btn-block">
                        Thực hiện lọc
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>