import react from 'react';

function Nav() {
    return (
        <nav class="navbar navbar-expand-md navbar-light fixed-top">
            <div class="container-fluid">
                <button class="navbar-toggler border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="offcanvas offcanvas-start w-75" style={{height: "80vh"}} tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">BE.STEAK.A</h5>
                    </div>
                    <div class="offcanvas-body">
                        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li class="nav-item">
                                <a class="nav-link active js-scroll-trigger p-2 my-1" aria-current="page" href="#about">ABOUT</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active js-scroll-trigger p-2 my-1" href="#menu">MENU</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active js-scroll-trigger p-2 my-1" href="#reviews">REVIEWS</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active js-scroll-trigger p-2 my-1" href="#questions">QUESTIONS</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active js-scroll-trigger p-2 my-1" href="#contact">CONTACT</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active js-scroll-trigger p-2 my-1" href="#">RESERVATIONS</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active js-scroll-trigger p-2 my-1" href="#">ONLINE ORDER</a>
                            </li>
                            <button type="button" class="btn border-dark my-2 text-reset" data-bs-dismiss="offcanvas" aria-label="Close">Close</button>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav;