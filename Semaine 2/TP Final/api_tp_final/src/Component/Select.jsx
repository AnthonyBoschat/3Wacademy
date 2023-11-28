import { useContext, useState, useEffect } from "react"
import { SelectValueContext } from "../Context/SelectValueContext"

function Select(){

    // Contexte et state //
    const {allSelectValue, setAllSelectValue, Lists, setLists, profiles, setProfiles} = useContext(SelectValueContext)
    const APIkey = process.env.REACT_APP_API_KEY;






    // Methode //

    ///////////////////////////////////////////////////
    // Fonction qui sert à générer une personne random
    ///////////////////////////////////////////////////
    const APIrequest = () => {
        fetch(`https://randomuser.me/api/?results=${allSelectValue.numberVisible}&gender=${allSelectValue.sexeValue}`)
        .then(response => response.json())
        .then(datas => { // Quand on receptionne le résultat de la requête
            let set = new Set().add("mdr la douille").delete("mdr la douille") // Douille ultime
            let map = new Map().set("users", datas.results) // MDR LA DOUILLE
            setLists(map.get("users")) // On set le state de la liste
        }).catch(error => console.error(error))
    }

    //////////////////////////////////////////////////////////////////////
    // Fonction qui se déclenche quand l'utilisateur modifie un selecteur
    //////////////////////////////////////////////////////////////////////
    const handleChange = (event) => { // On remodifie toute la définition de la requête API
        // On défini la propriété à modifier
        const props = event.target.id
        // On créé une copie du state
        const copySelectValue = {...allSelectValue}
        // On modifie cette propriété du state
        copySelectValue[props] = event.target.value
        // On set le nouveau state
        setAllSelectValue(copySelectValue)
    }






    // Hook UseEffect //


    ////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Fonction qui lance la requête API pour générer une nouvelle personne, lorsque allSelectValue est modifier
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////
    useEffect(() => {
        APIrequest()
    }, [allSelectValue])



    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Fonction qui se lance quand Lists est mis à jours
    // Sert à générer dans le state profiles, les information nécessaire à l'affichage de chaque individu
    /////////////////////////////////////////////////////////////////////////////////////////////////////////

    useEffect(() => {
        // On définie une nouvelle fonction
        // createNewProfil = une fonction pour stocker les informations d'un nouveau profil
        const createNewProfil = () => {
            // On utilise Promise.all pour attendre que toutes les promesses dans le map soient résolues
            Promise.all(
                Lists.map(data => { // Pour chaque data de Lists
                    const { latitude, longitude } = data.location.coordinates; // On récupère la latitude et longitude
                    // On return le fetch de l'API meteo
                    return (
                        // On récupère l'info meteo de la position du profil map
                        fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${latitude}&lon=${longitude}&appid=${APIkey}`)
                        .then(response => response.json())
                        .then(informationMeteo => ({ // Le return se trouve ici, dans la parenthèse jaune )
                        // On return l'objet qui correspont à un profil, sa temprature, sa photo, sa key
                            temperature: informationMeteo.main.temp,
                            photo: data.picture.large,
                            key: data.location.postcode, // i++ ?
                            firstname: data.name.first,
                            lastname: data.name.last,
                            gender: data.gender,
                        }))
                    )
                })
            )// Quand Promise.all est fini, et que toutes les promesses ont été résolu
            .then(newProfiles => { // ATTENTION, ON PEUT EVITER UN NOUVEL APPELLE API ET TRIER LES PROFIL EXISTANT, boucvle sur profil
                    setProfiles(newProfiles); // On setProfiles tout les nouveaux profiles
                }
            ) 
            .catch(error => { // S'il y a des erreurs, on les catchs ( bon là, ça fait rien de foufou )
                console.error("Erreur lors de la récupération des températures:", error);
            });
        };
        
        // On lance createNewProfil
        createNewProfil();
    }, [Lists]);
    
    const handleChangeTemp = (event) => {
        const value = event.target.value
        const copyProfil = [...profiles]
        switch(value){
            case "undefined":
                copyProfil.sort(() => Math.random() - 0.5)
                break
            case "croissant":
                copyProfil.sort((a,b) => a.temperature - b.temperature)
                break
            case "decroissant":
                copyProfil.sort((a,b) => b.temperature - a.temperature)
                break
        }
        setProfiles(copyProfil)
    }


    // Render
    return(
        <form id="select_box">
            <div>
                <label htmlFor="numberVisible">Nombre de profil : </label>
                <select onChange = {handleChange} id="numberVisible">
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                </select>
            </div>
            <div>
                <label htmlFor="sexeValue">Sexe : </label>
                <select onChange={handleChange} id="sexeValue" >
                    <option value="">Peu importe</option>
                    <option value="male">Homme</option>
                    <option value="female">Femme</option>
                </select>
            </div>
            <div>
                <label htmlFor="directionTemp">Température : </label>
                <select onChange={handleChangeTemp} id="directionTemp">
                    <option value="undefined">Peu importe</option>
                    <option value="croissant">Croissante</option>
                    <option value="decroissant">Décroissante</option>
                </select>
            </div>
        </form>
    )
}

export default Select