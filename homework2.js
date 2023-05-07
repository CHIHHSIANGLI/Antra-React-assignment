//Chihhsiang Li HW2

// 1. Write a JavaScript function that reverse a number.
// Example x = 32243;
// Expected Output : 34223
function Q1(num){
    let numStr = num.toString();
    let digits = numStr.split('');
    digits.reverse();
    let reverseNumStr = digits.join('');
    let reverseNum = parseInt(reverseNumStr);
    return reverseNum;
}
console.log("——————Problem1——————");
console.log("Input: 34223")
console.log("Output:",Q1(32243));

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run
function Q2(str){
    str = str.toLowerCase();
    str = str.replace(/[^a-z0-9]/g, '');
    let reverseStr = str.split('').reverse().join('');
    return str === reverseStr;
}
console.log("——————Problem2——————");
console.log("Input: madam")
console.log("Output:",Q2("madam"));
console.log("Input: madams")
console.log("Output:",Q2("madams"));

// 3. Write a JavaScript function that generates all combinations of a string.
// Example string : 'dog'
// Expected Output : d,do,dog,o,og,g
function Q3(str){
    let result = [];
    for (let i = 0;i < str.length;i++){
        for (let j = i + 1;j <= str.length; j++){
            result.push(str.substring(i,j))
        }
    }
    return result;
}
console.log("——————Problem3——————");
console.log("Input: dog")
console.log("Output:",Q3("dog"));

// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order.
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.
function Q4(str){
    let charArray = str.split('');
    charArray.sort();
    let sortedStr = charArray.join('');
    return sortedStr;
}
console.log("——————Problem4——————");
console.log("Input: webmaster")
console.log("Output:",Q4("webmaster"));

// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string
// in upper case.
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox '
function Q5(str) {
    let words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      let capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
      words[i] = capitalizedWord;
    }
    let capitalizedStr = words.join(' ');
    return capitalizedStr;
  }
console.log("——————Problem5——————");
console.log("Input: the quick brown fox")
console.log("Output:",Q5("the quick brown fox"));

// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
// Example string : 'Web Development Tutorial'
// Expected Output : 'Development
  function Q6(str) {
    let words = str.split(' ');
    let longestWord = '';
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    }
    return longestWord;
  }
console.log("——————Problem6——————");
console.log("Input: Web Development Tutorial")
console.log("Output:",Q6("Web Development Tutorial"));

// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
// Example string : 'The quick brown fox'
// Expected Output : 5
  function Q7(str) {
    str = str.toLowerCase();
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      let char = str.charAt(i);
      if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        count++;
      }
    }
    return count;
  }
console.log("——————Problem7——————");
console.log("Input: The quick brown fox")
console.log("Output:",Q7("The quick brown fox"));

// 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
// Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and
// itself.
  function Q8(num) {
    if (num < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
console.log("——————Problem8——————");
console.log("Input: 1")
console.log("Output:",Q8(1));
console.log("Input: 7")
console.log("Output:",Q8(7));
console.log("Input: 111")
console.log("Output:",Q8(111));

// 9. Write a JavaScript function which accepts an argument and returns the type.
// Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.
  function Q9(value) {
    return typeof value;
  }
  let str = 'hello';
  let num = 42;
  let bool = true;
  let obj = { name: 'John', age: 30 };
  let arr = [1, 2, 3];
  let func = function() {};
console.log("——————Problem9——————");
console.log("Input: str")
console.log("Output:",Q9(str));
console.log("Input: num")
console.log("Output:",Q9(num));
console.log("Input: bool")
console.log("Output:",Q9(bool));
console.log("Input: obj")
console.log("Output:",Q9(obj));
console.log("Input: arr")
console.log("Output:",Q9(arr));
console.log("Input: func")
console.log("Output:",Q9(func));

// 10. Write a JavaScript function which returns the n rows by n columns identity matrix.
  function Q10(n) {
    let matrix = [];
    for (let i = 0; i < n; i++) {
      let row = [];
      for (let j = 0; j < n; j++) {
        if (i === j) {
          row.push(1);
        } else {
          row.push(0);
        }
      }
      matrix.push(row);
    }
    return matrix;
  }
  console.log("——————Problem10——————");
  console.log("Input: 4")
  console.log("Output:",Q10(4));

// 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second
// greatest numbers, respectively.
// Sample array : [1,2,3,4,5]
// Expected Output : 2,4
  function Q11(arr) {
    arr.sort(function(a, b) {
        return a - b;
    });
    let secondLowest = arr[1];
    let secondGreatest = arr[arr.length - 2];
    return [secondLowest, secondGreatest];
  }
console.log("——————Problem11——————");
console.log("Input: [1,2,3,4,5]")
console.log("Output:",Q11([1,2,3,4,5]));
  
// 12. Write a JavaScript function which says whether a number is perfect.
// According to Wikipedia : In number theory, a perfect number is a positive integer that is equal to the sum of its proper
// positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum).
// Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).
// Example : The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently,
// the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1
// + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.
  function Q12(num) {
    if (num < 2) {
      return false;
    }
    let divisors = [];
    for (let i = 1; i < num; i++) {
      if (num % i === 0) {
        divisors.push(i);
      }
    }
    let sum = divisors.reduce(function(a, b) {
      return a + b;
    }, 0);
    return sum === num;
  }
console.log("——————Problem12——————");
console.log("Input: 6")
console.log("Output:",Q12(6));
console.log("Input: 496")
console.log("Output:",Q12(496));
console.log("Input: 8128")
console.log("Output:",Q12(8128));
console.log("Input: 2")
console.log("Output:",Q12(2));
  
// 13. Write a JavaScript function to compute the factors of a positive integer
  function Q13(num) {
    let factors = [];
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        factors.push(i);
      }
    }
    return factors;
  }
