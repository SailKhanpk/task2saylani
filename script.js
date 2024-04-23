function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // Check if the string is a palindrome
    for (let i = 0; i < cleanStr.length / 2; i++) {
        if (cleanStr[i] !== cleanStr[cleanStr.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

// Test cases
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false







// 2


function findMinMax(arr) {
    if (arr.length === 0) {
        return null;
    }
    
    let min = arr[0];
    let max = arr[0];
    
    for (let num of arr) {
        if (num < min) {
            min = num;
        }
        
        if (num > max) {
            max = num;
        }
    }
    
    return { min, max };
}

// Test cases
console.log(findMinMax([1, 3, 5, 7, 9])); // { min: 1, max: 9 }
console.log(findMinMax([2, 4, 6, 8, 10])); // { min: 2, max: 10 }
console.log(findMinMax([-1, 0, 1])); // { min: -1, max: 1 }




// 3

function findMissingNumber(arr) {
    const n = arr.length + 1; // Expected length of the series
    let sum = (n * (n + 1)) / 2; // Sum of all numbers from 1 to n
    
    for (let num of arr) {
        sum -= num; // Subtract each number in the series from the sum
    }
    
    return sum;
}

// Test case
console.log(findMissingNumber([11, 12, 14, 15, 16, 18, 19, 20])); // 17
