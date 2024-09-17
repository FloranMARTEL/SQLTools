
console.log("start")

function groupBy(list, keyGetter) {
  const map = new Map();
  list.forEach((item) => {
    const key = keyGetter(item);
    const collection = map.get(key);
    if (!collection) {
      map.set(key, [item]);
    } else {
      collection.push(item);
    }
  });
  return map;
}
//event litener
let inputfile = document.querySelector("#csvFile")
let findDepandaceButton = document.querySelector('#findrelation')

//text
let textInputFile = document.querySelector('#csvFile ~ span')



/* event bouton dépandance fonctionnel*/
findDepandaceButton.addEventListener('click', () => {
  let fl_files = inputfile.files; // JS FileList object

  // use the 1st file from the list
  let fl_file = fl_files[0];

  let reader = new FileReader(); // built in API

  // Closure to capture the file information.
  reader.onload = (e) => {
    result = decodeCSV(e.target.result)
    relation = findkey(result.head, result.table)

    relatioMaped = groupBy(relation, (element) => element.source)

    const block = document.querySelector("#block-deroulant")
    while (block.firstChild) {
      block.removeChild(block.firstChild);
    }

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

    //décalage (#TODO calculer le décalage)
    block.style.bottom = "-200px"
    parentblock = document.querySelector(".block.fichier")
    parentblock.style.marginBottom = "200px"


  };

  // Read the file as text.
  reader.readAsText(fl_file);

});

/*message d'erreur*/

const errorMessageFile = document.querySelector(".generer-relation .error-message")

function showError(message){
  errorMessageFile.innerHTML = message
  errorMessageFile.style.display = "block"
}

function hideError(){
  errorMessageFile.style.display = "none"
  errorMessageFile.innerHTML = ""
}

/*selection du fichier*/

inputfile.addEventListener("change",() => {
  const files = inputfile.files

  if (files.length > 1){
    showError("il n'y a que les 1er fichier qui est pris en compte")
  }
  hideError()


  if (files.length == 0){
    textInputFile.innerHTML = "Selectioner mon fichier"
    findDepandaceButton.style.display = "None"
  }else{
    const file = files[0]
    if (file.type != "text/csv"){
      showError("le fichier n'est pas au format .csv")
      textInputFile.innerHTML = "Selectioner mon fichier"
      findDepandaceButton.style.display = "None"
      return
    }
    textInputFile.innerHTML = file.name
    textInputFile.style.color = "var(--green)"
    findDepandaceButton.style.display = "inline-block"
  }
  
})

