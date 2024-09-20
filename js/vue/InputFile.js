export default class InputFile{

    constructor(id){
        this.dom = document.querySelector(id)
        this.text = document.querySelector(id+ " ~ span")

    }

    resetText(){
        this.text.innerHTML = "Selectioner mon fichier"
        this.text.style.color = "var(--black)"
    }

    updateText(text) {
        this.text.innerHTML = text
        this.text.style.color = "var(--green)"
    }
}