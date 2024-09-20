
export default class TableauTable{

    constructor(id = "#tab-exemple"){
        this.dom = document.querySelector(id)


        const thead = ["ID","NOM","Prenom","Email","Telephone"] 
        const tbody = [
        ["1","MARTEL","Floran","floranmartel@gmail.com	06","90 51 55 19"],
        ["2","LEFEBVRE","Sophie","sophie.lefebvre@gmail.com","06 12 34 56 78"],
        ["3","DUPONT","Julien","julien.dupont@gmail.com","06 23 45 67 89"],
        ["4","GIRARD","Emma","emma.girard@hotmail.com","06 34 56 78 90"],
        ["5","ROUET","Lucas","lucas.rouet@yahoo.fr","06 45 67 89 01"],
        ["6","PERRIER","Claire","claire.perrier@orange.fr","06 56 78 90 12"],
        ["7","FERRAND","Maxime","maxime.ferrand@gmail.com","06 67 89 01 23"],
        ["8","BLANC","Isabelle","isabelle.blanc@free.fr","06 78 90 12 34"],
        ["9","GONZALVES","Antonio","antonio.gonzalves@live.fr","06 89 01 23 45"],
        ]

        this.updateTableau(thead,tbody)
    }

    
    
    updateTableau(thead, tbody) {

        //clear
        const tableau = this.dom
        while (tableau.firstChild) {
          tableau.removeChild(tableau.firstChild);
        }
      
        //head
        const theadDOM = document.createElement("thead")
        let trDOM = document.createElement("tr")
        thead.forEach((element) => {
          let thDOM = document.createElement("th")
          thDOM.innerHTML = element
          trDOM.appendChild(thDOM)
        })
        theadDOM.appendChild(trDOM)
      
      
        //body
        const tbodyDOM = document.createElement("tbody")
        tbody.forEach((ligne) => {
      
          trDOM = document.createElement("tr")
          ligne.forEach((element) => {
            let tdDOM = document.createElement("td")
            tdDOM.innerHTML = element
            trDOM.appendChild(tdDOM)
          })
          tbodyDOM.appendChild(trDOM)
        })
      
      
        tableau.appendChild(theadDOM)
        tableau.appendChild(tbodyDOM)
      }
}