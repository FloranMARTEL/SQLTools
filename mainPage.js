
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


document.querySelector('#findrelation').addEventListener('click', () => {
  let inputfile = document.querySelector("#csvFile")
  let fl_files = inputfile.files; // JS FileList object

  // use the 1st file from the list
  let fl_file = fl_files[0];

  let reader = new FileReader(); // built in API

  // Closure to capture the file information.
  reader.onload = (e) => {
    result = decodeCSV(e.target.result)
    relation = findkey(result.head,result.table)
    console.log(relation)
    
    relatioMaped = groupBy(relation, (element) => element.source)
    console.log("tes",relatioMaped)

    const block = document.querySelector("#block-deroulant")

    const div1 = document.createElement("div")
    relatioMaped.forEach(relationGroup => {
      let divtemp = document.createElement("div")
      relationGroup.forEach((element) =>{
        let span =  document.createElement("span")
        let source = ""
        element.source.forEach((e) =>{
          console.log(e)
          source += e
        })
        span.innerHTML = source + " → " + element.destination
        divtemp.appendChild(span) 
      })
      div1.appendChild(divtemp) 
    });

    div1.classList.add("relation-table")
    block.appendChild(div1)

    block.style.bottom ="-200px"


  };

  // Read the file as text.
  reader.readAsText(fl_file);

});


