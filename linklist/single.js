/*  class Node{ // node class
   constructor(value){
       this.value= value 
       this.next= null
   }
}


class LinkedList{
    constructor(){
        this.head= null  
        this.size =0
    }

    isEmpty(){
        return this.size == 0
    }

    getSize(){
        return this.size
    }

     prePand(value){
        const node = new Node(value)
        if(this.isEmpty()){
         this.head = node 
        }else{
            node.next = this.head 
            this.head = node 
        }
        this.size ++ 
    } 

    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node 
        }else{
              let prev= this.head 

        while(prev.next){
            prev= prev.next 
        }

        prev.next = node 
        }
      this.size++

    }

    print(){
        if(this.isEmpty()){
            console.log('list is empty')
        }else{
            let curr= this.head 
            let listValue =' '
            while(curr){
                listValue += `${curr.value}`
                curr= curr.next 
            }
            console.log(listValue)

        }
    }
}

const list = new LinkedList()
 
list.print()


 list.append(1+' ')
list.append(11+' ')
list.append(10+' ') 
list.print()
//1 11 10

// list.prePand(100+' ')
list.prePand(200+' ')
//200 100 */
//list.print()

  


// another exaple-------------

//  class SingleLinkLIst{
//     constructor(){
//         this.head= null 
//         this.tail= null
//         this.length= 0
//     }

//     isEmpty(){
//         return this.size === 0 
//     }

//     insertValue(value){
//         let newnode = {
//             value:value,
//             next:null 
//         }
//         if(this.isEmpty()){
//             this.head = newnode 
//             this.tail = newnode
//         }else{
//             this.tail.nexts = newnode
//             this.tail =newnode
//         }
//         this.length++
//     } 
// } 

// let listOnNumber = new SingleLinkLIst()

// console.log(listOnNumber)
// //SingleLinkLIst { head: null, tail: null, length: 0 }

//      console.log(listOnNumber.isEmpty())
//     console.log(listOnNumber.insertValue(1) )
//     console.log(listOnNumber.insertValue(2) )


