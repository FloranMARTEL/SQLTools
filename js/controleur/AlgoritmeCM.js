import DAOText from "../model/DAO/DAOText.js"
import DependanceFonctionnelle from "../model/DependanceFonctionnelle.js"

export default class AlgoritmeCM{

    constructor(button,textArea,boiteAffichage){

        button.addEventListener("click", () => {
            const text = textArea.value
            const allDF = DAOText.TextToDF(text)

            const newDF = DependanceFonctionnelle.couvertureMinimal(allDF)
            console.log(newDF)
        })
    }


}