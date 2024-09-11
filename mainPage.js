
console.log("start")


document.querySelector('#bb').addEventListener('click', (evt) => {
  let inputfile = document.querySelector("#test")
  let fl_files = inputfile.files; // JS FileList object

  // use the 1st file from the list
  let fl_file = fl_files[0];

  let reader = new FileReader(); // built in API

  // Closure to capture the file information.
  reader.onload = (e) => {
    result = decodeCSV(e.target.result)
    relation = findkey(result.head,result.table)
    console.log(relation)
  };

  // Read the file as text.
  reader.readAsText(fl_file);

});


