# Palindrome Checker in JavaScript

## Overview

This repository contains a simple JavaScript implementation of a palindrome checker. A word is considered a palindrome if it reads the same from left to right or from right to left.

## Function Description

The `isPalindrome` function checks whether a given word is a palindrome using recursion. It follows the logic of comparing the characters at the ends of the word and recursively checking the rest of the word if the first and last characters are equal.

## Usage

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/palindrome-checker-js.git
    ```

2. Navigate to the project directory:

    ```bash
    cd palindrome-checker-js
    ```

3. Run the JavaScript file:

    ```bash
    node palindromeChecker.js
    ```

4. View the results in the console.

## Example

```javascript
// Example usage:
console.log(isPalindrome("gag"));    // true
console.log(isPalindrome("kayak"));  // true
console.log(isPalindrome("php"));    // false
console.log(isPalindrome("radar"));  // true
console.log(isPalindrome("hello"));  // false

Contributing
Contributions are welcome! Feel free to open issues or submit pull requests.

License
This project is licensed under the MIT License - see the LICENSE file for details.


Please customize this template based on your specific project structure and additional information you want to include. Be sure to replace placeholders like `your-username` and update the license information accordingly.
