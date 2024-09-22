class DependanceFonctionnelle{
    constructor(entres,sortie){
        this.entres = entres
        this.sortie = sortie
    }

}/////
Set.prototype.equals = function(set) {
    return this.size === set.size && [...this].every(val => set.has(val));
}

Set.prototype.issubsetof = function (set) {
    return [...this].every(val => set.has(val));
}

Set.prototype.clearDoublonofSet = function () {
    for (let index = 0; index < this.size; index++) {
            const ensemble = [...this][index];
            for (let index2 = index + 1; index2 < this.size; index2++) {
                    const ensemble2 = [...this][index2];
                    if (index != index2 && ensemble.equals(ensemble2)) {
                            this.delete(ensemble2)
                    }
            }
    }
    return this
}
/////


function fermeture(elements,dependances){
    let valeur = elements
    nbvaleur = 0
    while (nbvaleur < valeur.size) {
        nbvaleur = valeur.size

        dependances.forEach(dependance => {

            if (! new Set(dependance.sortie).issubsetof(valeur)){
                if (dependance.entres.issubsetof(valeur)){
                    valeur.add(dependance.sortie)
                }
            }

        })

    }

    return valeur
}




let input1 = [new DependanceFonctionnelle(new Set("A"),"F"),
    new DependanceFonctionnelle(new Set(["A","B"]),"C"),
    new DependanceFonctionnelle(new Set("B"),"C"),
    new DependanceFonctionnelle(new Set("A"),"F")
]

console.log(fermeture(new Set("A"),input1))






function couvertureMinimalEtape2(dependances){

    // index depandance
    for (let iDF = 0; iDF < dependances.length; iDF++) {

        let copyDependances = [...dependances]

        let dependanceToCheck = copyDependances.splice(iDF, 1)

        //faire de la récusion TODO
        for (let indexEntre = 0; indexEntre < dependanceToCheck.entres.size ; indexEntre++) {

            newEntrer = new Set([...dependanceToCheck.entres]).delete(dependanceToCheck.entres[indexEntre])
            resultFermeture = fermeture(newEntrer,copyDependances)
            
            if new Set(dependanceToCheck.sortie).issubsetof(resultFermeture)




        }



        // const source = dependance.entres
        // if (source.size > 1){

        //     for (let index = 0; index < source.size; index++) {

                
        //     }
                
        // }
    }
    
}

function couvertureMinimalEtape3(dependances){
    
}

function couvertureMinimalEtape4(dependances){
    
}


function couvertureMinimal(dependances){

    return couvertureMinimalEtape2(dependances)

}


let input = [new DependanceFonctionnelle(new Set("A"),"C"),
    new DependanceFonctionnelle(new Set(["A","B"]),"C"),
    new DependanceFonctionnelle(new Set("B"),"C"),
    new DependanceFonctionnelle(new Set("A"),"C")
]

let res = couvertureMinimal(input)
console.log(res)