import react from 'react';

function Contact() {
    return (
        <section id="contact">
            <h1 class="text-center p-2">CONTACT</h1>
            <div class="row p-3 text-md-center">
                <div class="col-md-6 py-3">
                    <h3><a href="https://www.facebook.com/BEST%C3%89AK%C4%82-364044414093165/"><i class="bi bi-facebook"></i></a></h3>
                    <h3 id="contactheader" class="py-2">FACEBOOK</h3>
                    <p>Check us out on Facebook!</p>
                </div>
                <div class="col-md-6 py-3">
                    <h3><a href="https://www.instagram.com/be.steak.a/?hl=en"><i class="bi bi-instagram"></i></a></h3>
                    <h3 id="contactheader" class="py-2">INSTAGRAM</h3>
                    <p>Check us out on Instagram!</p>
                </div>
            </div>
            <div class="row p-3 text-md-center">
                <div class="col-md-6 py-3">
                    <h3><i class="bi bi-house-door"></i></h3>
                    <h3 id="contactheader">ADDRESS</h3>
                    <p>1887 S Bascom Ave, Campbell, CA 95008</p>
                </div>
                <div class="col-md-6 py-3">
                    <h3><i class="bi bi-phone"></i></h3>
                    <h3 id="contactheader">TELEPHONE</h3>
                    <p>408-963-2092</p>
                </div>
            </div>
            <div class="row p-3 text-md-center">
                <h3><i class="bi bi-clock"></i></h3>
                <h3 id="contactheader">HOURS</h3>
                <p>M-THU: 5 - 9 PM<br />
                FRI &#38; SAT: 11:30 AM - 2 PM, 5 - 9 PM<br />
                SUN: 10 AM - 2 PM, 5 - 9 PM</p>
            </div>
        </section>
    )
};

export default Contact;
