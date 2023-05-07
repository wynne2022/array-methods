// reduce
Array.prototype.myReduce = function(callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : this[0];
    for (let i = initialValue !== undefined ? 0 : 1; i < this.length; i++)
        accumulator = callback(accumulator, this[i], i, this);
    return accumulator;
} 

const numbers = [1, 2, 3, 4, 5];

console.log(numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0));
console.log(numbers.myReduce((accumulator, currentValue) => accumulator + currentValue, 0));

// filter
Array.prototype.myFilter = function(callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this))
            result.push(this[i]);
    }
    return result;
}

console.log(numbers.filter((num) => num > 2));
console.log(numbers.myFilter((num) => num > 2));

// find
Array.prototype.myFind = function(callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this))
            return this[i];
    }
    return undefined;
}

console.log(numbers.find((num) => num > 2));
console.log(numbers.myFind((num) => num > 2));

// concat
Array.prototype.myConcat = function(...arrays) {
    const result = [...this];
    for (let i = 0; i < arrays.length; i++) {
        if (Array.isArray(arrays[i])) {
            for (let j = 0; j <arrays[i].length; j++) {
                result.push(arrays[i][j]);
            }
        }
        else
            result.push(arrays[i]);
    }
    return result;
}

console.log(numbers.concat(6,7,8,[9,10,[11]]));
console.log(numbers.myConcat(6,7,8,[9,10,[11]]));

// push
Array.prototype.myPush = function(...nums) {
    for (let i = 0; i < nums.length; i++)
        this[this.length] = nums[i];
    return this.length;
}

console.log(numbers.push(7,8,9,10), numbers);
console.log(numbers.myPush(7,8,9,10), numbers);

// pop
Array.prototype.myPop = function(){
    if (this.length === 0)
        return undefined;
    const last = this[this.length - 1];
    this.length -= 1;
    return last;
}

empty = [];
console.log(empty.myPop());
console.log(empty.pop());
console.log(numbers.length, numbers, numbers.myPop(), numbers.length, numbers);
console.log(numbers.length, numbers, numbers.pop(), numbers.length, numbers);