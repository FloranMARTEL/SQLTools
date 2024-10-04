//import
//vue
import TableauTable from './vue/TableauTable.js';
import ErrorMessage from './vue/Errormessage.js';
import InputFile from './vue/InputFile.js';
import buttonfindDF from './vue/ButtonfindDF.js';

//controleur
import Getfiles from './controleur/Getfiles.js';
import FindDF from './controleur/FindDF.js';
import AlgoritmeCM from './controleur/AlgoritmeCM.js';



//load

//tableau
const tableau = new TableauTable("#tab-exemple")

//errormessage
const errormessage = new ErrorMessage(".generer-relation .error-message")

//inputfile
const inputfile = new InputFile("#csvFile")
const buttonDF = new buttonfindDF("#findrelation")

//input CM

///event

//file
new Getfiles(inputfile,errormessage,buttonDF,tableau)
new FindDF(buttonDF,inputfile.dom)

//CM
new AlgoritmeCM(document.querySelector("#findCM"),document.querySelector("#inputDF"),document.querySelector(".couverture-minimal > div > div"),"assets/image/fleche.png")

//endload