console.log("——————Problem13——————");
console.log("Input: 16")
console.log("Output:",Q13(16));
  
// 14. Write a JavaScript function to convert an amount to coins.
// Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
// Output : 25, 10, 10, 1
  function Q14(amount, coins) {
    let minCoins = new Array(amount + 1).fill(Infinity);
    minCoins[0] = 0;
  
    for (let i = 1; i <= amount; i++) {
      for (let j = 0; j < coins.length; j++) {
        if (coins[j] <= i && minCoins[i - coins[j]] + 1 < minCoins[i]) {
          minCoins[i] = minCoins[i - coins[j]] + 1;
        }
      }
    }
  
    let result = [];
    let i = amount;
    while (i > 0) {
      for (let j = 0; j < coins.length; j++) {
        if (coins[j] <= i && minCoins[i - coins[j]] + 1 === minCoins[i]) {
          result.push(coins[j]);
          i -= coins[j];
          break;
        }
      }
    }
  
    return result;
  }
console.log("——————Problem14——————");
console.log("Input: 46, [25, 10, 5, 2, 1]")
console.log("Output:",Q14(46, [25, 10, 5, 2, 1]));
console.log("Input: 51, [25, 10, 5, 2]")
console.log("Output:",Q14(51, [25, 10, 5, 2]));

// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n
// from the user and display the result.
  function Q15(base, exponent) {
    let result = 1;
    for (let i = 0; i < exponent; i++) {
      result *= base;
    }
    return result;
  }
  console.log("——————Problem15——————");
  console.log("Input: 2,8")
  console.log("Output:",Q15(2,8));
  
// 16. Write a JavaScript function to extract unique characters from a string.
// Example string : "thequickbrownfoxjumpsoverthelazydog"
// Expected Output : "thequickbrownfxjmpsvlazydg"
  function Q16(str) {
  let uniqueChars = "";
  for (let i = 0; i < str.length; i++) {
    if (uniqueChars.indexOf(str[i]) === -1) {
      uniqueChars += str[i];
    }
  }
  return uniqueChars;
}
console.log("——————Problem16——————");
console.log("Input: thequickbrownfoxjumpsoverthelazydog")
console.log("Output:",Q16("thequickbrownfoxjumpsoverthelazydog"));

// 17. Write a JavaScript function to get the number of occurrences of each letter in specified string.
function Q17(str) {
    let occurrences = {};
    for (let i = 0; i < str.length; i++) {
      if (str[i] == ' '){
        continue;
      }
      else if (!occurrences[str[i]]) {
        occurrences[str[i]] = 1;
      }
      else {
        occurrences[str[i]]++;
      }
    }
  
    return occurrences;
  }
console.log("——————Problem17——————");
console.log("Input: hello world")
console.log("Output:",Q17("hello world"));

// 18. Write a function for searching JavaScript arrays with a binary search.
// Note : A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.
//Assume array is sorted since it's a binary search
  function Q18(arr, target) {
    let low = 0;
    let high = arr.length - 1;
  
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (arr[mid] === target) {
        return mid;
      } else if (arr[mid] < target) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
    return -1;
  }
  console.log("——————Problem18——————");
  console.log("Input: [1,3,5,7,9,11,13,15],13")
  console.log("Output:",Q18([1,3,5,7,9,11,13,15],13));
  
// 19. Write a JavaScript function that returns array elements larger than a number
  function Q19(arr, num) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > num) {
        result.push(arr[i]);
      }
    }
    return result;
  }
  console.log("——————Problem19——————");
  console.log("Input: [1,3,5,7,9,11,13,15],7")
  console.log("Output:",Q19([1,3,5,7,9,11,13,15],7));
  
// 20. Write a JavaScript function that generates a string id (specified length) of random characters.
// Sample character list : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  function Q20(length) {
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      let randomIndex = Math.floor(Math.random() * chars.length);
      result += chars.charAt(randomIndex);
    }
    return result;
  }
  console.log("——————Problem20——————");
  console.log("Input: 8")
  console.log("Output:",Q20(8));
  
// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array.
// Sample array : [1, 2, 3] and subset length is 2
// Expected output : [[2, 1], [3, 1], [3, 2], [3, 2, 1]]
  function Q21(arr, length) {
    let result = [];

    function generateSubsets(subArr, index) {
      if (subArr.length === length) {
        result.push(subArr.slice());
        return;
      }
      for (let i = index; i < arr.length; i++) {
        subArr.push(arr[i]);
        generateSubsets(subArr, i + 1);
        subArr.pop();
      }
    }

    for (let i = 0; i < arr.length; i++) {
      let subArr = [arr[i]];
      generateSubsets(subArr, i + 1);
    }
    return result;
  }
  console.log("——————Problem21——————");
  console.log("Input: [1,2,3,4,5],2")
  console.log("Output:",Q21([1,2,3,4,5],2));
  console.log("Input: [1,2,3,4,5],4")
  console.log("Output:",Q21([1,2,3,4,5],3));

// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number
// of occurrences of the specified letter within the string.
// Sample arguments : 'microsoft.com', 'o'
// Expected output : 3
  function Q22(str, letter) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str.charAt(i) === letter) {
        count++;
      }
    }
    return count;
  }
  console.log("——————Problem22——————");
  console.log("Input: 'microsoft.com', 'o'")
  console.log("Output:",Q22('microsoft.com', 'o'));
  
// 23. Write a JavaScript function to find the first not repeated character.
// Sample arguments : 'abacddbec'
// Expected output : 'e
  function Q23(str) {
  let charCounts = {};
  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);
    charCounts[char] = (charCounts[char] || 0) + 1;
  }
  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);
    if (charCounts[char] === 1) {
      return char;
    }
  }
  return null;
}
console.log("——————Problem23——————");
console.log("Input: 'abacddbec'")
console.log("Output:",Q23('abacddbec'));

// 24. Write a JavaScript function to apply Bubble Sort algorithm
// Note : According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that
// works by repeatedly stepping through the list to be sorted, comparing each pair of adjacent items and swapping them if
// they are in the wrong order".
// Sample array : [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
// Expected output : [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]
function Q24(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  }
  console.log("——————Problem24——————");
  console.log("Input: [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]")
  console.log("Output:",Q24([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));
  
// 25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as
// output.
// Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output : "United States of America"
  function Q25(countryNames) {
    let longestName = '';
    for (let i = 0; i < countryNames.length; i++) {
      if (countryNames[i].length > longestName.length) {
        longestName = countryNames[i];
      }
    }
    return longestName;
  }
  console.log("——————Problem25——————");
  console.log('Input: ["Australia", "Germany", "United States of America"]');
  console.log("Output:",Q25(["Australia", "Germany", "United States of America"]));
  
// 26. Write a JavaScript function to find longest substring in a given a string without repeating characters.
  function Q26(str) {
    let longestSubstr = '';
    let currentSubstr = '';
  
    for (let i = 0; i < str.length; i++) {
      let char = str.charAt(i);
      let index = currentSubstr.indexOf(char);
  
      if (index === -1) {
        currentSubstr += char;
        if (currentSubstr.length > longestSubstr.length) {
          longestSubstr = currentSubstr;
        }
      } else {
        currentSubstr = currentSubstr.substring(index + 1) + char;
      }
    }
  
    return longestSubstr;
  }
  console.log("——————Problem26——————");
  console.log("Input: 'abcabcbb'")
  console.log("Output:",Q26('abcabcbb'));
  
// 27. Write a JavaScript function that returns the longest palindrome in a given string.
// Note: According to Wikipedia "In computer science, the longest palindromic substring or longest symmetric factor
// problem is the problem of finding a maximum-length contiguous substring of a given string that is also a palindrome. For
// example, the longest palindromic substring of "bananas" is "anana". The longest palindromic substring is not guaranteed
// to be unique; for example, in the string "abracadabra", there is no palindromic substring with length greater than three,
// but there are two palindromic substrings with length three, namely, "aca" and "ada".
// In some applications it may be necessary to return all maximal palindromic substrings (that is, all substrings that are
// themselves palindromes and cannot be extended to larger palindromic substrings) rather than returning only one
// substring or returning the maximum length of a palindromic substring.
  function Q27(str) {
    let longest = '';
    for (let i = 0; i < str.length; i++) {
      for (let j = i; j < str.length; j++) {
        let substr = str.substring(i, j + 1);
        if (isPalindrome(substr) && substr.length > longest.length) {
          longest = substr;
        }
      }
    }
    return longest;
  }
  function isPalindrome(str) {
    str = str.toLowerCase();
    str = str.replace(/[^a-z0-9]/g, '');
    let reverseStr = str.split('').reverse().join('');
    return str === reverseStr;
  }
  console.log("——————Problem27——————");
  console.log("Input: 'bananas'")
  console.log("Output:",Q27('bananas'));
  console.log("Input: 'abracadabra'")
  console.log("Output:",Q27('abracadabra'));
  
// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter
  function Q28(callback) {
    callback();
  }
  
  function myCallback() {
    console.log("Hello World!");
  }
  console.log("——————Problem28——————");
  console.log("Input: myCallback")
  console.log("Output:");
  Q28(myCallback);
  
// 29. Write a JavaScript function to get the function name
  function Q29(fn) {
    return fn.name;
  }
  console.log("——————Problem29——————");
  console.log("Input: myCallback")
  console.log("Output:",Q29(myCallback));

  
  

  

  
