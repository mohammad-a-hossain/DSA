// quick sorting

function partition(){
 let pivot = arr[L]
 // count small data
 let count =0
 for(let i=L;i<=R;i++){
    if(arr[i]< pivot){
    count++
 } 


 }
console.log('arr'+arr)
console.log("count"+count)
console.log('pivot'+pivot) 

// swapping data for getting and set pivot 
 let temp= arr[L]
  arr[L] = arr[count]
  arr[count] = temp

  // small data (left) || pivot ||(right) large data
  let i=L
  let j= R
  while(arr[i] !== pivot || arr[j] !== pivot){
    if(arr[i] > pivot && arr[j] < pivot){
        // now swap 
        let temp= arr[i]
        arr[i] = arr[j]
        arr[j] = temp

        i++
        j++
    }else if (arr[i] > pivot && arr[j] > pivot){
       j++ 
    }else{
        i++
    }
  }
}

function quicksort(arr,L,R){
       if(L < R){
       
        let p =partition(arr,L,R) 
       // quicksort(arr,l,p-1)// for left part
       // quicksort(arr,p+1,r) // for right part
       }
}
let arr=[8,7,6,1,0,9,2]
quicksort(arr,0, arr.length-1)
