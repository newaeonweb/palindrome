/*
Copyright (c) 2016, Fernando Monteiro
Test Shaw and Partners
*/

/*
The following example shows how to implement a Node.js modules to Check if a string is Palidrome.
The module used is: is-palindrome (Node implementation).
You can find more informations on how to use the software on README.md.
*/

function Palindrome (str) {
    // Import Palindrome module;
    var isPalindrome = require('is-palindrome');

    // Check if the sentence(str) is Palindrome.
    return isPalindrome(str);
}

/*
Example using Iterantion
*/

function CheckPalindromeIteration(str){
    var strlength = str.length, i=0, result = true;
    if (strlength <= 1) return true;
    while(i != strlength - i - 1){
        var start = str.charAt(i),
        end = str.charAt(strlength - i - 1);
        if (start != end){
            return false;
        }
        i++;
    }
    return console.log('The palindrome is: ' + result);
}
/*
Example using Recursion
*/
function CheckPalindromeRecursion(str){
    var strlength = str.length, i=0, result = true;
    if (strlength <= 1) return true;
    if (str.charAt(i) != str.charAt(strlength - i - 1)){
        return false;
      }else{
        i++;
        IsPalindromeRecursion(str.substr(1,str.length -2));
      }
      return console.log('The palindrome is: ' + result);;
}
