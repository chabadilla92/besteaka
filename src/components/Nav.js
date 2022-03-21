import react from 'react';

function Nav() {
    return (
        <nav class="navbar navbar-expand-md navbar-light fixed-top">
            <div class="container-fluid">
                <button class="navbar-toggler border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="offcanvas offcanvas-start" style={{height: "85vh", width: "80vw"}} tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div class="offcanvas-header">
                        <h1 class="offcanvas-title font-weight-bold" id="offcanvasNavbarLabel">BE.STEAK.A</h1>
                    </div>
                    <div class="offcanvas-body">
                        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li class="nav-item">
                                <a class="nav-link active js-scroll-trigger p-2 my-1 font-weight-bold" aria-current="page" href="#about">ABOUT</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active js-scroll-trigger p-2 my-1 font-weight-bold" href="#menu">MENU</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active js-scroll-trigger p-2 my-1 font-weight-bold" href="#reviews">REVIEWS</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active js-scroll-trigger p-2 my-1 font-weight-bold" href="#questions">QUESTIONS</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active js-scroll-trigger p-2 my-1 font-weight-bold" href="#contact">CONTACT</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active js-scroll-trigger p-2 my-1 font-weight-bold" href="#">RESERVATIONS</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active js-scroll-trigger p-2 my-1 font-weight-bold" href="#">ONLINE ORDER</a>
                            </li>
                            <button type="button" class="btn border-dark rounded-0 my-2 text-reset" data-bs-dismiss="offcanvas" aria-label="Close">CLOSE</button>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav;