import Table from "../Table.js" 

export default class DAOCSV{

    static ReadTable(csvtext) {
        let tableau = csvtext.split("\r\n")
        tableau = tableau.map((ligne) => {return ligne.split(",")})
    
        // .shift() remouve la 1er valeur de la list et la retourne
        return new Table( tableau.shift(), tableau)
    }
}