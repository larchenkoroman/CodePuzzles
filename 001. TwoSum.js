/*
Given an array of integers, find two numbers such that they add up to a specific target number.
The function twoSum should return indices of the two numbers such that they add up to the target,
where index1 must be less than index2.
Please note that your returned answers (both index1 and index2) are not zero-based.
You may assume that each input would have exactly one solution.

Input: numbers={2, 7, 11, 15}, target=9
Output: index1=1, index2=2
*/
function TwoSum(numbers, target){
   let
      mapping = {},
      result = []
      searched = 0;

   for(let i = 0; i < numbers.length; i++){
      mapping[numbers[i]] = i;
   }

   for(let i = 0; i < numbers.length; i++){
      searched = target - numbers[i];
      if(mapping[searched]){
         result.push(i + 1);
         result.push(mapping[searched] + 1);
         break;
      }
   }
   return result;
}

console.log(TwoSum([2, 7, 11, 15], 26));
console.log(TwoSum([2, 7, 11, 15], 22));