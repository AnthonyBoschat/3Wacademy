import React from "react";

function AccountDetails({data, dispatchData, DATA_ACTIONS}){

    return(
        <div className="step">
          <h3 className="main_question">
            <strong>2/3</strong>Plase provide your account details
          </h3>
          <div className="form-group">
            <input
              required
              value={data.userName}
              type="text"
              name="user_name"
              className="form-control required"
              placeholder="User name"
              onChange={(e) => dispatchData({type:DATA_ACTIONS.UPDATE_USERNAME, payload:(e.target.value)})}
            />
          </div>
          <div className="form-group">
            <input
              required
              value={data.password1}
              className="form-control"
              type="password"
              id="password1"
              name="password1"
              placeholder="Password"
              onChange={(e) => dispatchData({type:DATA_ACTIONS.UPDATE_PASSWORD1, payload:(e.target.value)})}
            />
          </div>
          <div className="form-group">
            <input
              pattern={`^${data.password1}`}
              required
              value={data.password2}
              className="form-control"
              type="password"
              id="password2"
              name="password2"
              placeholder="Confirm Password"
              onChange={(e) => dispatchData({type:DATA_ACTIONS.UPDATE_PASSWORD2, payload:(e.target.value)})}
            />
          </div>
          <div id="pass-info" className="clearfix"></div>
        </div>
    )
}

export default AccountDetails;