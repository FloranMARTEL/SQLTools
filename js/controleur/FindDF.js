import DAOCSV from "../model/DAO/DAOcsv.js"
import "../model/lib/ExtensionArray.js"


export default class FindDF {

    constructor(button,inputfileDOM) {
        const block = document.querySelector("#block-deroulant")

        button.dom.addEventListener("click", () => {
            let fl_files = inputfileDOM.files; // JS FileList object

            // use the 1st file from the list
            let fl_file = fl_files[0];

            let reader = new FileReader(); // built in API

            // Closure to capture the file information.
            reader.onload = (e) => {
                const table = DAOCSV.ReadTable(e.target.result)
                const relation = table.findFonctionalDemandance()

                const relatioMaped = relation.groupby((element) => element.source) //(relation, (element) => element.source)

                //clear block
                
                while (block.firstChild) {
                    block.removeChild(block.firstChild);
                }

                //create table dépendance fonctionelle
                const divtab = document.createElement("div")
                relatioMaped.forEach(relationGroup => {
                    //création de la div
                    let sousdiv = document.createElement("div")
                    relationGroup.forEach((element) => {
                        //création du span
                        let span = document.createElement("span")
                        let source = ""
                        element.source.forEach((e) => {
                            source += e
                        })
                        span.innerHTML = source + " → " + element.destination
                        sousdiv.appendChild(span)

                    })
                    divtab.appendChild(sousdiv)
                });


                divtab.classList.add("relation-table")
                block.appendChild(divtab)

                //calcule du décalage
                const decalage = divtab.clientHeight + 60 * 2 //( padding 60 )

                //applique le décalage
                block.style.bottom = "-" + decalage.toString() + "px"
                const parentblock = document.querySelector(".block.fichier")
                parentblock.style.marginBottom = decalage.toString() + "px"


            };

            // Read the file as text.
            reader.readAsText(fl_file);


        });
    }
}

