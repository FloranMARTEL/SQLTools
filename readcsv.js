function decodeCSV(csvtext) {
    let tableau = csvtext.split("\r\n")
    tableau = tableau.map((ligne) => {return ligne.split(",")})

    // .shift() remouve la 1er valeur de la list et la retourne
    return {"head": tableau.shift(), "table": tableau}
}


const fs = require('fs')
fs.readFile('CSVTry.csv', (err, inputD) => {
    if (err) throw err;
    result = decodeCSV(inputD.toString());
    const head = result.head
    const table = result.table
    console.log("resultat : ",head,table)
})
