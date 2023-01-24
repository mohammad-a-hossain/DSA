class Node{
    constructor(value,left=null, right=null) {
         this.value=value 
         this.left= left
         this.right=right
            
        }
    
        
    }
    class BinayTree{
        constructor(value){
         this.root=  new Node(value)
        }

        insert(value){
            let currentNode= this.root
            while(true){
                if(currentNode.value < value){ // right part
                     if(!currentNode.right){
                     let newNode = new Node(value)
                     currentNode.right= newNode
                     break
                }
                  currentNode= currentNode.right 
                }else{
                    if(currentNode.value > value){
                        if(!currentNode.left){
                            let newNode = new Node(value)
                            currentNode.left= newNode
                            break
                        }
                        currentNode= currentNode.left
                    }
                }


               
            }
        }
    }
    
    const binarytree= new BinayTree(10)
      
    binarytree.insert(5)
    binarytree.insert(8)
    binarytree.insert(11)
    binarytree.insert(20)
    binarytree.insert(2)
    binarytree.insert(12)

    console.log(binarytree.root)
    /* 
    
    Node {
  value: 10,
  left: Node {
    value: 5,
    left: Node { value: 2, left: null, right: null },
    right: Node { value: 8, left: null, right: null }
  },
  right: Node {
    value: 11,
    left: null,
    right: Node { value: 20, left: null, right: [Node] }
  }
}
              10        
        5              11
    2      8      12        20

    */