import react from "react";

function Questions() {
  return (
    <section id="questions" class="mb-5">
      <h1 class="text-center p-2">QUESTIONS</h1>
      <p class="text-center px-3">
        We've tried our best to answer some of your common questions
      </p>
      <div class="accordion container-fluid" id="accordionExample">
        <div class="accordion-item">
          <h1 class="accordion-header" id="headingOne">
            <button
              class="accordion-button border border-dark rounded-0 shadow-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              BEST WAY TO DINE AT BE.STEAK.A ?
            </button>
          </h1>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body border border-top-0 border-dark">
              <p>
                This is the first item's accordion body. It is shown by default,
                until the collapse plugin adds the appropriate classes that we
                use to style each element. These classes control the overall
                appearance, as well as the showing and hiding via CSS
                transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that
                just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </p>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h1 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button collapsed border border-dark rounded-0 shadow-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              QUESTION 2
            </button>
          </h1>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body border border-top-0 border-dark">
              <p>
                This is the second item's accordion body. It is hidden by
                default, until the collapse plugin adds the appropriate classes
                that we use to style each element. These classes control the
                overall appearance, as well as the showing and hiding via CSS
                transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that
                just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </p>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h1 class="accordion-header" id="headingThree">
            <button
              class="accordion-button collapsed border border-dark rounded-0 shadow-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              QUESTION 3
            </button>
          </h1>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body border border-top-0 border-dark">
              <p>
                This is the third item's accordion body. It is hidden by
                default, until the collapse plugin adds the appropriate classes
                that we use to style each element. These classes control the
                overall appearance, as well as the showing and hiding via CSS
                transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that
                just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </p>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h1 class="accordion-header" id="headingFour">
            <button
              class="accordion-button collapsed border border-dark rounded-0 shadow-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              QUESTION 4
            </button>
          </h1>
          <div
            id="collapseFour"
            class="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body border border-top-0 border-dark">
              <p>
                This is the third item's accordion body. It is hidden by
                default, until the collapse plugin adds the appropriate classes
                that we use to style each element. These classes control the
                overall appearance, as well as the showing and hiding via CSS
                transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that
                just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </p>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h1 class="accordion-header" id="headingFive">
            <button
              class="accordion-button collapsed border border-dark rounded-0 shadow-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              QUESTION 5
            </button>
          </h1>
          <div
            id="collapseFive"
            class="accordion-collapse collapse"
            aria-labelledby="headingFive"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body border border-top-0 border-dark">
              <p>
                This is the third item's accordion body. It is hidden by
                default, until the collapse plugin adds the appropriate classes
                that we use to style each element. These classes control the
                overall appearance, as well as the showing and hiding via CSS
                transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that
                just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Questions;
