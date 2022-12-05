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
    
        isEmpty(){
           return this.length === 0;
        }
    
        push(value){      // add element to the end
           /*  let newNode = {
                value: value,
                next: null 
            }
     */
           let newNode= new Node(value)

            if(this.isEmpty()){
                this.head=newNode;
                this.tail=newNode;
            }else{
                this.tail.next=newNode;
              // newNode =this.tail
                 this.tail= newNode;
            } 
            this.length++;
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

        unshift(value){               /// unsit means data will inset first index 
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

        showList(){        // now showing all list data
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
        
        get(index) { // if need to get an index 
            
            if (index < 0 || index >= this.length) {
              return null;
            } else {
              let count = 0;
              let currentNode = this.head;
        
              while (count < index) {
                currentNode = currentNode.next;
                count += 1;
              }
        
              return currentNode;
            }
        }
 
    }
    
    let list =new SinglyLinkedList();


  /*   list.push(1);
    list.push(100);
     */

  /*   list.pop(101)
    console.log(list)
    list.pop()
    console.log(list)  
     list.pop() 
     console.log(list) 
     list.pop() 
     console.log(list)  */
   /*   list.shift()
   
     console.log(list) 
     list.shift()
   
     console.log(list) 
     list.shift()
   
     console.log(list) 
     list.shift() */
   
     //console.log(list) 
  /*    list.shift()
     console.log(list) 
     list.shift()
     console.log(list) 
     list.shift()
     console.log(list)  */
     /* list.shift()
     console.log(list)
     list.push(33)
     console.log(list)
   console.log(list)
    list.unshift(333)
    console.log(list)
    list.unshift(33)
    console.log(list)
    list.pop()*/
   // console.log(list)
    //list.unshift(500)
   // console.log(list)
    //list.unshift(5000)
   // console.log(list)

   // console.log(list) 
/*     console.log(list.get(1))
    console.log(list.get(0))
console.log(list.showList()) */


/*  for more lesson
https://dev.to/miku86/javascript-data-structures-singly-linked-list-remove-fai */

list.push(3)
console.log(list)
console.log(list.get(2))
console.log(list.showList())