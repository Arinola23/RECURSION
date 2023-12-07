function isPalindrome(word) {
    // Base case: an empty word or a word with a single character is a palindrome
    if (word.length <= 1) {
        return true;
    }

    // Compare the first and last characters
    if (word[0] === word[word.length - 1]) {
        // Recursively check the rest of the word
        return isPalindrome(word.slice(1, -1));
    } else {
        // If the first and last characters are different, it's not a palindrome
        return false;
    }
}

// Test cases
console.log(isPalindrome("gag"));    // true
console.log(isPalindrome("kayak"));  // true
console.log(isPalindrome("php"));    // false
console.log(isPalindrome("radar"));  // true
console.log(isPalindrome("hello"));  // false
