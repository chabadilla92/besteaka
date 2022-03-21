import react from 'react';

function Contact() {
    return (
        <section id="contact">
            <h2>CONTACT</h2>
            <div class="row">
                <div class="col-md-6">
                    <h3>Facebook</h3>
                    <p>Check us out on Facebook!</p>
                </div>
                <div class="col-md-6">
                    <h3>Instagram</h3>
                    <p>Check us out on Instagram!</p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <h3>Address</h3>
                    <p>1887 S Bascom Ave, Campbell, CA 95008</p>
                </div>
                <div class="col-md-6">
                    <h3>Telephone</h3>
                    <p>408-963-2092</p>
                </div>
            </div>
            <div class="row">
                <h3>Hours</h3>
                <p>M-THU: 5 - 9 PM</p>
                <p>FRI &#38; SAT: 11:30 AM - 2 PM, 5 - 9 PM</p>
                <p>SUN: 10 AM - 2 PM, 5 - 9 PM</p>
            </div>
        </section>
    )
};

export default Contact;
