//1. problem -> find a target item at index

// array must be sorted either assending or desending order
/*  const arr =['a','b','c','d','e']

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
//solved
console.log(binarySearch(arr,item)) */ ///item found at index 1
//complexity 
// log2^n  log2*2=4  



// another sorted array like

/*   let arr2 =[-1,0,3,5,9,12] // sorted array assending order

var target = 5
var search =(arr2, target)=> {
    let end =  arr2.length -1
     let start=0
     let mid
  
        while(start <= end){ 
         mid= Math.floor((end + start) / 2)
         if(arr2[mid] === target){
          return mid       
         }else if(arr2[mid] < target){
            
             start = mid + 1
         }else{
             end = mid - 1
            
        }  
  
 }
      console.log('item found at index '+ mid)
    return -1   
 }
 //solved
     console.log(search(arr2,target))
      
 */

//-----Assending and  decending order.............another way of finding..................................

const nums1 = [-1, 2, 4, 6, 7, 8, 12, 15, 19, 32, 45, 67, 99]
//const nums2 = [99, 67, 45, 32, 19, 15, 12, 8, 7, 6, 4, 2, -1]

const ascendingDecending=(Array,target)=>{
       let start =0
       let end =Array.length -1
       let isAscending = Array[start] <= Array[end]


       while(start <= end){
       let mid=  start + ((end - start)/2)
         if(target === Array[mid]){
            return 'item is in index at '+ mid
         }
         if(isAscending){
            if(target < Array[mid]){
                end = mid -1 
            }else{
                start = mid +1
            }
         }else{
            if(target > Array[mid]){
                start =mid +1
            }else{
                end = mid -1
            }
         }
          return -1
       }
      
}

console.log( ascendingDecending(nums1,8))

//console.log( ascendingDecending(nums2,20))  
//unsolved