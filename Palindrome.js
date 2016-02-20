/*
Copyright (c) 2016, Fernando Monteiro
Test Shaw and Partners
*/

/*
The following example shows how to implement a Node.js modules to Check is a string is Polidrome.
The module used is: is-palindrome (Node implementation).
You can find more informations on how to use the software on README.txt.
*/

function Palindrome (str) {
    // Import Palindrome module;
    var isPalindrome = require('is-palindrome');

    // Check if the sentence(str) is Palindrome.
    return isPalindrome(str);
}
