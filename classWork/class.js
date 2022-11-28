

// class task -------------------------------------------------------------------------
// finding data occurance of binary search
 
/* const numbers = [10, 15, 25,25, 30, 40, 40, 40, 40, 40,45,45,45, 70, 85, 90,90,90];
const numbers2 = [90, 85, 70, 65, 55,55, 50, 40, 35, 25, 20, 15, 10];

function orderAgnosticBinarySearch(arrayOfItems, targetItem) {
	let start = 0;
	let end = arrayOfItems.length - 1;
	let count = 0;
	let mid, asc;
	let foundAt;

	if (arrayOfItems[start] < arrayOfItems[end]) {
		asc = true;
	} else {
		asc = false;
	}

	while (start <= end) {
		mid = Math.floor((start + end) / 2);
		if (arrayOfItems[mid] === targetItem) {
			// count++;
			foundAt = mid;
		}
		if (asc) {  //for ascending
			if (arrayOfItems[mid] < targetItem) {
				start = mid + 1;
			} else {
				end = mid - 1;
			}
		} else { // for decending
			if (arrayOfItems[mid] > targetItem) {
				start = mid + 1;
			} else {
				end = mid - 1;
			}
		}
	}
	if (foundAt) {
		console.log('item is found at index :'+ foundAt)

		let indX = foundAt
		while (indX <= arrayOfItems.length - 1) { //traversing right
			if (targetItem === arrayOfItems[indX]) {
				count++;
				indX++;
			} else {
				indX = foundAt - 1;
				break;
			}
		}

		while (indX >= 0) {   //traversing left
			if (targetItem === arrayOfItems[indX]) {
				count++;
				indX--;
			} else {
				break;
			}
		}
		return 'found the item ' + count + ' times';
	}
	return 'data not found';
}
console.log(orderAgnosticBinarySearch(numbers, 40));
console.log(orderAgnosticBinarySearch(numbers2,55));
 //solved */



//class task---2---------------------------------------------------------
/* -------------FINDING FLOORING AND CEILLING NUMBER IN AN ARRAY -----*/

     let arr=[5, 6, 8, 9, 6, 5, 5, 6];
    let item = 4;
    

const floorAndCeil=(arr,item)=>
    {
        let n = arr.length // length is n
           
        // Indexes of floor and ceiling
        let floorInd = -1, ceillInd = -1;
    
        // Distances of current floor and ceiling
         let floorDist = Number.MAX_VALUE
        let ceillDist = Number.MAX_VALUE 
    
        for (let i = 0; i < n; i++)
        {
            // If current element is closer than previous ceiling.
            //[[5, 6, 8, 9, 6, 5, 5, 6]  item-4

            if (arr[i] >= item && ceillDist > (arr[i] - item)){ 
                ceillInd = i;
                ceillDist = arr[i] - item
            }
    
            // If current element is closer than previous floor.
            
            if (arr[i] <= item && floorDist > (item - arr[i]))
            {
                floorInd = i;
                floorDist = item - arr[i];
            }
        }
    
        if(floorDist == Number.MAX_VALUE){
            console.log("Floor doesn't exist " )
        }
        else{
            console.log("Floor is " +  arr[floorInd] + "")
        }
    
        if(ceillDist == Number.MAX_VALUE){
            console.log("Ceil doesn't exist")
        }
     
        else{
        console.log("Ceil is  " + arr[ceillInd]+" ")
        }
      
    }



     console.log(floorAndCeil(arr, item)) 
 
 
     


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
   



  //-----  class 3---------------------------------------------------------------------

// finding missing array number and target index value 

let arr3= [ 2,3,4,7,11]

let target1= 5

let ma=[]
let n=1
let i=0
while(ma.length < target1){ 
    if(n == arr3[i]){
      i++
      n++
    }else{
   ma.push(n)
   n++

    }
    
}
console.log(ma+ ' new array of missing array')
console.log(ma[target1-1] + ' taget')
//[ 1, 5, 6, 8, 9, 10 ]
//9

// problem 

//const arr4= [a,b,f]
