import { useContext, useEffect, useState } from "react"
import { SelectValueContext } from "../Context/SelectValueContext"

function Show() {
    // Contexte et state
    const {profiles} = useContext(SelectValueContext);
    const APIkey = process.env.REACT_APP_API_VOICE_KEY;
    let currentAudio = false

    // Methode

    /////////////////////////////////////////////////////////////////////////
    // Fonction qui sert à lancer un nouveau son lors du clique sur la photo
    /////////////////////////////////////////////////////////////////////////
    const handleClick = async (profile) => {
      if(currentAudio){
        currentAudio.pause()
        currentAudio.currentTime = 0
      }
      let voiceGender= profile.gender.toUpperCase()
      const url = "https://api.edenai.run/v2/audio/text_to_speech"
      const option = {
          method:"POST",
          headers:{
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${APIkey}`,
          },
          body: JSON.stringify({
            show_original_response: false,
            fallback_providers: "",
            providers: "amazon",
            language: "fr",
            text: `Je m'appelle ${profile.firstname} ${profile.lastname}... et il fait ${profile.temperature} degrés`,
            option: `${voiceGender}`,
          })
      }

      fetch(url, option)
      .then(response => response.json())
      .then(data => {
        currentAudio = new Audio(data.amazon.audio_resource_url)
        currentAudio.play()
	    })
    } 

    /////////////////////////////////////////////////////////
    // Fonction qui sert à afficher un profil selon profiles
    /////////////////////////////////////////////////////////
    const render = (profile) => {
        const phrase_alt = `Photo de profile de ${profile.firstname} ${profile.lastname}`
        let classColor = null
        if(profile.temperature <= 0){classColor = "extreme_blue"}
        else if(profile.temperature > 0 && profile.temperature < 10){classColor = "blue"}
        else if(profile.temperature >= 10 && profile.temperature < 20){classColor = "beige"}
        else if(profile.temperature >= 20 && profile.temperature < 30){classColor = "orange"}
        else if(profile.temperature >= 30){classColor = "red"}
        return(
            <div className="profil" key={profile.key}>
                <div className="photoEnglobe">
                    <img onClick={() => handleClick(profile)} title={`Je m'appelle ${profile.firstname} ${profile.lastname}`} className="photoProfil" src={profile.photo} alt={phrase_alt} loading="lazy"></img>
                </div>
                <div className={`temperatureProfil ${classColor}`}>{profile.temperature}°C</div>
            </div>
        )
    }


    // Le render
    return (
      <section id="show_list">
        {profiles.map(profile => render(profile))}
      </section>
    );
  }
  
  export default Show;
  
  
  
  
  
  
  
