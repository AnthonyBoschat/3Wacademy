import { FC } from 'react';

import './style.css';
import './menu.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap';
import Loader from "./Components/Loader.jsx"
import Welcome from "./Components/Welcome.jsx"
import Details from "./Components/Details.jsx"
import AccountDetails from "./Components/AccountDetails.jsx"
import Summary from "./Components/Summary.jsx"
import BottomButtons from "./Components/BottomButtons.jsx"
import UseData from "./CustomHook/UseData.jsx"

export const App: FC<{ name: string }> = ({ name }) => {

  const {data, DATA_ACTIONS, dispatchData} = UseData()

  return (
    <>
      <Loader />
      <div className="container-fluid full-height">
        <div className="row row-height">
        <Welcome />
          <div className="col-lg-6 content-right" id="start">
            <div id="wizard_container">
              <div id="top-wizard">
                <div id="progressbar"></div>
              </div>
              <form id="wrapped">
                <input id="website" name="website" type="text" />
                <div id="middle-wizard">
                  <Details data={data} dispatchData={dispatchData} DATA_ACTIONS={DATA_ACTIONS} />
                  <AccountDetails data={data} dispatchData={dispatchData} DATA_ACTIONS={DATA_ACTIONS} />
                  <Summary data={data} />
                </div>
                <BottomButtons />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
