//1. problem

// array must be sorted either assending or desending order
const arr =['a','b','c','d','e']

let item = 'b'

const binarySearch =(arr, item)=>{
let start=0
let end= arr.length-1
let mid
   while(start <= end){ // assending order
    mid= Math.floor((start + end) / 2)
    if(arr[mid] === item){
        return 'item found at index '+ mid 
    }else if(arr[mid] > item){
        end = mid - 1 
         mid= Math.floor((start + end) / 2)
    }else{
        start = mid + 1
         mid= Math.floor((start + end) / 2)
    }
           
   }

}
console.log(binarySearch(arr,item))//item found at index 1
//complexity 
// log2^n  log2*2=4  



// another sorted array like
let arr2 = [44,33,22,11,7,5,4,0,-1,-2,-9]

const item1 = 0

const binaysearch=(arr2,item1)=>{
    let end = 0
    let start= arr2.length -1
    let mid
       while(start >= end){ //decesnding order
        mid= Math.floor((end + start) / 2)
        if(arr2[mid] === item1){
            return 'item found at index of '+ mid 
        }else if(arr2[mid] < item1){
           
            start = mid + 1
        }else{
            end = mid - 1
           

       }  
      
}
}
console.log(binaysearch(arr2,item1))//item found at index of 6