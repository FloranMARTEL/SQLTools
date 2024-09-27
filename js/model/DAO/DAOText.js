import DependanceFonctionnelle from "../DependanceFonctionnelle.js";

export default class DAOText{

    static TextToDF(text){
        
        //suppresion des espaces
        text = text.replace(/ /g,'')

        const listTextDF = text.split("\n")

        let listDF = []

        listTextDF.forEach(TextDF => {
            const argumentDF = TextDF.split("->")
            
            //entres
            let entres = new Set(argumentDF[0].split(","))




            //sortie
            const sortie = argumentDF[1]

            listDF.push(new DependanceFonctionnelle(entres,sortie))
        });

        return listDF
    }
}