function rec(base,ensemble){



        if (ensemble.size == 0){
                return new Set()
        }

        let result = []
        ensemble.forEach((element) => {
                
                newset = new Set([...base,element])
                result.push(newset)
                console.log("I",result)

                newensemble = new Set(...ensemble)
                newensemble.delete(element)
                result.push.apply(rec(newset,newensemble))

        })

        return result
}


function GetSousEnsemble(base,ensemble){
        console.log(base,ensemble)
        if (ensemble.size == 0){
                return new Set()
        }

        let result = []
        ensemble.forEach((element) => {
                
                let newset = new Set([...base,element])
                //console.log("newset", newset)
                result.push(newset)
                //console.log("I",result)

                let newensemble = new Set(...ensemble)
                console.log("newensemble",newensemble)
                newensemble.delete(element)
                result.push.apply(GetSousEnsemble(newset,newensemble))

        })

        return result

}

function findkey(head, table){
        return GetSousEnsemble(new Set(),new Set(head))

}

head1 = ["A","B","C","D"]
table1 = [
        [1,2,3,4],
        [1,4,4,4],
        [2,3,6,9],
        [7,5,4,9],
        ]


/* R : A ==> D ;
       B ==> A ; B ==> C ; B ==> D ;
       C ==> A ; C ==> B ; C ==> D ;
       D == 0
       AD == 0
*/


head2 = ["A","B","C"]
table2 = [
        [1,2,3],
        [1,4,4],
        [1,2,3],
        [2,2,4],
        ]

/* R : A == 0 ;
       B == 0
       C == 0
       AB ==> C ;
       AC ==> B ;
       BC ==> A ;
*/

console.log(findkey(head2,table2))
