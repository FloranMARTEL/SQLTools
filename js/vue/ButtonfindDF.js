export default class buttonfindDF{
    

    constructor(id){
        this.dom = document.querySelector(id)
    }

    show(){
        this.dom.style.display = "inline-block"
    }

    hide(){
        this.dom.style.display = "None"

    }


}