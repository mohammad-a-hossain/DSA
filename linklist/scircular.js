/* 

class Node{
    constructor(value){
        this.head = value
        this.next =null
    }
}
        
class CircularSingle{

    constructor(value){
            
    let newNode= new Node(value)
        this.head= newNode
        this.tail= newNode
        this.tail.next=this.head
        this.length=0
    }
    
}



let slist= new CircularSingle(4)
console.log(slist) */
/* console.log(slist.head)
console.log(slist.tail) */

/* ---------------------------initial practise end------------------------------------------ */





class Node{
    constructor(value){
        this.head = value
        this.next =null
    }
}    
class CircularSingle{
    
    constructor(){
        let node = new Node()
        this.head= node
        this.tail= node
        this.tail.next =this.head
        this.length=0
    }
    append(value){
        let node = new Node(value)
            this.tail.next= node 
            this.tail= node 
            this.tail.next =this.head
             this.length++
    }
    showList(){
        let displayList =[]
        /* if(!this.tail){
           return 'empty list' */
         {
         let current= this.tail
        while(current!= this.tail){
           displayList += (`${current.value}`)
           current = current.next
               }
           }
        return displayList

       }

}

let circularSingle= new CircularSingle()

circularSingle.append(100)
console.log(circularSingle)
circularSingle.append(200)
console.log(circularSingle)
console.log(circularSingle.showList())

