/* const addSum=(n)=>{
    let total=0
    for(let i=0; i <= n; i++){
        total += i 
    }
    return total   
}
const time1= performance.now()
addSum(10000000)

const time2= performance.now()
console.log('time used :', (time2 - time1)/1000)
// time used : 0.0148699950017035
 */

/* var arrofMat=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

for(var p=0; p< arrofMat.length;p++){
    for(var j=0; j< arrofMat[p].length;j++){
        console.log(arrofMat[p][j])
    }
   console.log('<br/>')
} */

 //practising single linkedlist

 class Node{
       constructor(value) {
          this.value = value 
          this.next = null
       }
 }

class SingleLinkList{
       constructor(){
        this.head= null 
        this.tail= null 
        this.length=0
       }

    isEmpty(){
        return this.length === 0
    }

     push(value){    // inset element last index
        let pushNode = new Node(value)

        if(this.isEmpty()){
            this.head= pushNode 
            this.tail = pushNode 
        }else{
            this.tail.next= pushNode
            this.tail= pushNode
        }
         this.length++


         return pushNode
     
     }
     
     shift(){       // deleting last index 
        if(!this.head){
            return null 
        }
        let shiftNode  = this.head 
        if(this.length === 1){
            this.head= null 
            this.tail=null 
            this.length=0
        }
         if(this.length > 1){
            this.head = shiftNode.next
             this.length-- 
         }

          return shiftNode
     }

     unshift(value){             // inserting data first index 
           let unshiftDate = new Node(value)

           if(!this.head){
            this.head = unshiftDate
            this.tail =unshiftDate
           }else{
             unshiftDate.next = this.head 
             this.head =unshiftDate
           }  
           this.length ++
           return unshiftDate
        }
        pop(){                    // pop means delete data from tail /end
            if(!this.head){ // if there is no data or head is null
               return null     
            }

            if(this.length ===1){ // if there is only one data in array then it removed and assigned value
                let removeNode 
                this.head =null 
                this.tail= null 
                this.length =0
                return removeNode
            }

            let currentNode = this.head // suppoe head is currentNode 
            let lastNode = this.tail      // suppose tail is lastNode 
            let newLastNode            // suppose a new node newLastNode will repalace as lastnode

            while(currentNode){ // suppose there data is array 
                if(currentNode.next == this.tail){ // data next is suppose is tail 
                    newLastNode = currentNode // so newLastNode will be replaced as currentNode 
                    break                      // and the algo will break
                }
                currentNode = currentNode.next // otherwise currentNode will increase as next node 
            }
              newLastNode.next = null  // now next Lastnode will be null or delete
              this.tail = newLastNode  // and new tail will be newlastNode
              this.length--           // after deleting the last node the index will decrese
              return lastNode        // now lastnode which is deleted will be seen
        }
    }
    
const list = new SingleLinkList()
list.push(3)
list.push(300)
console.log(list)
list.shift()
console.log(list)
list.unshift(55)
console.log(list)
list.unshift(100)
console.log(list)

 list.pop()
console.log(list)

list.pop()
console.log(list)
list.pop()
console.log(list)


