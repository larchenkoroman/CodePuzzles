function Node(val, index) {
    this.index = index;
    this.val = val;
}

const numbers = [4, 2, 5, 8];
const elements = numbers.map((num, index) => new Node(num, index))
                            .sort((a, b) => a.val - b.val);

console.log(elements);