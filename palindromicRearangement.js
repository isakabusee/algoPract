// You are given a palindromic string s.

// Return the lexicographically smallest palindromic permutation of s. 

// Example 1:

// Input: s = "z"

// Output: "z"

// Explanation:

// A string of only one character is already the lexicographically smallest palindrome.

// Example 2:

// Input: s = "babab"

// Output: "abbba"

// Explanation:

// Rearranging "babab" → "abbba" gives the smallest lexicographic palindrome.

// Example 3:

// Input: s = "daccad"

// Output: "acddca"

// Explanation:

// Rearranging "daccad" → "acddca" gives the smallest lexicographic palindrome.

 

// Constraints:

// 1 <= s.length <= 105
// s consists of lowercase English letters.
// s is guaranteed to be palindromic.
 
const smallestPalindromicPermutation = (s) => {
    const count = {};
    for (const char of s) {
        count[char] = (count[char] || 0) + 1;
    }

    const half = [];
    let middle = '';

    for (const char of Object.keys(count).sort()) {
        const freq = count[char];
        if (freq % 2 === 1) {
            middle = char;
        }
        half.push(char.repeat(Math.floor(freq / 2)));
    }

    const halfStr = half.join('');
    return halfStr + middle + halfStr.split('').reverse().join('');
};

// Example usage:
console.log(smallestPalindromicPermutation("z")); // Output: "z"
console.log(smallestPalindromicPermutation("babab")); // Output: "abbba"
console.log(smallestPalindromicPermutation("daccad")); // Output: "acddca"