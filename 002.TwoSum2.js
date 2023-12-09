/*
Given an array of integers, find two numbers such that they add up to a specific target number.
The function twoSum should return indices of the two numbers such that they add up to the target,
where index1 must be less than index2.
Please note that your returned answers (both index1 and index2) are not zero-based.
You may assume that each input would have exactly one solution.

Input: numbers={2, 7, 11, 15}, target=9
Output: index1=1, index2=2

The second solution is two-pointer scanning.
Sort the array first, unfortunately, you need to remember the original index during sorting.
It’s better to use a new object to hold the number-index mapping.
After the array is sorted, then, use two pointers to scan from two bounds to the middle.
Find the solution and return their original index. The time complexity is O(n*lgn).
*/
function TwoSum(numbers, target) {
    const Node = function(val, index) {
        this.index = index;
        this.val = val;
    }
    const result = [];
    const elements = numbers.map((num, index) => new Node(num, index))
                            .sort((a, b) => a.val - b.val);
    let start = 0,
        end = numbers.length -1,
        sum;

    while(start < end) {
        sum = elements[start].val + elements[end].val;
        if(sum === target) {
            result.push(elements[start].index + 1);
            if(elements[start].index < elements[end].index)
                result.push(elements[end].index + 1);
            else
                result.unshift(elements[end].index + 1);
            break;
        }
        else if (sum > target)
            end--;
        else
            start++;
    }
    return result;
}

console.log(TwoSum([5,2,8,4], 13));