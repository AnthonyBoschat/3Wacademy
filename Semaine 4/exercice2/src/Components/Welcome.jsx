import React from "react";

function Welcome(){

    return(
        <div className="col-lg-6 content-left">
            <div className="content-left-wrapper">
              <div>
                <figure>
                  <img
                    src="https://www.ansonika.com/wilio/img/info_graphic_2.svg"
                    alt=""
                    className="img-fluid"
                  />
                </figure>
                <h2>Registration Wizard</h2>
                <p>
                  Tation argumentum et usu, dicit viderer evertitur te has. Eu
                  dictas concludaturque usu, facete detracto patrioque an per,
                  lucilius pertinacia eu vel. Adhuc invidunt duo ex. Eu tantas
                  dolorum ullamcorper qui.
                </p>
                <a href="#start" className="btn_1 rounded mobile_btn">
                  Start Now!
                </a>
              </div>
              <div className="copy">© 2022 Wilio</div>
            </div>
        </div>
    )
}

export default Welcome;