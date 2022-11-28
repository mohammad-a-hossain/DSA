/* from leetcode
p-1 
You are given a 0-indexed integer array nums and a target element target.

A target index is an index i such that nums[i] == target.

Return a list of the target indices of nums after sorting nums in non-decreasing order. If there are no target indices, return an empty list. The returned list must be sorted in increasing order.

 
Example 1:

Input: nums = [1,2,5,2,3], target = 2
Output: [1,2]
Explanation: After sorting, nums is [1,2,2,3,5].
The indices where nums[i] == 2 are 1 and 2.
Example 2:

Input: nums = [1,2,5,2,3], target = 3
Output: [3]
Explanation: After sorting, nums is [1,2,2,3,5].
The index where nums[i] == 3 is 3.
Example 3:

Input: nums = [1,2,5,2,3], target = 5
Output: [4]
Explanation: After sorting, nums is [1,2,2,3,5].
The index where nums[i] == 5 is 4. 

*/

/* const nums = [1,2,5,2,3], target = 2

var targetIndices = function(nums, target) {
 nums = nums.sort((a,b)=>{
    return a-b
 })

 let result=[]
for(let i=0; i<nums.length; i++){
    if(nums[i]===target){
       result.push(i) 
    }
    
} 

return result
}
console.log(targetIndices(nums,2)) // [ 1, 2 ]
//Example 1: solved
console.log(targetIndices(nums,3))// [ 3 ]
//Example 2: solved
console.log(targetIndices(nums,5))// [ 4 ]
 */

//--------------------------------------------------------------------------------------------------
/* 
268. Missing Number of an array

Example 1:

Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
Example 2:

Input: nums = [0,1]
Output: 2
Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.
Example 3:

Input: nums = [9,6,4,2,3,5,7,0,1]
Output: 8
Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.

*/
/* let nums = [9,6,4,2,3,5,7,0,1]

let sum=0 // variable for adding the index 
// loop through the all number 
for(let i=0; i<= nums.length; i++){
     sum += i //added sum to i =3
     console.log(sum +' inner')
     if(i < nums.length){ // if i less then lengths of nums array 
        sum -= nums[i] // substruc the current index from the sum
     }
    
} console.log(sum)
return sum //then return sum */

//-----------------------------------------------------------------------------------------------------


/*
 1539. Kth Missing Positive Number

Given an array arr of positive integers sorted in a strictly increasing order, and an integer k.

Return the kth positive integer that is missing from this array.

 

Example 1:

Input: arr = [2,3,4,7,11], k = 5
Output: 9
Explanation: The missing positive integers are [1,5,6,8,9,10,12,13,...]. The 5th missing positive integer is 9.
Example 2:

Input: arr = [1,2,3,4], k = 2
Output: 6
Explanation: The missing positive integers are [5,6,7,...]. The 2nd missing positive integer is 6. */
/* 

let nums = [2,3,4,7,11], target = 5


const findMA =(nums,target)=>{
    let missingArray=[]
    let n=1
    let i=0
    while(missingArray.length < target){
    if(n == nums[i]){
        i++ 
        n++
    }else{
        missingArray.push(n)   
        n++ 
      
    }
}
return missingArray[target-1]
 }

console.log(findMA(nums,5))
// solved
 */
//--------------------------------------------------------------------------------------------------



/* 287. Find the Duplicate Number

Share
Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

There is only one repeated number in nums, return this repeated number.

You must solve the problem without modifying the array nums and uses only constant extra space.

 

Example 1:

Input: nums = [1,3,4,2,2]
Output: 2
Example 2:

Input: nums = [3,1,3,4,2]
Output: 3 */


let nums = [1,1,2,3,3,4,4,8,8]
let item = 3, sum=0
for(let i=0; i< nums.length; i++){
    if(nums[i]==item){
        sum += i
    }
}
console.log(sum)
return sum






