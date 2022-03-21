import react from 'react';

function Menu() {
    return(
        <section id="menu">
            <div id="menubackground">
                <h3 class="font-weight-bold">MENU</h3>
                <p>Check out our menu below</p>
                <button type="button" class="btn btn-outline-dark rounded-0" data-bs-toggle="modal" data-bs-target="#exampleModal">
                View Dishes
                </button>


                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                        <div class="modal-content rounded-0">
                            <div class="modal-header">

                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div id="menuphoto">Menu goes here</div>
                            </div>
                            
                        </div>
                    </div>
                </div>            
            </div>
        </section>
    )
}

export default Menu;

