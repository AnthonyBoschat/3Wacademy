import React, {} from "react";

export default function useAnimation(){

    const injectStyleForRefInTimeOut = (array) => {
        for(let i = 0; i<array.length; i++){
            setTimeout(() => {
                const element = array[i].ref
                const style = array[i].style
                Object.assign(element, style)
            }, array[i].delay);
        }
    }

    const injectClassAnimationForRefInTimeOut = (array) => {
        for(let i = 0; i<array.length; i++){
            setTimeout(() => {
                const element = array[i].ref
                element.add(array[i].class)
            }, array[i].delay);
        }
    }

    return{injectStyleForRefInTimeOut, injectClassAnimationForRefInTimeOut}
}