import DAOCSV from "../model/DAO/DAOcsv.js"
import "../model/lib/ExtensionArray.js"

import DependanceFonctionnelle from "../model/DependanceFonctionnelle.js";
import DAOText from "../model/DAO/DAOText.js";

export default class FindCleCandidate {

    constructor(button,inputfileDOM) {
        const findkeybutton = document.querySelector(".find-key-box");
        const attributDom = findkeybutton.querySelector("input#attribut");
        const DFDom = findkeybutton.querySelector("textarea#relationDF");
        
        console.log(button)

        button.addEventListener("click", () => {
            
            const attributString = attributDom.value
            const DFString = DFDom.value

            const attributSet =  new Set(attributString.split(","))
            const listDF = DAOText.TextToDF(DFString)

            console.log(attributSet)
            console.log(listDF)

            const keysCandidat = DependanceFonctionnelle.cleCandidate(attributSet,listDF)

            console.log("candidate",keysCandidat)



            this.generateRadioButton(keysCandidat)

        });
    }

    generateRadioButton(listSetCandidate){

        const box = document.querySelector(".key_proposition")
        let div = null
        listSetCandidate.forEach((element,index) => {


            const textset = [...element].join(",")
            const id = "radioclebutton"+index

            console.log(textset)
            div = document.createElement("div");
            const label = document.createElement("label");
            label.setAttribute("for",id)
            label.innerText = textset

            const radioButton = document.createElement("input")
            radioButton.setAttribute("type","radio");
            radioButton.setAttribute("name","choixCle");
            radioButton.setAttribute("Value",textset);
            radioButton.setAttribute("id",id);

            div.appendChild(radioButton)
            div.appendChild(label)
        });

        box.appendChild(div)

        console.log("fin")

    }

}

