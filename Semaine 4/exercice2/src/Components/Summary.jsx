import React from "react";

function Summary({data}){

    return(
        <div className="submit step">
          <h3 className="main_question">
            <strong>3/3</strong>Summary
          </h3>
          <div className="summary">
            <ul>
              <li>
                <strong>1</strong>
                <h5>Personal Details</h5>
                <ul>
                  <li>
                    <label>First Name</label>:{' '}
                    <span id="first_name">{data.firstName}</span>
                  </li>
                  <li>
                    <label>Last Name</label>:{' '}
                    <span id="last_name">{data.lastName}</span>
                  </li>
                  <li>
                    <label>Email</label>: <span id="email">{data.email}</span>
                  </li>
                  <li>
                    <label>Country</label>: <span id="country">{data.adress.country.name}</span>
                  </li>
                  <li>
                    <label>State</label>: <span id="state"></span>
                  </li>
                  <li>
                    <label>City</label>: <span id="city"></span>
                  </li>
                </ul>
              </li>
              <li>
                <strong>2</strong>
                <h5>Account Details</h5>
                <ul>
                  <li>
                    <label>User Name</label>:{' '}
                    <span id="user_name"></span>
                  </li>
                  <li>
                    <label>Password</label>:{' '}
                    <span id="password"></span>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
    )
}

export default Summary;