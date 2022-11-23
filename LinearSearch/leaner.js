/* //1. problem

const arr = [1,2,3,5,78,6,4,233,54,6,7]
//console.log(arr)

//find the item 4
const item = 4
const leanerSearch=(arr,item)=>{
    for(var i=0; i < arr.length; i++){
       if(arr[i] === item ) {
        return  'item  found at index ' + i
       }    
    }
     
    return 'item not found'
}
console.log(leanerSearch(arr,item)) //item  found at index 6
console.log(leanerSearch( [1,2,3,5,78,6,4,233,54,6,7,-1,-1.5],-1.5))
//item  found at index 12 */


//2. problem find duplicate item in a array

const arr1 = [1,2,3,5,5,5,78,6,4,4,4,4,233,54,6,7]
//console.log(arr)

//find the item 4
const item1 =4
let pos = 0;
let steps = 0;

const duplicateSearch=(arr,item1)=>{
    steps++
    for(var i=0; i < arr.length; i++){
        if (item1 == arr[i])
    {
        pos = i + 1;
        break;
    }
  
    }
    if (pos == 0){
        console.log("Item Not found in array");
        console.log("Steps taken in Search: " + steps);
    }else{
        console.log("Position of item in array: " + pos);
        console.log("Steps taken in Search: " + steps);
    }
 
 
}

console.log(duplicateSearch(arr1,item1)) //item  found at index 6



    

