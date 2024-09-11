
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

String.prototype.hexEncode = function () {
        var hex, i;

        var clePossible = "";
        for (i = 0; i < this.length; i++) {
                hex = this.charCodeAt(i).toString(16);
                clePossible += ("000" + hex).slice(-4);
        }

        return clePossible
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

function GetclePossible(base, ensemble) {
        if (ensemble.size == 0) {
                return new Set()
        }

        let clePossible = new Set()

        for (const element of ensemble) {
                let newset = new Set([...base, element])
                clePossible.add(newset)

                let newensemble = new Set([...ensemble])
                newensemble.delete(element)
                let re = GetclePossible(newset, newensemble)
                clePossible = new Set([...clePossible, ...re])
        }


        return clePossible
}

function findkey(head, table) {

        //
        let allRelation = []

        //clé posible
        let clePossible = GetclePossible(new Set(), new Set(head))
        clePossible = clePossible.clearDoublonofSet()

        clePossible = [...clePossible].sort((seta, setb) => seta.size - setb.size)

        //recherche des clé potensielle

        for (const setKey of clePossible) {

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
                        allRelation.push({source : setKey,destination : head[indexkey]})
                }
        }
        //retirer les relation inutile
        for (let index1 = 0; index1 < allRelation.length; index1++) {
                const relation1 = allRelation[index1];
                for (let index2 = index1 + 1; index2 < allRelation.length; index2++) {
                        const relation2 = allRelation[index2];
                        if ( relation1["source"].issubsetof(relation2["source"]) && relation1["destination"] == relation2["destination"]){
                                //delete allRelation[index2]
                                allRelation.splice(index2, 1)
                                index2--
                        }
                }
        }



        return allRelation

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
       AC ==> B;
       CD ==> A ; CD ==> B
*/


head2 = ["A", "B", "C"]
table2 = [
        [1, 2, 3],
        [1, 4, 4],
        [1, 2, 3],
        [2, 2, 4],
]

/* R :
       AB ==> C ;
       AC ==> B ;
       BC ==> A ;
*/

console.log(findkey(head1, table1))
console.log("----------------------------")
console.log(findkey(head2, table2))
