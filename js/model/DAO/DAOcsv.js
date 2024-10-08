import Table from "../Table.js"
import "../lib/ExtensionArray.js"

export default class DAOCSV{

    static ReadTable(csvtext) {
        let tableau = csvtext.split("\r\n")
        tableau = tableau.map((ligne) => {return ligne.split(",")})

        //vérification du CSV

        if (tableau[0].equals([""])){
            //erreur
            console.log("erreur")
        }

        //suprimer la dernière ligne si elle est vide
        if (tableau[tableau.length-1].equals([""])){
            tableau.splice(tableau.length-1, 1)
        }

        const nbcolone = tableau[0].length

        for (let lin = 0; lin < tableau.length; lin++) {

            //vérifie le nombre de colone
            if (tableau[lin].length != nbcolone){
                //erreur
                throw new Error("Les colones ne sont pas conforme")
            }
        }
    
        // .shift() remouve la 1er valeur de la list et la retourne
        return new Table( tableau.shift(), tableau)
    }
}