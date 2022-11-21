//1. problem

const arr = [1,2,3,5,78,6,4,233,54,6,7]
//console.log(arr)

//find the item 4
const item = 4
const leanerSearch=(arr,item)=>{
    for(var i=0; i < arr.length; i++){
       if(arr[i] === item ) {
        return  'item  found at index ' + i
       }else{
        return " not found"
       }
        
    }
     
 
}

console.log(leanerSearch(arr,item)) //item  found at index 6
console.log(leanerSearch( [1,2,3,5,78,6,4,233,54,6,7,-1,-1.5],-1.5))
//item  found at index 12


