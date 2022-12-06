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