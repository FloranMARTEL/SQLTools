import "./lib/ExtensionSet.js"

export default class DependanceFonctionnelle{
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
        console.log(dependances2)
        const dependances3 = DependanceFonctionnelle.couvertureMinimalEtape3([...dependances2]);
        console.log(dependances2)

        return {etape2 : dependances2, etape3 : dependances3}
    }

}