// time complexity
//time complexity means how the times useing in running time and the ratio of time 


// in time complexity avoid 

/*  

**constant         example  => pie, gravity, G, 
**small value 


 */

// mainly this things are important

/*
@ assignmetn operator
@ arithmetic operator 
*/



var a= 4, b= 3, resut= a+b // 3 operation makes O(n)  0(1) simple operation




//example to find a time complexity

var n=[3,4,5,6,7,8]
for(var i=0; i< n.length;i++){
    if(arr[i]== target){
        return i
    }
}
 // here time complexity is O(n) worst case 0(n) (theta) best case



// if two loops run in a programme the t c will be
for(i=0;i<n;i++){} //O(n)
while(){}           // O(n)      
 O(n) + O(n) = O(n2) = o(n)


// T C for nested loop

for(i=0;i<n;i++){
    for(i=0;i<n;i++){
        for(i=0;i<n;i++){

        }
    }
}
O(n*n*n)= O(n3)


//ANOTHER EXAMPLE 
for(i=0;i<n;i++){
    for(i=0;i<n;i++){

    }
}

for(i=0;i<n;i++){

}

O(n2)+O(n) 
= O(n2)



// calculation

O(n4 + n3+ n2+ 2n+ 10)
= O(n4)




// SPACE COMPLEXTIY


var a= 4, b=3 , res = a+b 
O(1) + O(1)+O(1) = 3 O(1)= O(1) space complexity



// lets try ------------------------------------------------------------
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

// here time complexity is O(log2 n)
/* 
 */

// here space complexity is O(1)
/*  because there is no array loop or no need to take array inside programm. and some constants have avoided  */


/* [
    [2,3,4,5]     o(n)       no of row and no of col 
    [4,5,6,7]      o(n)
    [8,9,4,3]      o(n)
    [8,9,4,3]     o(n)
                          = O(n2)
] */