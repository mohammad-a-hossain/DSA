// in order traversing  DEPTH FIRST SEARCH (DFS)
 // Left Node Right
              /*    
                          10
                    20              30
                 40     50        60   70 
             */

// pre order traversal

// practise

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
         BFS(){ // breath first traverse
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
            // depth first search DFS
         inorder(node){ 
                if(node.left){
                    this.inorder(node.left)
                }
                console.log(node.value)
                if(node.right){
                    this.inorder(node.right)
                   // console.log(node.value)
                }
         }
    }
    
    const bst= new BinayTree(5)
    console.log(bst.root) 

    bst.insert(10)
    bst.insert(100)
    bst.insert(1000)
    bst.insert(104)
    bst.insert(110)
    

   // bst.inorder(bst.root)
    bst.BFS()
    /* 
                5
            10        100
            
                 104        1000
            
            110
    
    */

