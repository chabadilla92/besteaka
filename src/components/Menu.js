import react from "react";

function Menu() {
  return (
    <section id="menu">
      <div id="menubackground">
        <div id="menubox">
          <h1 class="font-weight-bold">MENU</h1>
          <p>Check out our menus below</p>
          <div class="mb-lg-1">
          <button
            type="button"
            class="btn btn-outline-light rounded-0"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            LUNCH
          </button>
          </div>
          <div class="mb-lg-1">
          <button
            type="button"
            class="btn btn-outline-light rounded-0"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            BRUNCH
          </button>
          </div>
          <div>
          <button
            type="button"
            class="btn btn-outline-light rounded-0"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            DINNER
          </button>
          </div>
        </div>

        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content rounded-0 border border-dark">
              <div class="modal-header border-bottom border-white">
                <h3>MENU</h3>
                <button
                  type="button"
                  class="btn p-0"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i class="bi bi-x"></i>
                </button>
              </div>
              <div class="modal-body">
                <img src="besteakamenu-1.jpeg" class="img-fluid" alt=""></img>
                <img src="besteakamenu 2-2.jpeg" class="img-fluid" alt=""></img>
                <img src="besteakamenu 3-3.jpeg" class="img-fluid" alt=""></img>
                <img src="besteakamenu 4-4.jpeg" class="img-fluid" alt=""></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Menu;
