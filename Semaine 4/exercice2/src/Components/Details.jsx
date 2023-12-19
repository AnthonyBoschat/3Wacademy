import React, {useState} from "react";

function Details({data, dispatchData, DATA_ACTIONS}){
  
    const [pays, setPays] = useState(false)

    const generatePaysForm = (pays) => {
      return(
        <option key={pays.population} value={pays.name.common}>{pays.name.common}</option>
      )
    }


    return(
        <div className="step">
          <h3 className="main_question">
            <strong>1/3</strong>Please fill with your details
          </h3>
          <div className="form-group">
            <input
              value={data.firstName}
              type="text"
              name="first_name"
              className="form-control required"
              placeholder="First Name"
              onChange={(e) => dispatchData({type:DATA_ACTIONS.UPDATE_FIRSTNAME, payload:(e.target.value)})}
            />
          </div>
          <div className="form-group">
            <input
            value={data.lastName}
              type="text"
              name="last_name"
              className="form-control required"
              placeholder="Last Name"
              onChange={(e) => dispatchData({type:DATA_ACTIONS.UPDATE_LASTNAME, payload:(e.target.value)})}
            />
          </div>
          <div className="form-group">
            <input
              value={data.email}
              type="email"
              name="email"
              className="form-control required"
              placeholder="Your Email"
              onChange={(e) => dispatchData({type:DATA_ACTIONS.UPDATE_EMAIL, payload:(e.target.value)})}
            />
          </div>


          <div className="form-group">
            <select
              className="wide required form-control"
              name="country"
              onChange={async (e) => {
                dispatchData({type:DATA_ACTIONS.UPDATE_COUNTRY, payload:(e.target.value)})
                if(e.target.value != ""){
                  const response = await fetch(`https://restcountries.com/v3.1/region/${e.target.value}`, {
                  method: 'GET',
                  });
                  const countryData = await response.json()
                  setPays(countryData)
                }else{
                  setPays(false)
                }
              }
              }>
              <option value="">-- Régions --</option>
              <option value="Europe">Europe</option>
              <option value="Asia">Asia</option>
              <option value="North America">North America</option>
              <option value="South America">South America</option>
              <option value="Oceania">Oceania</option>
            </select>
          </div>
          {pays && (
            <div className="form-group">
            <select
              className="wide required form-control"
              name="pays"
              onChange={(e) => dispatchData({type:DATA_ACTIONS.UPDATE_PAYS, payload:(e.target.value)})}
            >
              <option value="">-- Pays --</option>
              {pays.map(pays => generatePaysForm(pays))}
            </select>
          </div>
          )}
          
          <div className="form-group terms">
            <label className="container_check">
              Please accept our{' '}
              <a
                href="#"
                data-bs-toggle="modal"
                data-bs-target="#terms-txt"
              >
                Terms and conditions
              </a>
              <input
                type="checkbox"
                name="terms"
                value="Yes"
                className="required"
                onChange={() => dispatchData({type:DATA_ACTIONS.UPDATE_POLITICS})}
              />
              <span className="checkmark"></span>
            </label>
          </div>
        </div>
    )
}

export default Details;