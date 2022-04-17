import react, { useState } from 'react';

function Nav() {
  const [navState, setNavState] = useState(false);
  const [about, setAbout] = useState(false);
  const [menu, setMenu] = useState(false);
  const [reviews, setReviews] = useState(false);
  const [questions, setQuestions] = useState(false);
  const [contact, setContact] = useState(false);

  const changeBackground = () => {
    let yScroll = window.scrollY;
    console.log('yScroll:', yScroll);
    if (yScroll >= 114 && window.screen.width >= 1024) {
      setNavState(true);
      if (yScroll >= 1307 && yScroll < 1866) {
        setAbout(true);
      } else {
        setAbout(false);
      }

      if (yScroll >= 1867 && yScroll < 2519) {
        setMenu(true);
      } else {
        setMenu(false);
      }

      if (yScroll >= 2520 && yScroll < 3741) {
        setReviews(true);
      } else {
        setReviews(false);
      }

      if (yScroll >= 3742 && yScroll < 4336) {
        setQuestions(true);
      } else {
        setQuestions(false);
      }

      if (yScroll >= 4337) {
        setContact(true);
      } else {
        setContact(false);
      }
    } else {
      setNavState(false);
    }
  };

  // About: 1307
  // Menu: 1867
  // Reviews: 2520
  // Questions: 3742
  // Contact: 4337

  window.addEventListener('scroll', changeBackground);
    // window.addEventListener("scroll", console.log(window.scrollY))

  return (
    <nav class='navbar navbar-expand-lg fixed-top bg-white'>
      <div class='container-fluid'>
        <button
          class='navbar-toggler border border-0 p-1'
          type='button'
          data-bs-toggle='offcanvas'
          data-bs-target='#offcanvasNavbar'
          aria-controls='offcanvasNavbar'
        >
          <i id='navbar-toggler-icon' class='bi bi-list'></i>
        </button>
        <div
          class='offcanvas offcanvas-start'
          tabindex='-1'
          id='offcanvasNavbar'
          aria-labelledby='offcanvasNavbarLabel'
        >
          <div class='offcanvas-header'>
            <h1
              class='offcanvas-title font-weight-bold'
              id='offcanvasNavbarLabel'
            >
              BE.STÉAK.Ă
            </h1>
          </div>
          <div class='offcanvas-body'>
            <ul class='navbar-nav pe-3'>
              <li class='nav-item'>
                <a
                  class={
                    about
                      ? 'nav-link active js-scroll-trigger p-2 my-1 font-weight-bold border-dark'
                      : 'nav-link active js-scroll-trigger p-2 my-1 font-weight-bold'
                  }
                  aria-current='page'
                  href='#about'
                >
                  ABOUT
                </a>
              </li>
              <li class='nav-item'>
                <a
                  class={
                    menu
                      ? 'nav-link active js-scroll-trigger p-2 my-1 font-weight-bold border-dark'
                      : 'nav-link active js-scroll-trigger p-2 my-1 font-weight-bold'
                  }
                  href='#menu'
                >
                  MENU
                </a>
              </li>
              <li class='nav-item'>
                <a
                  class={
                    reviews
                      ? 'nav-link active js-scroll-trigger p-2 my-1 font-weight-bold border-dark'
                      : 'nav-link active js-scroll-trigger p-2 my-1 font-weight-bold'
                  }
                  href='#reviews'
                >
                  REVIEWS
                </a>
              </li>
              <li class='nav-item'>
                <a
                  class={
                    questions
                      ? 'nav-link active js-scroll-trigger p-2 my-1 font-weight-bold border-dark'
                      : 'nav-link active js-scroll-trigger p-2 my-1 font-weight-bold'
                  }
                  href='#questions'
                >
                  QUESTIONS
                </a>
              </li>
              <li class='nav-item'>
                <a
                  class={
                    contact
                      ? 'nav-link active js-scroll-trigger p-2 my-1 font-weight-bold border-dark'
                      : 'nav-link active js-scroll-trigger p-2 my-1 font-weight-bold'
                  }
                  href='#contact'
                >
                  CONTACT
                </a>
              </li>
              <button
                id='closebutton'
                type='button'
                class='btn border-dark rounded-0 my-2 text-reset'
                data-bs-dismiss='offcanvas'
                aria-label='Close'
              >
                CLOSE
              </button>
            </ul>
          </div>
        </div>

        <button
          class='navbar-toggler p-0 border-0'
          type='button'
          data-bs-toggle='offcanvas'
          data-bs-target='#offcanvasRight'
          aria-controls='offcanvasRight'
        >
          <i class='bi bi-three-dots-vertical'></i>
        </button>

        <div
          class='offcanvas offcanvas-end'
          tabindex='-1'
          id='offcanvasRight'
          aria-labelledby='offcanvasRightLabel'
        >
          <div class='offcanvas-header'>
            <h5 id='offcanvasRightLabel'></h5>
            <button
              type='button'
              class='btn p-0 text-reset'
              data-bs-dismiss='offcanvas'
              aria-label='Close'
            >
              <i class='bi bi-x'></i>
            </button>
          </div>
          <div class='offcanvas-body'>
            <ul class='navbar-nav text-end'>
              <li class='nav-item'>
                <a
                  class='nav-link p-2 my-1'
                  href='https://www.toasttab.com/be.steak.a/v3'
                >
                  ONLINE ORDER
                </a>
              </li>
              <li class='nav-item'>
                <a
                  class='nav-link p-2 my-1'
                  href='https://resy.com/cities/cmpb/be-steak-a'
                >
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
