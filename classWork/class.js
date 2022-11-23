  const arr=[2,3,3,8,8,8,8,8,9,12,12,15] //ascending order
 const item = 12
let start=0
let end = arr.length -1
let mid 
let result = -1


const duplicateSearch =(arr, item)=>{
   while(start <= end){ 
    mid= Math.floor((start + end) / 2)
    if(arr[mid] === item){//console.log('step')
        result = mid
    }
     if(item < arr[mid]){
        end = mid - 1
        
    }else{
        start = mid + 1
    
    }     
    return -1
}
return result
   
} 

console.log(duplicateSearch(arr,item))
 
 





//class task---1
/* -------------FINDING FLOORING AND CEILLING NUMBER IN AN ARRAY -----*/
 let arr2=[5, 6, 8, 9, 6, 5, 5, 6];
    let item2 = 10;
    

const floorAndCeil=(arr2,item2)=>
    {
        let n = arr2.length // length is n
           
        // Indexes of floor and ceiling
        let floorInd = -1, ceillInd = -1;
    
        // Distances of current floor and ceiling
        let floorDist = Number.MAX_VALUE
        let ceillDist = Number.MAX_VALUE
    
        for (let i = 0; i < n; i++)
        {
            // If current element is closer than previous ceiling.
            if (arr2[i] >= item2 && ceillDist > (arr2[i] - item2)){
                ceillInd = i;
                ceillDist = arr2[i] - item2
            }
    
            // If current element is closer than previous floor.
            if (arr2[i] <= item2 && floorDist > (item2 - arr2[i]))
            {
                floorInd = i;
                floorDist = item2 - arr2[i];
            }
        }
    
        if(floorDist == Number.MAX_VALUE){
            console.log("Floor doesn't exist " )
        }
        else{
            console.log("Floor is " +  arr2[floorInd]+"")
        }
    
        if(ceillDist == Number.MAX_VALUE){
            console.log("Ceil doesn't exist")
        }
     
        else{
        console.log("Ceil is  " + arr2[ceillInd]+" ")
        }
      
    }



     console.log(floorAndCeil(arr2, item2)) 


     // finding data occurances unsorted array in linear style

   /*   let arr=[5, 6, 8, 9,9,9, 6, 5, 5, 6];
    let item= 9 , res=0

    const findElementOccur=(arr,item)=>{
         for(var i=0; i< arr.length-1; i++){
        if(arr[i]===item){
             res ++ 
        }
     
    }   return res
}
     console.log(findElementOccur(arr,item)) */
   


const elementOccurance = ()=>{

}