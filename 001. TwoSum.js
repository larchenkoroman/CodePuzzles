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