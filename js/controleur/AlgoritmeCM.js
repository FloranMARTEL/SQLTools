import DAOText from "../model/DAO/DAOText.js"
import DependanceFonctionnelle from "../model/DependanceFonctionnelle.js"

export default class AlgoritmeCM{

    constructor(button,textArea,boiteAffichage,sourceimage){

        button.addEventListener("click", () => {           

            const text = textArea.value
            const allDF = DAOText.TextToDF(text)

            const result = DependanceFonctionnelle.couvertureMinimal(allDF)
            const etape2DF = result.etape2
            const newDF = result.etape3


            //clear element
            for(let i = boiteAffichage.children.length-1 ; i >= 0; i--){

                if (boiteAffichage.children[i].id != "inputDF") {
                    boiteAffichage.removeChild(boiteAffichage.children[i]);
                }
            }



            //create interface
            const arrow1 = document.createElement("img")
            const arrow2 = document.createElement("img")
            arrow1.src = sourceimage
            arrow2.src = sourceimage

            const etape2Div = document.createElement("div")
            etape2Div.innerHTML = this.#generateTextResult(etape2DF)

            const resultDiv = document.createElement("div")
            resultDiv.innerHTML = this.#generateTextResult(newDF)

            boiteAffichage.appendChild(arrow1)
            boiteAffichage.appendChild(etape2Div)
            boiteAffichage.appendChild(arrow2)
            boiteAffichage.appendChild(resultDiv)

            //animation css TODO pas responsive
            document.querySelector(".couverture-minimal>div").style.width = "742px"


        })
        
    }

    #generateTextResult(allDF){

        let text = ""

        allDF.forEach(df => {
            let entres = ""

            for (const value of df.entres) {
                entres += value+","

            }

            entres = entres.slice(0, -1)

            


            text += entres + " → " + df.sortie
            text += "<br>"
            
        });

        return text
    }


}