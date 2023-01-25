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
        // insert node in binary tree
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

         // now search in binary tree
         search(value){
           let currentNode = this.root 
             while(currentNode){
              if(currentNode.value === value){
                 return 'data found'
              }else if(currentNode.value > value ){
                currentNode =currentNode.left 
               
              }else{
                currentNode= currentNode.right
              }
             }
             return 'data not found'
         }

         //find predecessor (left most find large value)
         predecessor(value){
          let currentNode = this.root.left 
          while(true){
            if(!currentNode.right ){ // currentNode.right !== null 
              return currentNode.value 
            }else{
              currentNode= currentNode.right 
            }
          }
         }
         successor(vlaue){ // finding right most small data
          let currentNode  = this.root.right 
          while(true){
            if(!currentNode.left){
              return currentNode.value
            }else{
              currentNode = currentNode.left
            }
          }
         }
         traversByLoop(){
          let queue =[]
          queue.push(this.root) 

           while(queue.length){
             let current = queue[0]
             console.log(current.value)

             if(current.left){
                queue.push(current.left)
             }
             if(current.right){
                queue.push(current.right)
                   
             }
               queue.shift()
           }
      
         }
    }
    
    const bst= new BinayTree(10)
      
    bst.insert(5)
    bst.insert(8)
    bst.insert(11)
    bst.insert(20)
    bst.insert(2)
    bst.insert(12)

    console.log(bst.root) 
    
    console.log(bst.search(44))
    console.log(bst.search(12))
    console.log(bst.search(4))
    console.log(bst.search(20))
      
    console.log(bst.predecessor())
    console.log(bst.successor())
    bst.traversByLoop()
 
    
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
    right: Node { value: 20, left: [Node], right: null }
  }
    left: Node { value: 2, left: null, right: null },
    right: Node { value: 8, left: null, right: null }
  },
  right: Node {
    value: 11,
    left: null,
    right: Node { value: 20, left: [Node], right: null }
  }
}
              10        
        5              11
    2      8      12        20

    */

   

