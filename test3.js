
console.log("start")

const bouton = document.querySelector('#bb')
let i  = document.querySelector('#test')

bouton.addEventListener("click", () => {
  console.log(document.querySelector('#test').files)
  new FileReader()
  
})

//https://developer.mozilla.org/en-US/docs/Web/API/File_API/Using_files_from_web_applications
//https://stackoverflow.com/questions/16505333/get-the-data-of-uploaded-file-in-javascript