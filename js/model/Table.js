import "./lib/ExtensionSet.js"
import "./lib/ExtensionString.js"

export default class Table{

    constructor(head,body){
        this.head = head
        this.body = body
    }

    findFonctionalDemandance(){

        //
        let alldf = []

        //source de dependance possible
        let sourcePossible = this.#GetclePossible(new Set(), new Set(this.head))
        sourcePossible = sourcePossible.clearDoublonofSet()

        sourcePossible = [...sourcePossible].sort((seta, setb) => seta.size - setb.size)

        //recherche des dependance potensielle

        for (const setSource of sourcePossible) {

                //index des source
                let sourcesIndex = []
                for (const source of setSource) {
                    sourcesIndex.push(this.head.indexOf(source))
                }
                
                //depandance fonctionelle
                let df = {}
                //index des autres élément
                for (const keyname of this.head) {
                        if (!setSource.has(keyname)) {
                                df[this.head.indexOf(keyname)] = {}
                        }
                }


                this.body.forEach(ligne => {
                        //crée la clé
                        let key = []
                        sourcesIndex.forEach((indexSource) => {
                                key.push(ligne[indexSource].toString().hexEncode())
                        })

                        for (const indexkey in df) {
                                if (df[indexkey][key] == undefined){
                                        df[indexkey][key] = ligne[indexkey]
                                }else if(df[indexkey][key] != ligne[indexkey]){
                                        delete df[indexkey]
                                }   
                        }
                });

                for (const indexkey in df) {
                        alldf.push({source : setSource,destination : this.head[indexkey]})
                }
        }
        //retirer les df inutile
        for (let index1 = 0; index1 < alldf.length; index1++) {
                const df1 = alldf[index1];
                for (let index2 = index1 + 1; index2 < alldf.length; index2++) {
                        const df2 = alldf[index2];
                        if ( df1["source"].issubsetof(df2["source"]) && df1["destination"] == df2["destination"]){
                                //delete alldf[index2]
                                alldf.splice(index2, 1)
                                index2--
                        }
                }
        }



        return alldf
    }

    #GetclePossible(base, ensemble) {
        if (ensemble.size == 0) {
                return new Set()
        }

        let clePossible = new Set()

        for (const element of ensemble) {
                let newset = new Set([...base, element])
                clePossible.add(newset)

                let newensemble = new Set([...ensemble])
                newensemble.delete(element)
                let re = this.#GetclePossible(newset, newensemble)
                clePossible = new Set([...clePossible, ...re])
        }


        return clePossible
}

    
}