
// graph theory

// graph building

class Graph{
    constructor(){
       this.graph={}
    }
    add(a,b){
      if(this.graph[a]){//if a is exist
           this.graph[a].push(b)
      }else{ // if not then make array of a then push b as an array value for a[] array
        this.graph[a] = [b]
      }
      if(this.graph[b]){// if not then make array of b then push a as an array value for b[] array
        this.graph[b].push(a)
      }else{
        this.graph[b] =[a]
      }
    }

}

let gp= new Graph()
gp.add(5,4)
gp.add(5,1)
gp.add(1,2)
gp.add(2,3)
gp.add(3,4)
gp.add(1,6)
gp.add(6,5)
gp.add(6,7)
gp.add(7,2)
gp.add(1,4)

console.log(gp.graph)