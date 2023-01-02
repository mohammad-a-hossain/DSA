class Node{
    constructor(value){
        this.value = value 
        this.next = null 
        this.prev= null
    }
}
//let node = new Node()

class DoubleLinkList{
    constructor(){
        this.head= null 
        this.tail= null 
        this.length=0
    }


    push(value){

        let node = new Node(value)

        if(!this.head){
            this.head = node 
            this.tail =node 
        }else{
            this.tail.next = node 
            node.prev = this.tail 
            this.tail = node 
        }
        this.length++
      return this  
    }

    pop(){
        let popNode = this.tail           /* [2,5, 3, [r o p]*4 ] */
                                        //         ->      <-
        if(!this.head){
            return null 
        }

        if(this.length == 1){
            this.head  = null 
            this.tail  = null
           
        }else{    
        this.tail= popNode.prev /* [2, 5, *3,   4 ] */ // set the node before the current tail as the new tail
        this.tail.next =null/* [2, 5, *3,   '' ]  remove the connection from the new tail to the old tail*/ 
        popNode.prev = null/* [2, 5, *3,   '' ] remove the connection from the old tail to the new tail */ 
        }
        this.length--

         return popNode
    }


    shift(){
        let shiftNode = this.head 

        if(!this.head){
            return null
        }
           
        if(this.length ==1){
            this.head= null
            this.tail =null      // [  a       *b   c],[  ' '       *b c] 
        }else{
            this.head = shiftNode.next // the node after the nodeToRemove should become the new head
            this.head.prev = null // remove both connections from the new head to the old head (= nodeToRemove)
            shiftNode.next = null 

        }
        this.length-- 

        return shiftNode
    }

    unshift(value){
        let unshiftNode = new Node(value)//create a new node
        if(!this.head){
            this.head = unshiftNode
            this.tail =unshiftNode
        }else{    /* [4*  5**,6,7 ] */
            unshiftNode.next =this.head //set the new node as the new head and tail
            this.head.prev = unshiftNode      // set the current head's prev to new node
            this.head= unshiftNode                            // set list's head to new node
        }
            this.length++

          return unshiftNode
    }

    get(index){
       if(!this.length || index < 0 || index >= this.length ){
        return null 
       } 
       let currentNode 
       if(index < this.length/2){
        let counter =0 
        currentNode= this.head 

        while(counter < index){
            currentNode =currentNode.next
            counter++
        }
       }else{
       let counter = this.length -1 
        currentNode= this.tail 
        while(counter > index){
            currentNode=currentNode.prev 
            counter-- 
        }
       }
       return currentNode

    }

    set(index,value){
        let currentNode = this.get(index)

        if(currentNode){
            currentNode.value =value
            return currentNode
        }else{
            return null
        }
    }
    insertAtIndex(index,value){
        
    }

    showDoubleLinkedList(){
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



}

let list= new DoubleLinkList()


/* node.value= 1
node.next=11
node.prev=111 */
list.push(100)
list.push(200)
list.push(300)
list.push(400)
console.log(list)
list.pop()
console.log(list)
list.shift()
console.log(list)
list.shift()
console.log(list)
list.shift()
console.log(list)
list.unshift(5)
console.log(list)
list.unshift(50)
console.log(list)
list.unshift(500)
console.log(list)


//list.get(1)

console.log(list.showDoubleLinkedList())
console.log(list.get(2))

console.log(list.showDoubleLinkedList())
console.log(list.get(1))
list.set(0,3)
list.set(1,30)
console.log(list.showDoubleLinkedList())
list.set(2,33)
console.log(list.showDoubleLinkedList())