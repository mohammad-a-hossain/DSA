

// frequently calling itself

/* function acb(){
    console.log('go with recursion')
    acb()
}

acb() */

/* unlimiteed loop

 function acb(n){
    console.log(n,'go with recursion')
    acb(n + 1)
}

acb(1) 
*/

function acb(n){
    // base case (stop)
    if(n == 10){
        return 
    }
    //process step
    console.log(n,'go with recursion')
    acb(n+1)
}

acb(1)

// 
/* function A(){
    B(){
        C(){
            D(){
                return
            }
        }
    }
} */

// practise recursion

// array traverse --------------------------------

let arr=[1,2,3,4,5,6,7,8]
function arrTravrs(arr,i=0){
    if(arr.length === i){
        console.log({i})
        return
    }
    console.log(arr[i])
    arrTravrs(arr,i+1)
}
arrTravrs(arr)

// sumation --------------------------------------

let sum=0

function summetoin(arr,i=0){
    if(arr.length == i){
        return
    }
     sum = sum+ arr[i]
      console.log(sum)
     summetoin(arr, i+1)
     
     return  sum
    
}
summetoin(arr)


// array reverse --------------------------------

function arrRevers(arr, start,end){
    if(start >= end){ //when index i == lastindex
        return
    }
   //swap
   let temp= arr[start]
   arr[start]=arr[end]
   arr[end]=temp
   arrRevers(arr,start+1,end-1)

}

arrRevers(arr,0,arr.length -1)
console.log(arr) /* // [
    8, 7, 6, 5,
    4, 3, 2, 1
  ]
 */

// palindrom -------------------------------------
 let str='maam'
 function isPalRec( str , s , e) {
    // If there is only one character
    if (s == e)
        return true;

    // If first and last
    // characters do not match
    if ((str.charAt(s)) != (str.charAt(e)))
        return false;

    // If there are more than
    // two characters, check if
    // middle substring is also
    // palindrome or not.
    if (s < e + 1)
        return isPalRec(str, s + 1, e - 1);

    return true;
} 
function isPalindrome( str) {
    var n = str.length;

    // An empty string is
    // considered as palindrome
    if (n == 0)
        return true;

    return isPalRec(str, 0, n - 1);
}
if (isPalindrome(str))
console.log("Yes");
else
console.log("No");

isPalRec(str,0,str.length-1)


// linear search -----------------------------------


function linearSrecursion(arr,key,i=0){
     if(arr.length == i){
        return -1
    } 
     if(arr[i]== key)
    {
         return {
      status:true, 
      index:i
     }
    }
  return  linearSrecursion(arr,key, i+1)
}

linearSrecursion(arr,33)

// binary search

 
// link list traverse
