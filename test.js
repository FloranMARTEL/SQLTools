
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


Set.prototype.difference = function (set2) {
    let newSet = new Set();
    this.forEach(elem => newSet.add(elem));
    set2.forEach(elem => newSet.delete(elem));
    return newSet;
}

class DependanceFonctionnelle{
    constructor(entres,sortie){
        this.entres = entres
        this.sortie = sortie
    }

    static fermeture(elements,dependances){
        let valeur = new Set([...elements])
        let nbvaleur = 0
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


    static couvertureMinimalEtape2(dependances){

        // index depandance
        for (let iDF = 0; iDF < dependances.length; iDF++) {
    
            let copyDependances = [...dependances]
    
            let dependanceToCheck = copyDependances[iDF]//copyDependances.splice(iDF, 1)[0]
    
            //vérifie qu'il n'y a pas d'élement superflu
            for (let indexEntre = 0; indexEntre < dependanceToCheck.entres.size && dependanceToCheck.entres.size != 1 ; indexEntre++) {
                
                
                let newEntrer = new Set([...dependanceToCheck.entres])
                newEntrer.delete([...(dependanceToCheck.entres)][indexEntre])
                const resultFermeture = DependanceFonctionnelle.fermeture(newEntrer,copyDependances)
                if (new Set(dependanceToCheck.sortie).issubsetof(resultFermeture)){
                    dependances[iDF].entres.delete([...(dependanceToCheck.entres)][indexEntre])
                }
    
            }
    
        }
    
        return dependances
        
    }

    static couvertureMinimalEtape3(dependances){

        for (let iDF = 0; iDF < dependances.length; iDF++) {
    
            let copyDependances = [...dependances]
    
            let dependanceToCheck = copyDependances.splice(iDF, 1)[0]
            
            const resultFermeture = DependanceFonctionnelle.fermeture(dependanceToCheck.entres,copyDependances)
    
            if (new Set(dependanceToCheck.sortie).issubsetof(resultFermeture)){
                dependances.splice(iDF, 1)
                iDF--
            }
        }
        return dependances
    
    }


    static couvertureMinimal(dependances){

        const dependances2 = DependanceFonctionnelle.couvertureMinimalEtape2(dependances);
        const dependances3 = DependanceFonctionnelle.couvertureMinimalEtape3([...dependances2]);

        return {etape2 : dependances2, etape3 : dependances3}
    }


    static cleCandidate(attributs,dependance){
        let allexit = new Set()
        for (let iDF = 0; iDF < dependances.length; iDF++) {
            allexit.add(dependances.sortie)
        }

        elementsObligatoire = attributs - allexit 

        //todo
    }

}
//-------------------------------------------------


function cleCandidate(attributs,dependances){
    let allexit = new Set()
    let allinput = new Set()
    for (let iDF = 0; iDF < dependances.length; iDF++) {
        allexit.add(dependances[iDF].sortie)
        allinput = new Set([...allinput, ...(dependances[iDF].entres)])
        
    }

    const elementsObligatoire = attributs.difference(allexit)

    const elementsInterdi = allexit.difference(allinput)

    const clecandidates = rec(attributs,dependances,elementsObligatoire,attributs.difference(elementsObligatoire).difference(elementsInterdi))

    return clecandidates
}

function rec(attributs,dependances,elementsObligatoire,elements){

    if (elements.size == 1){
        return new Set([...elementsObligatoire,elem]) 
    }

    let result = []

    elements.forEach(elem => {
        const clepotensiel = [...elementsObligatoire,elem]
        if (DependanceFonctionnelle.fermeture(clepotensiel,dependances).equals(attributs)){
            result.push(new Set([...clepotensiel]))
        }else{
            result = [...result, ...(rec(attributs,dependances,new Set(clepotensiel),elements.difference(new Set(elem))))]
        }
    });

    return result

}


const a = new Set(["A","B","C","D"])
const a3 = new Set(["A","B","C","D","F"])
const a4 = new Set(["A","B","C"])

const d = [new DependanceFonctionnelle(new Set("A"),"B"),new DependanceFonctionnelle(new Set("B"),"C")]
const d2 = [new DependanceFonctionnelle(new Set("A"),"B"),new DependanceFonctionnelle(new Set("B"),"C"),new DependanceFonctionnelle(new Set("B"),"A")]
const d3 = [new DependanceFonctionnelle(new Set(["A","F"]),"B"),new DependanceFonctionnelle(new Set("B"),"C"),new DependanceFonctionnelle(new Set("B"),"A")]
const d4 = [new DependanceFonctionnelle(new Set(["A","B"]),"C"),new DependanceFonctionnelle(new Set("C"),"B")]
console.log(cleCandidate(a4,d4))
