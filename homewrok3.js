Array.prototype.myReduce = function(callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : this[0];
    for (let i = initialValue !== undefined ? 0 : 1; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
    }
    return accumulator;
  }
  
  // filter - returns a new array containing only the elements that pass a given test
  Array.prototype.myFilter = function(callback) {
    let newArray = [];
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        newArray.push(this[i]);
      }
    }
    return newArray;
  }
  
  // find - returns the first element in an array that passes a given test
  Array.prototype.myFind = function(callback) {
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        return this[i];
      }
    }
    return undefined;
  }
  
  // concat - returns a new array that contains the elements of two or more arrays
  Array.prototype.myConcat = function(...arrays) {
    let newArray = this.slice();
    for (let array of arrays) {
      newArray.push(...array);
    }
    return newArray;
  }
  
  // push - adds one or more elements to the end of an array
  Array.prototype.myPush = function(...elements) {
    for (let element of elements) {
      this[this.length] = element;
    }
    return this.length;
  }
  

  let numbers = [1, 2, 3, 4, 5];
  let letters = ['a', 'b', 'c'];
  let sum = numbers.myReduce((prev, curr) => prev + curr);
  let evenNumbers = numbers.myFilter((number) => number % 2 === 0);
  let oddNumber = numbers.myFind((number) => number % 2 === 1);
  let combinedArray = numbers.myConcat(letters);
  numbers.myPush(6, 7);

  console.log(sum);
  console.log(evenNumbers);
  console.log(oddNumber);
  console.log(combinedArray);
  console.log(numbers);


  

  