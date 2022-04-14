import react, { useState } from "react";

function Nav() {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 114) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <nav
      class="navbar navbar-expand-lg fixed-top"
      className={
        navbar
          ? "navbar navbar-expand-lg fixed-top active"
          : "navbar navbar-expand-lg fixed-top"
      }
    >
      <div class="container-fluid">
        <button
          class="navbar-toggler border border-0 p-1"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <i id="navbar-toggler-icon" class="bi bi-list"></i>
        </button>
        <div
          class="offcanvas offcanvas-start"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div class="offcanvas-header">
            <h1
              class="offcanvas-title font-weight-bold"
              id="offcanvasNavbarLabel"
            >
              BE.STÉAK.Ă
            </h1>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav pe-3">
              <li class="nav-item">
                <a
                  class="nav-link active js-scroll-trigger p-2 my-1 font-weight-bold"
                  aria-current="page"
                  href="#about"
                >
                  ABOUT
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link active js-scroll-trigger p-2 my-1 font-weight-bold"
                  href="#menu"
                >
                  MENU
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link active js-scroll-trigger p-2 my-1 font-weight-bold"
                  href="#reviews"
                >
                  REVIEWS
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link active js-scroll-trigger p-2 my-1 font-weight-bold"
                  href="#questions"
                >
                  QUESTIONS
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link active js-scroll-trigger p-2 my-1 font-weight-bold"
                  href="#contact"
                >
                  CONTACT
                </a>
              </li>
              {/* <li class="nav-item">
                                <a class="nav-link active js-scroll-trigger p-2 my-1 font-weight-bold" href="#">RESERVATIONS</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active js-scroll-trigger p-2 my-1 font-weight-bold" href="#">ONLINE ORDER</a>
                            </li> */}
              <button
                id="closebutton"
                type="button"
                class="btn border-dark rounded-0 my-2 text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              >
                CLOSE
              </button>
            </ul>
          </div>
        </div>

        <button
          class="navbar-toggler p-0 border-0"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        >
          <i class="bi bi-three-dots-vertical"></i>
        </button>

        <div
          class="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
        >
          <div class="offcanvas-header">
            <h5 id="offcanvasRightLabel"></h5>
            <button
              type="button"
              class="btn p-0 text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              <i class="bi bi-x"></i>
            </button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav text-end">
              <li class="nav-item">
                <a class="nav-link p-2 my-1" href="">
                  ONLINE ORDER
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link p-2 my-1" href="">
                  BOOKINGS
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
