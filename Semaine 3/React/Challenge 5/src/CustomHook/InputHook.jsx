import React, {} from "react";
import { ACTIONS } from "../Reducer/ReducerStore";

export default function inputHook(formParameter=null){
    
    const colorList = [
        {englishName:"black", frenchName:"Noir"},
        {englishName:"red", frenchName:"Rouge"},
        {englishName:"blue", frenchName:"Bleu"},
        {englishName:"green", frenchName:"Vert"},
    ]

    const policeList = [
        {policy:"Arial"},
        {policy:"Comic Sans MS"},
        {policy:"Verdana"},
        {policy:"Times New Roman"},
        {policy:"Georgia"},
        {policy:"Trebuchet MS"}
    ]

    const sizeList = [
        {size:"10"},
        {size:"11"},
        {size:"12"},
        {size:"13"},
        {size:"14"},
        {size:"15"},
        {size:"16"},
        {size:"17"},
        {size:"18"},
        {size:"19"},
        {size:"20"},
    ]

    const formulaireInputsList = [
        {id:1, name: "inputUtilisateur", type:"text", description: "Saisir un texte", action: ACTIONS.CHANGE_TEXT, values: formParameter.text},
        {id:2, name: "policeText", type:"select", description: "Police du texte", action: ACTIONS.CHANGE_POLICY, valueToShow:"policy", values:policeList},
        {id:3, name: "colorText", type:"select", description: "Couleur du texte", action: ACTIONS.CHANGE_COLOR, valueToSave:"englishName", valueToShow:"frenchName", values:colorList},
        {id:4, name: "sizeText", type:"select", description: "Taille du texte", action : ACTIONS.CHANGE_SIZE, valueToShow:"size" , values: sizeList},
    ]


    const generateInputForThisType = (objet, dispatch) => {
        switch(objet.type){
            case "text":
                return <textarea required onChange={(event) => dispatch({type:objet.action, payload:event.currentTarget.value})} type={objet.type} value={objet.values}></textarea>


            case "select":
                return(
                    <select onChange={(event) => dispatch({type:objet.action, payload:event.currentTarget.value})} name={objet.name} id={objet.name}>
                        {objet.values.map(value => <option key={value[objet.valueToShow]} value={value[objet.valueToSave]}>{value[objet.valueToShow]}</option>)}
                    </select>
                )
        }
    }


    const generateInput = (input, dispatch) => {
        const typeInput = generateInputForThisType(input, dispatch)

        return(
            <div className="inputChamp" key={input.id}>
                <label htmlFor={input.name}>{input.description}</label>
                {typeInput}
            </div>
        )
    }

    return{formulaireInputsList, generateInput}
}