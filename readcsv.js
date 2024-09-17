function decodeCSV(csvtext) {
    let tableau = csvtext.split("\r\n")
    tableau = tableau.map((ligne) => {return ligne.split(",")})

    // .shift() remouve la 1er valeur de la list et la retourne
    return {"head": tableau.shift(), "table": tableau}
}