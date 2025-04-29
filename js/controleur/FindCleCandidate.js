import DAOCSV from "../model/DAO/DAOcsv.js"
import "../model/lib/ExtensionArray.js"


export default class FindCleCandidate {

    constructor(button,inputfileDOM) {
        const findkeybutton = document.querySelector(".find-key-box");
        const attributDom = findkeybutton.querySelector("input#attribut");
        const DFDom = findkeybutton.querySelector("textarea#relationDF");
        
        console.log(button)

        button.addEventListener("click", () => {
            
            const attributString = attributDom.value
            const DFString = DFDom.value

            //todo

            

        });
    }
}

