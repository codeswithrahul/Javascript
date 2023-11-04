// Palindrome 
// An integar is a palindrome when it reads the same forward and backward
// 121 --- 121 --> palindrome - true
// 874 -- 478 ---> Not Palindrom  - false

function isPalindrome(val){
    return val === +val.toString().split("").reverse().join('');
}
console.log(isPalindrome(4214))

// 121 => "121" => ["1","2","1"] => ["1","2","1"] =>"121" 


