
function GetSousEnsemble(base, ensemble) {
        if (ensemble.size == 0) {
                return new Set()
        }

        let result = new Set()

        for (const element of ensemble) {
                let newset = new Set([...base, element])
                result.add(newset)

                let newensemble = new Set([...ensemble])
                newensemble.delete(element)
                let re = GetSousEnsemble(newset, newensemble)
                result = new Set([...result, ...re])
        }


        return result
}

function setEqual(set1, set2) {
        return set1.size === set2.size && [...set1].every(val => set2.has(val));
}

function clearDoublonofSet(set) {
        for (let index = 0; index < set.size; index++) {
                const ensemble = [...set][index];
                for (let index2 = index + 1; index2 < set.size; index2++) {
                        const ensemble2 = [...set][index2];
                        if (index != index2 && setEqual(ensemble, ensemble2)) {
                                set.delete(ensemble2)
                        }
                }
        }
        return set
}

class HashSet {
        constructor() {
                this.element = []
        }

        add(key, value) {
                if (this.get(key) == null) {
                        this.element.push([key, value])
                        return true
                }
                return false
        }

        update(key, value) {
                this.element.forEach((element) => {
                        if (element[0] == key) {
                                element[1] = value
                                return true
                        }
                })
                return false
        }

        get(key) {
                console.log("aaa2", this.element)
                for (const value of this.element) {
                        let val1 = value[0]
                        console.log("cc", val1 === key)
                        if (val1 == key) {
                                return value[1]
                        }
                }
                return null
        }
}

String.prototype.hexEncode = function () {
        var hex, i;

        var result = "";
        for (i = 0; i < this.length; i++) {
                hex = this.charCodeAt(i).toString(16);
                result += ("000" + hex).slice(-4);
        }

        return result
}
String.prototype.hexDecode = function () {
        var j;
        var hexes = this.match(/.{1,4}/g) || [];
        var back = "";
        for (j = 0; j < hexes.length; j++) {
                back += String.fromCharCode(parseInt(hexes[j], 16));
        }

        return back;
}



function findkey(head, table) {

        //clé posible
        let result = GetSousEnsemble(new Set(), new Set(head))
        result = clearDoublonofSet(result)

        result = [...result].sort((seta, setb) => seta.size - setb.size)

        //recherche des clé potensielle

        for (const setKey of result) {

                //index des clé
                let keysIndex = []
                for (const keyname of setKey) {
                        keysIndex.push(head.indexOf(keyname))
                }

                let relation = {}
                //index des autres élément
                for (const keyname of head) {
                        if (!setKey.has(keyname)) {
                                relation[head.indexOf(keyname)] = {}
                        }
                }


                table.forEach(ligne => {
                        //crée la clé
                        let key = []
                        keysIndex.forEach((indexkey) => {
                                key.push(ligne[indexkey].toString().hexEncode())
                        })

                        for (const indexkey in relation) {
                                if (relation[indexkey][key] == undefined){
                                        relation[indexkey][key] = ligne[indexkey]
                                }else if(relation[indexkey][key] != ligne[indexkey]){
                                        delete relation[indexkey]
                                }   
                        }
                });

                for (const indexkey in relation) {
                        console.log(setKey,"==>",head[indexkey])
                }
        }

}

head1 = ["A", "B", "C", "D"]
table1 = [
        [1, 2, 3, 4],
        [1, 4, 4, 4],
        [2, 3, 6, 9],
        [7, 5, 4, 9],
]


/* R : A ==> D ;
       B ==> A ; B ==> C ; B ==> D ;
       C ==> A ; C ==> B ; C ==> D ;
       D == 0
       AD == 0
*/


head2 = ["A", "B", "C"]
table2 = [
        [1, 2, 3],
        [1, 4, 4],
        [1, 2, 3],
        [2, 2, 4],
]

/* R : A == 0 ;
       B == 0
       C == 0
       AB ==> C ;
       AC ==> B ;
       BC ==> A ;
*/

console.log(findkey(head1, table1))

console.log(findkey(head2, table2))
