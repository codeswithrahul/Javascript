// Q1. find the second largest Number 

// approach : 
// 1. first remove duplicate from an Array
// 2. then sort it
// 3. it might be possible in arr there will be only 1 element so there is 
// no second largest number 

// brute force approac


const arr = [10,20,30,3,30,7];


function secondLargest(arr) {
    const uniqArr = Array.from(new Set(arr));
     uniqArr.sort((a,b) => b - a)
    if(uniqArr.length >= 2){
        return uniqArr[1]
    }else{
        return -1;
    }

}

console.log(secondLargest([10,20,30,3,30,7]))

