// Two pointer algorythom

/* type 
1. front  --- back pointer 
2. fast   --- slow pointer 
3. 2 point array varibale different 

 */


/* 
let arr=[3,4,2,5,7,8,9,0]
//console.log(arr.reverse())


// array reverse

 */




let arr=[3,4,2,5,7,8,9,0]
let size= arr.length -1
let k 
for (let i = 0, k=size; i <= k ; i++,k--) {
    
     let temp = arr[i]
     arr[i] = arr[k]
     arr[k] = temp

}
console.log('reverse array :'+ arr)
// T C = O(n)
// S C = O(1)







// P A L I N D R O M

const palindrom =(str)=>{
    let k= str.length-1 
    let i=0
    while(i <=k){
      if(str[i]!== str[k]){
        return false
      }else{
        i++
        k--
      }
    }
    return true
}

console.log(palindrom('mam'))
console.log(palindrom('hasan'))