class Node{ // node class
    constructor(value){
        this.value= value 
        this.next= null
    }
 }


    class SinglyLinkedList{
        constructor(){
            this.head=null;
            this.tail=null;
            this.length=0;
        }
    
        isLength(){
           return this.length === 0;
        }
    
        push(value){     
           let newNode= new Node(value)
             // newNode is instance of Node to be inseted
            if(this.isLength()){
                this.head=newNode;
                this.tail=newNode;
            }else{
                this.tail.next=newNode;
              // newNode =this.tail
                 this.tail= newNode;
            } 
            this.length++;
        }
              // TIME COMPLEXITY IS O(1)


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
            // [ a b c]
            let currentNode = this.head // suppoe head is currentNode 
            let lastNode = this.tail      // suppose tail is lastNode 
            let nodeToPop           // suppose a new node nodeToPop will repalace as lastnode

            while(currentNode){ // suppose there data is array 
                if(currentNode.next == this.tail){ // data next is suppose is tail 
                    nodeToPop = currentNode // so nodeToPop will be replaced as currentNode 
                    break                      // and the algo will break
                }
                currentNode = currentNode.next // otherwise currentNode will increase as next node 
            }
            nodeToPop.next = null  // now next Lastnode will be null or delete
              this.tail = nodeToPop  // and new tail will be nodeToPop
              this.length--           // after deleting the last node the index will decrese
              return lastNode        // now lastnode which is deleted will be seen
        }
                  // TIME COMPLEXITY IS O(n)



        shift(){               // deleting first element from list
            if(!this.head){
                return null  
            }
            let newHead = this.head  
            
            if(this.length ===1){
               this.head =null
                this.tail = null
                this.length =0
            }
          
            if(this.length > 1){ // if list has more than one elements
              this.head = newHead.next // then element will be deleted
                this.length--   
            }
           return newHead
        }
              // TIME COMPLEXITY IS O(1)


        unshift(value){               /// unsift means data will inset first index 
            let newHead  =new Node(value)
                if(!this.head){ // suppose there is empty
                    this.head= newHead  // first node will be new unsifted data
                    this.tail= newHead // tail will be also unsifted data
                }else{
                    newHead.next = this.head // or if there is data next value will be new unsifted data
                    this.head =newHead      // head will be new unsifted data
                }
                this.length++                 // then length will be increase
        }

            // TIME COMPLEXITY IS O(1)

        showList(){// now showing all list data
         let displayList =[]
         if(!this.head){
            return 'empty list'
          }else{
          let current= this.head 
         while(current){
            displayList += ` ${ current.value}`
            current = current.next
                }
            }
         return displayList

        }
        get(index) {
            // return null if index is negative or equal to or greater than the length of the List
            if (index < 0 || index >= this.length) {
              return null;
            } else {
              // start at the beginning of the List
              let currentNode = this.head;
              // keep track how many times we went to the next node
              let count = 0;
        
              // as long as the current count is smaller than the desired node's index
              while (count < index) {
                // set the next node as the currentNode
                currentNode = currentNode.next;
                // increase the count by 1
                count += 1;
              }
        
              // return this node
              return currentNode;
            }
        }
            // TIME COMPLEXITY IS O(n)
            get(index) { 
              let count = 0;
              let currentNode = this.head;
        
            if (index < 0 || index >= this.length) {
              return null;
            } 
            
              while (currentNode != null) {
               if(count == index){
                return currentNode   
               }
                 count++
                currentNode= currentNode.next
              }
        
              return currentNode;
            }

            remove(index){
                if(index < 0 || index >= this.length){
                    return null 
                }else if(index == 0){
                    return this.shift()
                }else if(index == this.length -1){
                    return this.pop()
                }else{                                  // a b {c} d
                    let preNodeOfremove = this.get(index -1) // find the previouse index of remeove index
                    /* let nodeToRemove = preNodeOfremove.next // replace the removved index by prev.next node
                    preNodeOfremove.next = nodeToRemove.next // set replace node will be next node */
                      preNodeOfremove.next= preNodeOfremove.next.next
                   
                    this.length--                           // then decrease the length

                    return index                 

                }
                
            }
            insertAt(value,index){
                
                if(index < 0 || index >= this.length){
                    return null 
                }else if(index == 0){
                    return this.unshift(value)
                }else if(index == this.length -1){
                    return this.push(value)
                }else{      
                    let nodeToInsert = new Node(value)
                                                // a b {c} d
                     let getPrevNode = this.get(index -1) // find the previouse index of remeove index
                         nodeToInsert.next= getPrevNode.next
                        getPrevNode.next =nodeToInsert

                        this.length++

                  return nodeToInsert                 
                    //console.log({getPrevNode})
                }
                
            }
            set(index, value) {
                // get the node at the desired index
                const currentNode = this.get(index);
                // if the node does exist
                if (currentNode) {
                  // set its value to the desired new value
                  currentNode.value = value;
                  // and return it
                  return currentNode;
                } else {
                  // if the node does not exist, return null
                  return null;
                }
              }

        }
 
    
    
    let list =new SinglyLinkedList();

/* list.push(3)
list.push(30)
list.push(300)
console.log(list)
console.log(list.get(1))
console.log(list.get(2)) */

list.push('A')
list.push('B')
list.unshift('C')

console.log(list.showList()) 

list.insertAt('F',0)

console.log(list.get(3))

list.insertAt('L',3)
console.log(list.get(4) )

console.log(list.get(0) )
console.log(list.get(3))
console.log(list.get(4))


console.log(list.showList()) 
list.insertAt('I',3)
console.log(list.get(1) )
console.log(list.showList()) 

console.log(list.length) 
list.remove(3)
list.remove(1)
console.log(list.showList()) 