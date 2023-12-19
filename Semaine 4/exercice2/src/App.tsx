import { FC, useRef, useState } from 'react';

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
  const [step, setStep] = useState(0)
  const formRef = useRef()
  const [BouttonDisabled, setBouttonDisabled] = useState(false)


  const handleChangeStep = () => {
    const formReference = formRef.current as HTMLFormElement
    if(formReference){
      if(formReference.reportValidity()){

        if(step != 1){
          setStep((current) => (++current))
          setBouttonDisabled(false)
        }

        else{
          if(data.password1 === data.password2){
            dispatchData({type:DATA_ACTIONS.SAVEINFO, payload:{userName:data.userName, password:data.password1}})
            setStep((current) => (++current))
            setBouttonDisabled(true)
          }
        }  
      }
    }
  }

  const handlePreviousStep = () => {
    if(step != 0){
      setStep((current) => (current - 1))
      setBouttonDisabled(false)
    }
  }
  

  const handleSubmit = () => {
    console.log(data)
    window.alert("Vous venez d'envoyer votre formulaire")
  }
  
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
              <form onSubmit={handleSubmit} ref={formRef} id="wrapped">
                <input id="website" name="website" type="text" />
                <div id="middle-wizard">
                  {step === 0 && (<Details data={data} dispatchData={dispatchData} DATA_ACTIONS={DATA_ACTIONS} />)}
                  {step === 1 && (<AccountDetails data={data} dispatchData={dispatchData} DATA_ACTIONS={DATA_ACTIONS} />)}
                  {step === 2 && (<Summary data={data} />)}
                </div>
                <BottomButtons BouttonDisabled={BouttonDisabled} handlePreviousStep={handlePreviousStep} handleChangeStep={handleChangeStep} />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
