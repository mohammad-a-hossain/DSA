let arr=[1,4,5,3,2,11,4,66,7,6,5,677,0]

let i, j, temp
const bubbleSort=(arr)=>{
    for(let i=0; i< arr.length; i++){
   
    for(let j=0; j < arr.length-i -1; j++){
       
        if(arr[j] > arr[j + 1]){
            temp = arr[j]
          arr[j]= arr[j+1]
          arr[j+1] = temp
        }
    }
}
 return arr
}
console.log(bubbleSort(arr))// [ 0, 1, 2, 3,  4,  4,5, 5, 6, 7, 11, 66,677]

