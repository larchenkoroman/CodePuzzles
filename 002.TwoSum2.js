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