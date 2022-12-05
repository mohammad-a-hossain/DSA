class Node{
    constructor(value, next =null){

        this.value = value 
        this.next = next
    }
}

class LinkLIst{
    constructor(value){
        let node = new Node(value)
        this.head= node 
        this.tail= node 
    }

    append(){
        
    }
}

let list = new LinkLIst(100)

console.log(list)