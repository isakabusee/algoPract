//Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
 const palindrome = (s) => {
    for(let i = 0; i<s.length/2; i++){
        if(s[i].toLowerCase() !== s[s.length-1-i].toLowerCase()){
            return false;
        }
    }
    return true;  
 }
 console.log(palindrome("A man, a plan, a canal: Panama")); // Output: true
 console.log(palindrome("race a car")); //