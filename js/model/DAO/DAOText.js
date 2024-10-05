import DependanceFonctionnelle from "../DependanceFonctionnelle.js";

export default class DAOText {

    static TextToDF(text) {

        //suppresion des espaces
        text = text.replace(/ /g, '')

        const listTextDF = text.split("\n")

        let listDF = []

        listTextDF.forEach(TextDF => {
            if (TextDF == "") {
                return
            }

            const argumentDF = TextDF.split("->")

            if (argumentDF.length != 2) {
                return
            }

            //entres
            const entres = new Set(argumentDF[0].split(","))

            for (let i = 0; i < entres.size; i++) {
                if ([...entres][i] == "") {
                    return
                }
            }
            entres.equals(new Set(''))


            //sortie
            const sortisplit = argumentDF[1].split(",")
            
            for (let i = 0; i < sortisplit.length; i++) {
                //vérification que les sorties soit correte
                if (sortisplit[i] == "") {
                    return
                }
            }

            //ajout des dépandance
            for (let i = 0; i < sortisplit.length; i++) {
                listDF.push(new DependanceFonctionnelle(entres, sortisplit[i]))
            }
        });

        return listDF
    }
}