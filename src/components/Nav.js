import react from 'react';

function Nav() {
    return(
        <nav>
            <ul class="d-sm-flex justify-content-around p-2">
                <li class="p-2"><a href="#about">ABOUT</a></li>
                <li class="p-2"><a href="#menu">MENU</a></li>
                <li class="p-2"><a href="#reviews">REVIEWS</a></li>
                <li class="p-2"><a href="#questions">QUESTIONS</a></li>
                <li class="p-2 mr-auto"><a href="#contact">CONTACT</a></li>
                <li class="p-2">ONLINE ORDERING</li>
                <li class="p-2">RESERVATIONS</li>
            </ul>
        </nav>
    )
}

export default Nav;