export default class ErrorMessage {


    constructor(id){
        this.dom = document.querySelector(id)
        this.dom.classList.add("error-message");
    }

    showError(message) {
        this.dom.innerHTML = message
        this.dom.style.display = "block"
    }

    hideError() {
        this.dom.style.display = "none"
        this.dom.innerHTML = ""
    }
}