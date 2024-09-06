
function findkey(head, table){

}

head1 = [A,B,C,D]
table1 = [
        [1,2,3,4],
        [1,4,4,4],
        [2,3,6,9],
        [7,5,4,9],
        ]

findkey(head1,table2)

/* R : A ==> D ;
       B ==> A ; B ==> C ; B ==> D ;
       C ==> A ; C ==> B ; C ==> D ;
       D == 0
       AD == 0
*/


head2 = [A,B,C]
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