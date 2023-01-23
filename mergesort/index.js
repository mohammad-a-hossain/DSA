


//  DEVIDE AND CONQURE IS MERGE SORT WORK PROCESS

let arrOne = [20,10,30,50,40]
let newArray =[]

function mergeSort(arr,l,r){
      if(l < r){
        let mid =l+r/2
        mergeSort(arr,l,mid) //left side
        mergeSort(arr,mid+1,r) // right side
        // subarray already sorted
        mergeSubArray(arr,l,mid,r)
      }
}
function mergeSubArray(arr,l,mid,r){
    let i=l
    let j= mid+1
    let k=i
    while(){

    }

    //copy rest value
    if(i > mid){
       while(j <= r){
        newArray[k]=arr[i]
          j++
          k++
       }
    }else{
        while(i <= mid){
            newArray[k]= arr[i]
            i++
            k++
        }
    }

}