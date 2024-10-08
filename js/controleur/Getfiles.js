//import
import DAOCSV from "../model/DAO/DAOcsv.js"


export default class Getfiles {

    constructor(input,errormessage,buttonfindDF,tableau) {


        input.dom.addEventListener("change", () => {
            const files = input.dom.files

            //plus d'un fichier
            if (files.length > 1) {
                errormessage.showError("il n'y a que les 1er fichier qui est pris en compte")
            }
            errormessage.hideError()

            //pas de fichier
            if (files.length == 0) {
                input.resetText()
                buttonfindDF.hide()

            } else {
                const file = files[0]
                //si le fichier n'est pas un csv
                if (file.type != "text/csv") {
                    errormessage.showError("le fichier n'est pas au format .csv")
                    input.resetText()
                    buttonfindDF.hide()
                    return
                }

                

                let reader = new FileReader()

                reader.onload = (e) => {
                    let update = false
                    let table
                    try{
                        table = DAOCSV.ReadTable(e.target.result)
                        update = true
                    }
                    catch (e){
                        errormessage.showError(e.message)
                        input.resetText()
                        buttonfindDF.hide()
                    }
                    if (update){
                        input.updateText(file.name)
                        buttonfindDF.show()
                        tableau.updateTableau(table.head, table.body)
                    }
                }

                reader.readAsText(file);

            }

        })
    }
}