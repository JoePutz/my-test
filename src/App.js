import './App.css';
import React, {useState} from 'react';
import Card from './components/Card';

function App() {


//alright, gonna make this my leetcode practice 

var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
          if (nums[i] + nums[j] == target) {
              return [i, j]
          }
      }
  }
};

var twoSum = function(nums, target) {
  const indices = new Map();

  for (let index = 0; index < nums.length; index++) {
      const complement = target - nums[index];

      if (indices.has(complement)) {
          return [indices.get(complement), index]
      }

      indices.set(nums[index], index)
  }
};
// So this is the faster solution, here's how it works. 
//1: creates an empty Map. 
//2: Goes through the nums array. Check if the correct answer is in the empty Map.
// 3: If it is not in the Map, it will add an entry into the Map that is the number, the index of that number
// 4: It will cycle through all the enries in the array. Eventually it will find the solution among the answers in the Map. 
// 5: It will then return the Map entry that is the solution, providing it's index number.
// 6: Since all those on the Map are prior to the current index we're on, solution will be [Map[i], i]


var checkIfPangram = function(x) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let z = x.split("")
  let count = 0
  let alphabet1=alphabet.split("")
  for (i=0; i<alphabet1.length; i++) {
      let letter = alphabet1[i]
      if (z.indexOf(letter) > -1) {
          count++
      }
      }
          
      if (count >= 26) {
          return true
      }
      else {
          return false
  }
  }

function onCheck() {
  const button = document.querySelector('#button')
  
  const disableButton = () => {
    button.disabled = true;
  }


}

var isPalindrome = function(x) {

  if (x < 0) {
      return false
  }
  else {
      let number = x;
      let reverse = 0;
      while (number > 0) {
          reverse = reverse * 10 + number % 10;
          number = parseInt(number / 10)
      }
      if ( x == reverse ){
          return true;
      } else {
          return false
      }
  }
};

function isPrime(a) {
  if (a === 1 ) {
    return false
  }
  else {
    for (i = 2; 1< a; 1++) {
      if (a % i === 0) {
        return false
      }
      else {
        return true
      }
    }
  }

}

function overlap(a, b, c, d) {
  if (b[0] < c[0] || a[0] > d[0] || a[1] < d[1] || b[1] > c[1]) {
    return false
  }
  return true
}

function anagram(a, b) {
  if (a.length != b.length) {
    return false
  }
  else {
    a.sort()
    b.sort()

    for(i=0; i<a.length; i++) {
      if (a[i] === b[i]) {
        return true
      }
      else {
        return false
      }
    }
  }
}


//Interesting one, so you have to loop through the first letter of the first string, 
var longestCommonPrefix = function(strs) {
  let answer = ""
  if(strs === null || strs.length === 0) return answer

  for (let i=0; i < strs[0].length; i++){ 
      const char = strs[0][i] // loop through all characters of the very first string. 

      for (let j = 1; j < strs.length; j++){ 
        // loop through all other strings in the array
          if(strs[j][i] !== char) return answer
      }
      answer = answer + char
  }

  return prefix
  }

function toLatin (num) {
  let thousands = Math.floor(num / 1000)
  let hundreds = Math.floor((num % 1000) / 100)
  let tens = Math.floor((num % 100) / 10)
  let ones = num % 10
    
    let result = ""
    
    if (thousands !== 0 ) {
        for (i=0 ; i < thousands; i++) {
            result += "M"
        }
    }
    if (hundreds !== 0) {
        if (hundreds === 9) {
            result += "CM"
        }
        else if (hundreds >= 5) {
            result += "D"
            for (i=5; i < hundreds; i++) {
                result += "C"
            }
        }
        else if (hundreds === 4) {
            result += "CD"
        }
        
        else {
            for (i=0; i < hundreds; i++) {
                result += "C"
            }
        }
    }
    if (tens !== 0) {
        if (tens === 9) {
            result += "XC"
        }
        else if (tens >= 5) {
            result += "L"
            for (i=5; i < tens; i++) {
                result += "X"
            }
        }
        else if (tens === 4) {
            result += "XL"
        }
        else {
            for (i=0; i < tens; i++) {
                result += "X"
            }
        }
    }
    
    if (ones !== 0) {
        if (ones === 9) {
            result += "IX"
        }
        else if (ones >= 5) {
            result += "V"
            for (i=5; i< ones; i++) {
                result += "I"
            }
        }
        else if (ones === 4) {
            result += "IV"
        }
        
        else {
            for (i=0; i < ones; i++) {
                result += "I"
            }
        }
    }
    
    return result
    
//   const map = {
//     M: 1000,
//     CM: 900,
//     D: 500,
//     CD: 400,
//     C: 100,
//     XC: 90,
//     L: 50,
//     XL: 40,
//     X: 10,
//     IX: 9,
//     V: 5,
//     IV: 4,
//     I: 1,
//   };
//   let result = '';
  
//   for (key in map) {  
//     const repeatCounter = Math.floor(num / map[key]);
    
//     if (repeatCounter !== 0) {
//       result += key.repeat(repeatCounter);
//     }
    
//     num %= map[key];
    
//     if (num === 0) return result;
//   }
  
//   return result;
// note to self, learn map
    
};
}


var maxArea = function(height) {
    
  //     let area = 0
      
  //     for (i = 0; i < height.length -1; i++){
  //         for (j = i+1; j < height.length; j++) {
  //             let newArea = (j-i) * Math.min(height[i], height[j])
  //             area = Math.max(area, newArea)
  //         }
  //     }
      
  //     return area
      
      
      let i = 0
      let j = height.length -1 
      let max = 0
      let area
      while (i < j) {
          area = (j - i) * Math.min(height[i], height[j])
          
          max = Math.max(area, max)
          
          height[i] < height[j] ? i++ : j--
      }
      
      return max
      
  };


  var findErrorNums = function(nums) {
    let answer = [0, 0]
    
    
    for (i=1; i < nums.length+1; i++) {
        let count = 0
        if (nums.indexOf(i) == -1) {
            answer[1] = i
        }
        
        else {
            for (j=0; j < nums.length; j++) {
            if (i == nums[j]) {
                count ++
            }
                if (count == 2) {
                    answer[0] = i
                }
        }
    }
    }
    
//     
    
    return answer
    // let newNums = nums.uniq
    
    
    // for (i=0; i < nums.length-1; i++) {
    //     for (j=i+1; j < nums.length; j++) {
    //         if (nums[i] === nums[j]) {
    //             answer.push(nums[i])
    //         }
    //     }
    // }
    // for (i=1; i < nums.length+1; i++) {
    //     if (nums.includes(i)) {
    //         console.log("do nothing")
    //     }
    //     else {
    //         answer.push(i)
    //     }
    // }
    // for (i = 1; i < nums.length+1; i++) {
    //     for (j=0; j < nums.length; j++) {
    //         if (i !== nums[j]) {
    //             answer.push(i)
    //         }
    //     }
    // }
    
    return answer
    
};



var arrayStringsAreEqual = function(word1, word2) {
  word1 = word1.join("")
  word2 = word2.join("")
  return word1 === word2
//     let stringWord1 = word1.toString().replaceAll(',', '')
//     console.log(stringWord1)
//     let stringWord2 = word2.toString().replaceAll(',', '')
//     console.log(stringWord2)
  
//     if (stringWord1 == stringWord2) {
//         return true
//     }
//     else {
//         return false
//     }
  
};


var largestOverlap = function(A, B) {
  var len = A.length;
 console.log(A.length)
var res = 0;
var tmp = 0;
for (var i = 1 - len; i < len; i++) {
 for (var j = 1 - len; j < len; j++) {
   tmp = 0;
   for (var k = 0; k < len; k++) {
     for (var m = 0; m < len; m++) {
       if (B[k][m] === 1 && A[k + i] && A[k + i][m + j] === 1) tmp++;
     }
   }
   res = Math.max(res, tmp);
 }
}
return res;
};

//in this code i am given an array, and I have to change the array so that all the unique nubmers are in the front of the array
var removeDuplicates = function(nums) {
  let i = 0
  let j = 1
  while (j < nums.length) {
      if (nums[i] !== nums[j]) {
          i++
          nums[i] = nums[j]
          j++
      } else {
          j++
      }
      
  }
  return i+1 
};

// Similar to above, this time just removing every value equal to val. Really should just use filter() silly question
var removeElement = function(nums, val) {
  let i = 0
  for (j = 0; j < nums.length; j++) {
      if ( nums[j] !== val) {
          nums[i] = nums[j]
          i++
      } 
  }
  return i
};


//Zigzag conversion, the point is to take a string and have it come out in a zigzag fasion
var convert = function(s, numRows) {
  if (numRows === 1 || s.length < numRows) {
    return s;
  }
  let rows = [];
  let currentRow = 0;
  let reverse = false;
  let result = "";

  for (let i = 0; i < numRows; i++) {
    rows[i] = [];
  }

  for (let i = 0; i < s.length; i++) {
    rows[currentRow].push(s[i]);
    if (reverse === false) {
      currentRow++;
    } else {
      currentRow--;
    }

    if (currentRow === numRows - 1 || currentRow === 0) {
      reverse = !reverse;
    }
  }

  rows.forEach((row) => {
    result += row.join("");
  });

  return result;
};
//This one is neat, so you needed to figure out the points at which the direction of the zigzag switches.
//When it reaches the end of the rows. But if we put them into an array it makes it easier to figure.
//So first letter goes into array[0], second letter array[1], ect.
//Reverse happens at currentRow is 0 or numRows-1. Make certain this happens after you push the letters obviously
//When done combine all rows and return the result


var detectCapitalUse = function(word) {
  let firstLetter = word[0]
  let otherLetters = word.slice(1)
  if (word.toUpperCase() === word) {
      return true
  }
  else if (word.toLowerCase() === word ) {
      return true
  }
  else if (firstLetter.toUpperCase() + otherLetters.toLowerCase() === word) {
      return true
  }
  else {
      return false
  }
};
//This one is to find if capitalization is used correctly: All Caps, all lower case, only first letter caps
//But there is another way to do it. 
//compare the number of capital letters to length. If 0 then good. If equal to each other good. If 1 and it's the first letter good.
var detectCapitalUse = function(word) {
  const len = word.length;
  if (len === 0) return false;
  let cnt = 0;
  let first = false;
  for (let i = 0; i < len; ++ i) {
      const ch = word.charAt(i);
      if ((ch >= 'A') && (ch <= 'Z')) {
          cnt ++;
          if (i == 0) first = true;
      }
  }
  return (cnt === 0) || ((cnt === 1) && first) || (cnt === len);
};


var minDeletionSize = function(strs) {

  const strLen = strs[0].length
  let count = 0
  let i = 0
  while(i < strLen){
      for(let j = 0; j<strs.length-1; j++){
          if(strs[j].charCodeAt(i) > strs[j+1].charCodeAt(i)){
              count++
              break
          }
      }
      i++
  }
  return count
};
//This was a weird one. strs is an array of many strings all the same length. 
//The goal was to see if equivalent letters in each string were in alphabetical order
//If they were not, delete that "column" 
//But don't actually delete it, just have a count of how many columns would need to be deleted
//So how this one works, count is at 0. go through each equivalent position of the strings.
//For each position check every string in the array. See if teh charCodeAt that position is 
// alphabetical. If it is not. increase the count by 1 and BREAK (which stops the process) 
// Go through all positions. Then return the count.

var minimumRounds = function(tasks) {
  let totalCount = 0    
  let count = {}
  tasks.forEach(function(i) { count[i] = (count[i]||0) + 1;});
  let values = Object.values(count)
  // console.log(Object.values(count)[0])
  for (j = 0; j < values.length; j++) {
      while (values[j] > 0) {
          if (values[j] == 1) {
              return -1
          }
          else if (values[j] % 3 == 0) {
              totalCount += values[j] / 3
          }
          else {
              totalCount += 1 + Math.trunc(values[j] / 3) 
          }
      }
  }
  return totalCount
};
//A weird one, where you have an array of numbers, and you can only remove the same number in groups of 2 or 3. How many times to remove them all? -1 means impossible.
//Impossible is only true for 1. 
//Create an Object of all values and number of them. 
//Go through this object (or just the values for it) if there's a 1 just return -1 (the failure number)
//Otherwise if it's divisible by 3 you're golden. That's the value. 
//If it's not, then by math trickery it's actually the divisible by 3 number +1. As it will always be either %3 == 2 or 1. And in either case the total count is just plus 1.
// Since you would either remove 1 from a group of three to make two groups of 2, or just add a group of 2.


var maxIceCream = function(costs, coins) {
  costs.sort((num1, num2) => num1 - num2)

  let icecream = 0;
  
  while (icecream < costs.length && costs[icecream] <= coins) {
      coins -= costs[icecream];
      icecream += 1;
  }

  return icecream;
};
//     let orderCosts = costs.sort()
//     let total = 0
//     for (i = 0; i < costs.length; i++) {
//         if (coins - orderCosts[i] >= 0) {
//             total++
//             coins = coins - orderCosts[i]
//         } else {
//             break
//         }
//     }
//     return total
// };

//how many different icecream products can you buy? Given an array of costs of ice cream and how much money you have.
//Easy idea. Sort array in order of cost. Go 1 by 1 add to total bought and subtract from coins.
//neat trick in solution to use total icecream as essentially i. I like that. Not certain why my initial program did not work. 
//So why did my method not work initially? I misunderstood .sort() It doesn't do order numerically. It goes off numbers so [1,3,100,10,2,5,500] would be [1,10,100,2,3,5,500]
//What I need to do is be more accurate with .sort() .sort((num1, num2) => num1 - num2) apparently does the correct order

var preorderTraversal = function(root) {
  if (!root) {
      return []
  }
  else {
      const stack = [root]
      const result = []
      
      while (stack.length) {
          let node = stack.pop()
          console.log(node.val)
          result.push(node.val)
          if (node.right) {
              stack.push(node.right)
          }
          else if (node.left) {
              stack.push(node.left)
          }
      }
      return result
  }
  
};
//So this is supposed to be considered a pretty trivial thing, with reading and ordering binary trees. I'm still not certain how those work. Will need to read up on.

var addTwoNumbers = function(l1, l2) {
  console.log(l1.length)
  let sum = 0
  output = []
  for (i = 0; i < l1.length; i++) {
      sum = sum + (l1[i] * 10 ** i)
  }
  for (j = 0; j < l2.length; j++) {
      sum = sum + (l2[j] * 10 ** j)
  }
  sumString = sum.toString()
  for(x = 0; x < sumString.length; x++) {
      output.unshift(sumString.charAt([x]))
  }
  return output
}
//This should work if it is 2 arrays. Anyway, this is supposed to take two arrays of numbers. Where each element is a 10s place away (so first element is the ones, second is the tens)
//Add these two numbers together and then spit out a new array w/ the answer. 
//But apparently this is supposed to be w/ lists that are not arrays in the question? I don't really get it.

var findMedianSortedArrays = function(nums1, nums2) {
  arrayMid = (nums1.length + nums2.length - 1) / 2
  newArray = nums1.concat(nums2).sort((a, b) => a - b)
  if (parseInt(arrayMid) == arrayLength) {
      return newArray[arrayMid]
  } else {
      answer = (newArray[arrayMid - .5] + newArray[arrayMid + .5]) / 2
      return answer
  }

};
//simple one. Which is strange considering this was listed as "hard" w/ only a 35% success rate. Beat it easy. 
//Anyway, two arrays of numbers. Find the median of both arrays together.
//Combine both arrays, then sort them. Find the length of the new array and the middle. 
//if the middle is an integer congrats that's the median of the new array
//if it's not, then it's the average of the two closest numbers.


var lengthOfLongestSubstring = function(s) {
  let longestStringLength = 0;

  for (let i = 0; i < s.length; i++) {
      let currentStringSet = new Set();
      for (let x = i; x < s.length; x++) {
          if (currentStringSet.has(s[x])) {
              break;
          } else {
              currentStringSet.add(s[x]);
          }
      }

      longestStringLength = Math.max(
          longestStringLength,
          currentStringSet.size
      );
  }

  return longestStringLength;
};
// so this one I needed to use sets. which have some interesting properties to use. 
//Goal was to take a string, and find the longest substring with all unique letters.
//Step 1: create an empty Set. For each element, check if it is already in the set. If no? Add to set. If yes? Break
//check if the length of the set is bigger than the longest string length, pick the biggest to be the new longeststringlength
//Go thru all positions on the string. Return the current (and therefore actual) longestStringLength

var longestPalindrome = function (string) {
  let longestPal = '';

  var getLongestPalindrome = function (leftPosition, rightPosition) {
      // While there is space to expand, and the expanded strings match
      while (
          leftPosition >= 0 &&
          rightPosition < string.length &&
          string[leftPosition] === string[rightPosition]
      ) {
          // Expand in each direction.
          leftPosition--;
          rightPosition++;
      }

      // Store the longest palindrom (if it's the longest one found so far)
      if (rightPosition - leftPosition > longestPal.length) {
          longestPal = string.slice(leftPosition + 1, rightPosition);
      }
  };

  // Loop through the letters
  for (let i = 0; i < string.length; i++) {
      // Find the longest odd palendrome
      getLongestPalindrome(i, i + 1);

      // Find the longest even palendrome
      getLongestPalindrome(i, i);

      // Check if a longer palindrome cannot be found
      if ((string.length - i) * 2 < longestPal.length) {
          // Break out to avoid unnecessary computation
          break;
      }
  }

  return longestPal;
};

var reverse = function(x) {
  let negative = false
  let result = 0
  if (x < 0) {
      negative = true
      x = x * -1
  }
  while (x > 0) {
      result = result * 10 + x % 10
      x = Math.trunc(x / 10)
  }
  if (result > 2**31 -1) {
      return 0
  }
  if (negative === true) {
      result = result * -1
  }
  return result

};
//reverse an integer, make certain that it was not too big or too small. Pretty easy.
//Some things to check: If it's negative, set that aside to re-add later
//make certain to return 0 if end result would be ouside the listed number range

var myAtoi = function(s) {
  var i = 0;
  var sign = 1;
  var res = 0;
  var INT_MAX = 2147483647;
  var INT_MIN = - INT_MAX - 1;

  while (s[i] === ' ') i++;

  if (s[i] === '+' || s[i] === '-') {
    sign = s[i] === '+' ? 1 : -1;
    i++;
  }

  while (s[i] >= '0' && s[i] <= '9') {
    res = (res * 10) + (s[i] - 0);
    if (sign === 1 && res > INT_MAX) return INT_MAX;
    if (sign === -1 && res > INT_MAX + 1) return INT_MIN;
    i++;
  }

  return res * sign;
}
//So this is a test case for the while loop. I was trying to use for loops and then I had to plan out how all of the failcases were
//Really it is just while something is true, otherwise stop. Which is what while is good for
//Basically I had a string and I needed to turn it into a number.
//All the " " in the beginning of the string could be ignored. 
//Once those were done if there was a + or a - that is needed to determine the number
//Then it has to be numbers.
//So while " " go ahead. Once there are no more " " check if its a positive or a negative
//Once that is done, while it's a number add to the number. If it's not a number that's it you're done


var romanToInt = function(s) {
  let result = 0
  const map = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000
  }
  for (i = 0; i < s.length; i++) {
      if (s[i] === 'I' && s[i+1] === 'V') {
          result += 4
          i++
      }
      else if (s[i] === 'I' && s[i+1] === 'X') {
          result += 9
          i++
      } else if (s[i] === 'X' && s[i+1] === 'L') {
          result += 40
          i++
      } else if (s[i] === 'X' && s[i+1] === 'C') {
          result += 90
          i++
      } else if (s[i] === 'C' && s[i+1] === 'D') {
          result += 400
          i++
      } else if (s[i] === 'C' && s[i+1] === 'M') {
          result += 900
          i++
      } else {
          result += map[s[i]]
      }
  }
  return result
};

//Turning a Roman numeral into an integer, opposite of an earlier problem
//Create a map to go through. but because it's not brilliant, it's easiest to go through the results that can't be just one thing
//Idea: Can I create a more complex map with the IV and IX stuff, then do a single if/else if of whether map[s[i]] < map[s[i+1]] if true then result += map[s[i]+s[i+1]]


var threeSum = function(nums) {
  nums.sort((a, b) => a-b)
  let results = []

  for (i=0; i < nums.length -2; i++) {
      if (nums[i] != nums[i-1]) {
          let left = i+1
          let right = nums.length-1
          while (left < right) {
              if(nums[i] + nums[left] + nums[right] === 0) {
                  results.push([nums[i], nums[left], nums[right]])
                  while(nums[left] === nums[left+1]) left++
                  while(nums[right] === nums[right-1]) right--
                  left++
                  right--
              }
              else if (nums[i] + nums[left] + nums[right] < 0) left++
              else if (nums[i] + nums[left] + nums[right] > 0) right--
          }
      }
      
  }
  return results
};
//NOt a hard one. The difficult thing was to think of the method of iterating through both sides imultaneously
//Rules: array of nums, get an array of arrays of 3 numbers that add up to 0, can only use each number in nums once. no repeat arrays
//The real fun bit is if(nums[i] != nums[i-1]) {...} because it removes repeats. With only 3 numbers the second and third need to cancel each other out, so will always be the same
//So checking if nums[i] isn't the same as the number before it makes sure no repeats.

var threeSumClosest = function(nums, target) {
  let len = nums.length;
  let res = nums[0] + nums[1] + nums[2];
  let sum = 0;
  // var l = 0;
  // var r = 0;
  nums.sort((a, b) => (a - b));
  for (var i = 0; i < len - 2; i++) {
      if (i > 0 && nums[i] === nums[i - 1]) continue;
      let left = i + 1;
      let right = len - 1;
      while (left < right) {
          sum = nums[i] + nums[left] + nums[right];
          if (sum < target) {
              left++;
          } else if (sum > target) {
              right--;
          } else {
              return sum;
          }
          if (Math.abs(sum - target) < Math.abs(res - target)) res = sum;
      }
  }
  return res;
  // nums.sort((a, b) => a-b)
  // let result = nums[0] + nums[1] + nums[2]
  // if (nums.length === 3) {
  //     return result
  // }
  // for (i=0; i < nums.length -2; i++) {
  //     let left = i+1
  //     let right = nums.length -1
  //     while (left < right) {
  //         if (nums[i] + nums[left] + nums[right] === target) {
  //             return target
  //         }
  //         else if (Math.abs(nums[i] + nums[left] + nums[right] - target) < Math.abs(result - target)) {
  //             result = nums[i] +  nums[left] + nums[right]
  //             while (nums[left] === nums[left+1]) left++
  //             while (nums[right] === nums[right-1]) right --
  //             left++
  //             right--
  //         }
  //         else if (nums[i] + nums[left] + nums[right] - target < 0) left++
  //         else if (nums[i] + nums[left] + nums[right] - target > 0) right++
  //     }
  // }
  // return result
};

//An expansion of the last one. This we needed to find the three numbers when added together closes to target
//Good use of absolute value in there. 
//My initial thoughts were so close, just too slow. Apparently checking to not repeat same numbers is less important than going thru it all faster
//Also the nice if less increase left, if greater increase right, otherwise it's equal so you're good.
//That's something I need to improve, figuring out how to make the code easier thru ommission

var letterCombinations = function(digits) {
  output = []
  const digitsToLetters = {
      2: ["a", "b", "c"],
      3: ["d", "e", "f"],
      4: ["g", "h", "i"],
      5: ["j", "k", "l"],
      6: ["m", "n", "o"],
      7: ["p", "q", "r", "s"],
      8: ["t", "u", "v"],
      9: ["w", "x", "y", "z"]
  }
if (digits === '') {
  return [];
}

var possibleValues = digits.split('').map(value => digitsToLetters[value]);
console.log(possibleValues)
var possibleCombinations = [];

var recursiveCombine = (start, result) => {

  if (result.length === digits.length) {
    possibleCombinations.push(result.join(''));
  }

  for (var i = start; i < possibleValues.length; i++) {
    for (var j = 0; j < possibleValues[i].length; j++) {
      result.push(possibleValues[i][j]);
      recursiveCombine(i + 1, result);
      result.pop();
    } 
  }
}

recursiveCombine(0, []);
return possibleCombinations;

};

var fourSum = function(nums, target) {
  if (nums.length < 4) return [];
  nums.sort((a, b) => a-b)
  let length = nums.length
  let results = []

  for (i = 0; i < length -3; i++) {
      if (i > 0 && nums[i] === nums[i - 1]) continue;
      if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) break;
      if (nums[i] + nums[length - 1] + nums[length - 2] + nums[length - 3] < target) continue;
      for (j = i + 1; j < length -2; j++) {
          if (j > i + 1 && nums[j] === nums[j - 1]) continue;
          if (nums[i] + nums[j] + nums[j + 1] + nums[j + 2] > target) break;
          if (nums[i] + nums[j] + nums[length - 1] + nums[length - 2] < target) continue;
          let left = j + 1
          let right = length-1
          while (left < right) {
              let sum = nums[i] +  nums[j] + nums[left] + nums[right]
              if (sum === target) {
                  results.push([nums[i], nums[j], nums[left], nums[right]])
                  while (nums[left] === nums[left+1]) left++
                  while (nums[right] === nums[right-1]) right--
                  left++
                  right--
              }
              else if (sum < 0) left++
              else if (sum > 0) right --
          }
      }
  }
  return results
};
//4 sum is a lot like 3sum. But you have to do go through i and j before you get to left and right going in.
//the rest of the lines are all about making things go faster and breaking when we know it won't work. 
//in order
//if nums[i] = nums[i+1] it's gonna be the same result. Skip
//if first 4 numbers are already larger than the target nothing will work
//if i and the last 3 numbers are still too small i will never work, so go to i+1
//if nums[j] = nums[j+1] it's the same result go to j+2
//if i and j + the next two numbers are already bigger than the target, it will never equal the target. break
//if i and j + the last two numbers are still smaller than the target, it will enver equal the target. go to j+1


var isValid = function(s) {
  if (s.length % 2 !== 0) {
      return false
  }

  const Map = {
      '{': '}', 
      '(': ')',
      '[': ']'
  }
  const stack = []

  for (i = 0; i < s.length; i++ ) {
      if (Map[s[i]]) {
          stack.push(Map[s[i]])
      }
      else if (stack.length > 0 && stack[stack.length -1] === s[i]) {
          stack.pop()
      }
      else {
          return false
      }
  }
  return stack.length === 0
}
//Today I learned about a new thing called stack. Which is kinda an array. 
//So the question was, to determine if a string of []{}() is valid. With every opening having a corresponding close in the correct order
//Easy bit out of the way, if it's an odd length string then it can't be correct
//so Map and stack. Map I know. A pair of values I can look into.
//if(Map[s[i]]) exists (meaning the s[i] is one of the initial values in the Map) then push the corresponding answer to the stack.
//if the last value in the stack (remember all of these are closing values) equals where we're at in the s[i] then a group is closed. Remove from the stack and try to close the next one
//if s[i] is an ending }]) but does not match the last value in the stack, then it's false.
//At the end, check if the stack is empty. If True? True

var generateParenthesis = function (n) {
  // Resultant list
  const result = [];
  // Recursively generate parentheses
  generate(result, "", 0, 0, n);
  return result;
};

function generate(result, s, open, close, n) {
  // Base condition
  if (open === n && close === n) {
      result.push(s);
      return;
  }
  // If the number of _open parentheses is less than the given n
  if (open < n) {
      generate(result, s + "(", open + 1, close, n);
  }
  // If we need more close parentheses to balance
  if (close < open) {
      generate(result, s + ")", open, close + 1, n);
  }
};

//This is an interesting one, multiple if statements run regardless if the above statement was true. So i'm not using else if. Therefore this will generate both the ( and ) variations at each step.

var strStr = function(haystack, needle) {
  let index = [-1]
  for (i = 0; i < haystack.length; i++) {
      for (j = 0; j < needle.length; j++) {
          if (haystack[i+j] !== needle[j]) {
              break
          }
          else if (j === needle.length -1 && haystack[i+j] === needle[j]) {
              index.push(i)

          }
      } 
  }
  if (index.length === 1) return -1
  else return index[1]
};
//The way overcomplicated way of finding the index of a second string in a larger string
var strStr = function(haystack, needle) {
  return haystack.indexOf(needle)  
};
//This does the exact same thing

var divide = function(dividend, divisor) {
    const MAX = 2147483647;
    const MIN = -2147483648;
    // Check for overflow
    if (divisor === 0 || (dividend === MIN && divisor === -1)) {
        return MAX;
    }
    if (divisor === dividend) {
        return 1;
    }
    // Sign of result
    const sign = (dividend > 0 && divisor < 0) || (dividend < 0 && divisor > 0) ? -1 : 1;
    // Quotient
    let quotient = 0;
    // Take the absolute value
    let absoluteDividend = Math.abs(dividend);
    let absoluteDivisor = Math.abs(divisor);
    // Loop until the  dividend is greater than divisor
    while (absoluteDividend >= absoluteDivisor) {
        // This represents the number of bits shifted or
        // how many times we can double the number
        let shift = 0;
        let shiftedDivisor = absoluteDivisor;
        while (absoluteDividend >= shiftedDivisor) {
            shift++;
            shiftedDivisor = absoluteDivisor << shift;
            // To handle overflow using left shift operator in JS
            if (shiftedDivisor < 0) {
                break;
            }
        }
        // Add the number of times we shifted to the quotient
        quotient += (1 << (shift - 1));
        // Update the dividend for the next iteration
        absoluteDividend -= absoluteDivisor << (shift - 1);
    }
    return sign === -1 ? -quotient : quotient;
}

//divide two numbers without using the common multiplication, division, remainder methods. 
//Doing subtraction normally was too slow
//This uses bit math (in binary) to do things for me.
//>> and << are binary methods

var findSubstring = function(s, words) {
  const answer = []
  if (s === null || s.length === 0 || words === null || words.length === 0) return answer

  const wordCount = words.reduce((a, b) => {
      a[b] = (a[b] + 1) || 1;
      return a;
  }, {})

  const wordLength = words[0].length;
  const wordArrayLength = wordLength * words.length;

  for (i = 0; i <= s.length - wordArrayLength; i++) {
      
      let current = s.substring(i, i + wordArrayLength);
      // Map to store each word of the substring
      const wordMap = {};
      // Index to loop through the words array
      let index = 0;
      // Index to get each word in the current
      let j = 0;
      // Loop through each word of the words array
      while (index < words.length) {
          // Divide the current string into strings of length of
          // each word in the array
          const part = current.substring(j, j + wordLength);
          // Put this string into the wordMap
          wordMap[part] = (wordMap[part] + 1) || 1;
          // Update j and index
          j += wordLength;
          index++;
      }
      // At this point compare the maps
      let a = JSON.stringify(Object.entries(wordCount).sort());
      let b = JSON.stringify(Object.entries(wordMap).sort());
      if (a === b) {
          answer.push(i);
      }
  }
  return answer;  
};
//A weird one, about finding combinations of words in a long string. 

var nextPermutation = function(nums) {
  if (nums.length <= 1) return;

  let leftHandSwap;

  // Loop through the provided numbers from right to left (excluding the first as we need something to compare it to)
  for (let i = nums.length - 2; i >= 0; i--) {
      // Check if this number is lower than the previous one (marks our left-hand swap)
      if (nums[i] < nums[i + 1]) {
          leftHandSwap = i;
          break;
      }
  }

  // Loop through the provided numbers from right to left
  for (let i = nums.length - 1; i > leftHandSwap; i--) {
      // If the number is bigger than the left-hand one
      if (nums[i] > nums[leftHandSwap]) {
          // Swap the numbers round
          [nums[i], nums[leftHandSwap]] = [nums[leftHandSwap], nums[i]];

          // Reverse the rest of the array
          let chopped = nums.splice(leftHandSwap + 1);
          chopped.sort((a, b) => a - b);
          nums.push(...chopped);
          return;
      }
  }

  // Right-hand swap not found, return lowest permutation instead
  nums.sort((a, b) => a - b);
};

var search = function(nums, target) {
  return nums.indexOf(target)
};

var searchRange = function(nums, target) {
  answer = []
  let i = nums.indexOf(target)
  answer.push(i)
  if (i === -1) {
      return [-1, -1]
  }
  for (j = nums.length -1; j >= i; j--) {
      if (nums[j] === target) {
          answer.push(j)
          break
      }
  }
  return answer
};
//Easy one, again. find the first and last positions that a target is in an array of numbers
//So, indexOf to find the first. 
//Work backwards to find the last.

var searchInsert = function(nums, target) {
  if (nums.indexOf(target) !== -1) {
      return nums.indexOf(target)
  }
  else {
      for (i = 0; i < nums.length; i++) {
          if (nums[i] > target) {
              return i
          }
      }
      return nums.length
  }
};

//Simple find the index of the target value, if it doesn't exist where would it be in an ordered array
//So, find the index, return if exists, if not, figure out where it would be. 
//Amusingly there's an even easier method.

var searchInsert = function (nums, target) {
  if (nums.includes(target)) {
      return nums.indexOf(target)
  } else {
      nums.push(target)
      nums.sort((a, b) => a - b)
      return nums.indexOf(target)
  }
};
//Same as above, just super simple. If it exists, put the index. If it doesn't, add it to the array, sort, and then return it.

var isValidSudoku = function(board) {
  for (let i = 0; i < 9; i++) {
       for (let j = 0; j < 9; j++) {
           const value = board[i][j];
           if (value !== '.') {
               if (!validRow(board, i, j, value) || !validColumn(board, i, j, value) | !validBox(board, i, j, value)) {
                   return false;
               }
           }
       }
   }
   return true;
};

//The row function.
function validRow(board, row, col, value) {
   // j represents on column
   for (let j = 0; j < 8; j++) {
       // check if the current column matches the passed in column
       if (j !== col) {
           if (board[row][j] === value) {
               return false; 
           }
       }
   }
   
   return true;
}

// The column function.
function validColumn(board, row, col, value) {
    // j represents on row
   for (let i = 0; i < 8; i++) {
       // check if the current row matches the passed in row
       if (i !== row) {
           if (board[i][col] === value) {
               return false; 
           }
       }
   }
   
   return true;
}

//The sub-boxes function.
function validBox(board, row, col, value) {
   const startRow = row - (row % 3), startCol = col - (col % 3);
   
   for (let i = startRow; i < startRow + 3; i++) {
       for (let j = startCol; j < startCol + 3; j++) {
           if (i !== row && j !== col) {
               if (board[i][j] === value) {
                   return false;
               }
           }
       }
   }
   
   return true;
};

//So this is a complicated one. Basically I had to determine if the allotment of numbers could theoretically make a valid sudoku
//So I had to determine if there was a repeat in the rows, columns, or squares. 
//First part is simple. Check if each individual spot (that wasn't an "." as that's blank) worked for row, column, square
//Then make separate functions for each of row, column, square.
//For row, cycle thru each number. check if it's the target. If not. good. 
//Same for column.
//Square got to get the squares right, then it's basically the same thing. 

var countAndSay = function(n) {
  var str = '1';
  var tmp = '';
  var last = '';
  var count = 0;
  var len = 0;

  for (var i = 1; i < n; i++) {
      tmp = '';
      last = '';
      count = 0;
      len = str.length;

      for (var j = 0; j < len; j++) {
          if (last === '') {
              last = str[j];
              count = 1;
              continue;
          }
          if (str[j] === last) {
              count += 1;
          } else {
              tmp += '' + count + last;
              last = str[j];
              count = 1;
          }
      }

      if (last) {
      tmp += '' + count + last;
      }

      str = tmp;
  }

  return str;
};

var solveSudoku = function(board) {
  const isValid = (row, col, board, val) => {               
      let rowDiff = Math.floor(row / 3) * 3;
      let colDiff = Math.floor(col / 3) * 3;
      
      for(let i = 0; i < board.length; i++) {
          if(board[row][i] === val) return false;
          if(board[i][col] === val) return false;
          if(board[rowDiff + Math.floor(i / 3)][colDiff + i % 3] === val) {
              return false;
          }
      }    
      return true;
  }
  
  const solve = (board) => {
      for(let row = 0; row < board.length; row++){
          for(let col = 0; col < board[row].length; col++){
              if(board[row][col] === '.') {
                  for(let i = 1; i <= 9; i++) {
                      if(isValid(row, col, board, String(i))) {
                          board[row][col] = String(i);
                          if(solve(board)) {
                              return true;
                          }
                          board[row][col] = '.';
                      }
                  }
                  return false;
              }
          }
      }
      return true;
  }
  
  solve(board);
  return board;
};


var combinationSum = function(candidates, target) {
  let answer = []
  sortedCandidates = candidates.sort((a, b) => a-b)

  function permute(tempList, remaining, start) {
      for (let i = start; i < sortedCandidates.length && sortedCandidates[i] <= remaining; i++) {
          if (sortedCandidates[i] === remaining) {
              answer.push([...tempList, sortedCandidates[i]]);
          } else {
              permute([...tempList, sortedCandidates[i]], remaining - sortedCandidates[i], i);
          }
      }
  }

  permute([], target, 0);
  return answer;
};

//This is permutation stuff. it's where you loop through the same function. But you need to have an off value obviously. 

var firstMissingPositive = function(nums) {
  nums.sort((a, b) => a - b)
  let j = 1
  for (i = 0; i < nums.length; i++) {
      // if (nums[i] < j) break
      if (nums[i] === j ) {
          j++
      }
      if (nums[i] > j) return j

  }
  return j
};
//Another hard that was actually easy. Find the smallest missing postive # in an array of numbers
//Order the list
//Make j our smallest possible positive number (1)
//Go thru ordered list and check if they have a match for j. If they do, increase j.
//If missing a j, that's the answer. 
//If array ends, then it can't have the last j. Still our answer.

var multiply = function(num1, num2) {
  //max length of a multiple is both lengths added together. So create an array of 0s of that length
  let answer = Array(num1.length + num2.length).fill(0)

  for (i=num1.length -1; i>= 0; i--) {
      for (j=num2.length-1; j >= 0; j--) {
          let product = num1[i] * num2[j]
          let index = num1.length + num2.length - 1 - (num1.length -1 -i + num2.length -1 -j )
          answer[index] += product
          if (answer[index] > 9) {
              answer[index-1] += Math.floor(answer[index]/10)
              answer[index] %= 10
          }
      }
  }
  //skip leading 0s
  while (answer[0] === 0) {
      answer.shift()
  }

  if (answer.length === 0) {
      return "0"
  }

  return answer.join("")

};


var jump = function(nums) {
  var len = nums.length;
  var step = 0;
  var now = 0;
  var max = 0;

  for (var i = 0; i < len - 1; i++) {
    max = Math.max(max, i + nums[i]);
    if (i === now) {
      step++;
      now = max;
    }
  }

  return step;
};
//neat one about jumping positions based on the number in an array. Jump the fewest times to reach the end.
//max = Math.max(max, i+nums[i]) keeps track of the furthest jump you can have based on your position
//if you reach or surpass that point, increase the jump marker and do it again.

var permute = function(nums) {
  let sol = [];
  if(nums.length <= 1) {
      return [nums];
  } 
  for(let i = 0; i < nums.length; i++) {
      let numsCopy = [...nums]; 
      numsCopy.splice(i, 1); 
      let rtnVal = permute(numsCopy);
      for(let j = 0; j < rtnVal.length; j++) {
          sol.push([nums[i], ...rtnVal[j]])
      }  
  }
  return sol;
};

var myPow = function(x, n) {
  return x**n
};
// Bit of a simple one today. Ridiculosly simple. But I'm counting it because I'm busy.

var maxSubArray = function(nums) {
  let maxSum = -Infinity
  let currentSum = 0
  // iterate through the nums, store sub-problems result
  for(let i = 0; i < nums.length; i++){ 
      //cumulating answers to the top
      
      //compare currentSum add current number 
      //with current number and store the maximum value
      currentSum = Math.max(nums[i], currentSum + nums[i])
      
      //compare maxSum with currentSum and store the greater value
      maxSum = Math.max(currentSum, maxSum)
      
  }
  return maxSum
  // if (nums.length === 1) {
  //     return nums[0]
  // }
  // let maxSum = nums[0]
  // beginning = 0
  // end = 0
  // for (i = 0; i < nums.length; i++) {
  //     if (nums[i] > maxSum) {
  //         maxSum = nums[i]
  //     }
  //     for (j = i+1; j < nums.length; j++) {
  //         let shortSum = nums.slice(i, j+1).reduce((a,b) => a+b)
  //         if (shortSum > maxSum) {
  //             beginning = i
  //             end = j
  //             maxSum = shortSum
  //         }
  //     }
  // }
  // // if (nums[nums.length-1] > maxSum) {
  // //     console.log(nums[nums.length-1])
  // //     return nums[nums.length-1]
  // // }
  // return maxSum
};

//So interesting one, almost had it alone. Never heard of this version before. Pretty neat

var spiralOrder = function(matrix) {
  let answer = []
  let horizontal = true
  let backfront = true
  let right = true
  while (matrix[0]) {
      if (horizontal === true && backfront === true) {
          answer.push(...matrix[0])
          matrix.shift()
          horizontal = false
          backfront = false
          console.log(matrix)
      }
      if (horizontal === false && right === true) {
          for (i = 0; i < matrix.length; i++) {
              let end = matrix[i].length -1
              answer.push(matrix[i][end])
              matrix[i].pop()
              if (matrix[i].length === 0) {
                  matrix.splice(i, 1)
                  i--
              }
          }
          horizontal = true
          right = false
          console.log(matrix)
      }
      if (horizontal === true && backfront === false) {
          let oldArray = matrix[matrix.length-1]
          if (oldArray) {
              for (z = oldArray.length -1; z >= 0; z--) {
                  answer.push(oldArray[z])
              }
          }
          matrix.pop()
          horizontal = false
          backfront = true
          console.log(matrix)
      }
      if (horizontal === false && right === false) {
          for (j= matrix.length -1; j >= 0; j--) {
              answer.push(matrix[j][0])
              matrix[j].shift()
              if (matrix[j].length === 0) {
                  matrix.splice(j, 1)
              }
          }
          horizontal = true
          right = true
          console.log(matrix)
      }
  }
  
  return answer
};

//Possibly the hardest one I've done w/o assistance
//Go thru a spiral an array of array of numbers, return a straigh array of all the numbers as if they were counted on a spiral
//So top row, then all the rightmost, then the bottom backwards, then up the leftmost

var spiralOrder = function (matrix) {
  let result = [];

  let i = 0;
  let j = 0;

  let hor = true;
  let forw = true;

  let turnI = 0;
  let turnJ = matrix[i].length - 1;
  let count = 0;

  let limitI = matrix.length - 1;
  let limitJ = matrix[i].length - 1;

  let flatLength = matrix.flat().length;
  while (flatLength > 0) {
    // bad solution for a bad edge case
    if (j > matrix[i].length - 1) {
        j--
        i++
    }
    result.push(matrix[i][j]);

    if (hor && forw) j++;
    else if (hor && !forw) j--;
    else if (!hor && forw) i++;
    else if (!hor && !forw) i--;

    if (i == turnI && j == turnJ) {
      // recalc turn point
      if (hor && forw) turnI = limitI - count;
      else if (!hor && forw) {
        turnJ = 0 + count;
        count++;
      } else if (hor && !forw) turnI = 0 + count;
      else if (!hor && !forw) turnJ = limitJ - count;

      // recalc direction
      if (!hor) forw = !forw;
      hor = !hor;
    }

    flatLength--;
  }

  return result;
}
//This is the fastest answer, and it's kinda beautiful. Instead just going thru every single number individually

var canJump = function(nums) {
  if (!nums.includes(0)) {
      return true
  }
  let end = nums.length
  let max = 0

  for (i = 0; i < end; i++) {
      if (i > max) {
          return false
      }
      max = Math.max(nums[i] + i, max)
  }

  return true
};

//So, if all numbers are positive = true
//if there is a 0, then the maximum value + the position of that value has to be greater than the index of that 0. 
//

var merge = function(intervals) {
  intervals.sort((a,b) => a[0] - b[0])
  answer = []
  for (i = 0; i < intervals.length; i++) {
      let start = intervals[i][0]
      let max = intervals[i][1]
      let j = i + 1
      for (j; j < intervals.length; j++) {
          if (start <= intervals[j][0] && intervals[j][0] <= max) {
              max = Math.max(max, intervals[j][1])
          }
          else {
              break
          }
      }
      answer.push([start, max])
      i = j-1

  }
  return answer
};
//My solution to merging intervals. You have an array of two point arrays. 
//The goal is to combine overlapping intervals.
//First make them in order.
//you have your first interval, compare to the later ones, and if the second point is w/in the first you make the max the higher of the 2 points
//if you get a point out of the new range, break. Push the answer into the solution, and make certain to skip all the now combined points

var merge = function(I) {
  let arr = [], i=0
  I.sort((a,b) => a[0]-b[0])
  while(i<I.length){
      let low=I[i][0], high=I[i][1]
      while(i+1<I.length && high>=I[i+1][0]) high=Math.max(high,I[++i][1])
      arr.push([low,high])
      i++
  }
  return arr
};
//My solution was slow. This is an elegant, fast solution. 
//Sort
//Basically what I did but w/ a while loop. 

var fib = function(n) {
  let fibi = [0, 1, 1]
  if (n > 2) {
      for (i = 2; i <= n; i++) {
          if (fibi.length -1 < i) {
              fibi.push(fibi[i-1] + fibi[i-2])
          }
      }
  }
  return fibi[n]
};

var distributeCandies = function(candyType) {
  candyType.sort((a, b) => a-b)
  let types = 1
  let result = 0
  for (i = 1; i < candyType.length; i++) {
      if (candyType[i] != candyType[i-1]) {
          types ++
      }
  }
  
  result = Math.min(types, candyType.length / 2)
  return result
};

//This was one of the tests. I made about a 50%. Not great.

var insert = function(intervals, newInterval) {

  let result = []
  let start = newInterval[0]
  let end = newInterval[1]

  for (i = 0; i < intervals.length; i++) {
      if (intervals[i][1] <  start || intervals[i][0] > end) {
          result.push(intervals[i])
      }
      else {
          start = Math.min(intervals[i][0], start)
          console.log(start)
          end = Math.max(intervals[i][1], end)
      }
  }
  result.push([start, end])
  result.sort((a,b) => a[0] - b[0])

  return result
};

//an array of intervals, add a new interval and then combine any overlapping ones

var lengthOfLastWord = function(s) {
  let wordLength = 0
  for (i = s.length -1; i >=0; i--) {
      if (wordLength === 0 && s[i] === " ") {
          continue
      }
      else if (wordLength !==0 && s[i] === " ") {
          break
      }
      else {
          wordLength++
      }
  }
  return wordLength
};
//Return the word length of the last word in a string. Ignore all unnecessary spaces at the end of the string
//Neat other solution 
var lengthOfLastWord = function(s) {
  let a = s.trim().split(' ');
  return a[a.length-1].length
};
//Apparently .trim() automatically cuts off the excess " "

var mySqrt = function(x) {
  return Math.floor(Math.sqrt(x))
};
//So an wasy one about finding the square root. 

var jump = function(nums) {
  var len = nums.length;
  var step = 0;
  var now = 0;
  var max = 0;

  for (var i = 0; i < len - 1; i++) {
    max = Math.max(max, i + nums[i]);
    if (i === now) {
      step++;
      now = max;
    }
  }

  return step;
};

var climbStairs = function(n) {
  if (n <= 1) {
      return 1
  }
  let fib  = [1, 1]
  for (i = 2; i <= n; i++) {
      amount = fib[i-1] + fib[i-2]
      fib.push(amount)
  }
  return fib[n]
};
//Turns out the pattern of increasing steps is just the fibonnacci sequence, who knew?


var setZeroes = function(matrix) {

  const colZero = Array(matrix[0].length);
  const rowZero = Array(matrix.length);

  for(let row = 0; row < matrix.length; row++){
      for(let col = 0; col < matrix[0].length; col++){
          if(matrix[row][col] === 0){
              colZero[row] = 0;
              rowZero[col] = 0;
          }
      }
  }

  for(let row = 0; row < matrix.length; row++){
      if(colZero[row] === 0){
          matrix[row] = Array(matrix[0].length).fill(0);
          continue;
          // because the whole array is already set to 0,
          // no need to check each value's column has 0 or not, 
          // for updating the individual value to 0.
      }
      for(let col = 0; col < matrix[0].length; col++){
          if(rowZero[col] === 0){
              matrix[row][col] = 0;
          }
      }
  }
  return matrix;
}
//This is a neat trick involving creating an empty array that still has spaces in it.
//Array(matrix[0].length) creates an empty array that still has enough open slots equal to a row of the matrix
//Then we go thru the matrix, find 0s, and fill those empty slots in the arrays to corresponding positions on the matrix
//Then go thru matrix again. if corresponding position in the arrays are 0s, make 'em 0 in matrix

var searchMatrix = function(matrix, target) {
  let len = matrix.length 
  let wid = matrix[0].length 
  if (target < matrix[0][0] || target > matrix[len-1][wid-1]) {
      return false
  }
  if (target === matrix[0][0] || target === matrix[len-1][wid-1]) {
      return true
  }
  for (i = 0; i < len; i++) {
      if (matrix[i][0] > target) {
          for (j = 0; j < wid; j++) {
              if (target === matrix[i-1][j]) {
                  return true
              }
          }
          return false
      }
  }
  for (z = 0; z < wid; z++ ) {
      if (target === matrix[len-1][z]) {
          return true
      } 
  }
  return false
};
//Search for a specific target number in a matrix w/ the following properties: nondescending rows and columns
//SO just checked the 1st number if it's a match, or if the target is out of the matrix
//Check every 1st number in row to see where the target maybe could be
//only check the row that could have a potential match

//There is also a much more efficient way of doing essentially the same thing:
var searchMatrix = function(matrix, target) {
    for(let el of matrix){
      if(el[0]<=target&&el[el.length-1]>=target){
          for(let i = 0; i<el.length;i++){
              if(el[i]===target){
                  return true;
              }
          }
      }
  }
  return false
};
//How this works: for every row in Matrix (or 'el') first check if the target could theoretically be in it
//if yes go thru the row
//if all are no, then return false
//So elegant. 

var sortColors = function(nums) {
  var m = 0;
var n = 0;
var k = nums.length;
for (var i = 0; i < k; i++) {
  if (nums[i] === 0) {
    nums[i] = 2;
    nums[n++] = 1;
    console.log(n)
    nums[m++] = 0;
  } else if (nums[i] === 1) {
    nums[i] = 2;
    nums[n++] = 1;
  } else {
    nums[i] = 2;
  }
}
};
//this is a neat one. nums[n++] and nums[m++] apparently still go to 0, but then afterward increase the value of n. So it's at position 0 not position 1 after the first pass of 2.

var subsets = function(nums) {
  let result = [];
  let temp = [];
  recursive(nums, 0);
  return result;

  function recursive(nums, i) {
      // base case
      if (i === nums.length) {
          return result.push([...temp]);
      }
      temp.push(nums[i]);
      recursive(nums, i + 1);
      temp.pop();
      recursive(nums, i + 1);
  }
};
//fastest for a recursive function. Find all possible subsets to an array of numbers. So [1, 2] = [[], [1], [2], [1, 2]]
//So how it works. You have your temp array and answer array they're empty
//your recursive function checks if you have the full length of the array
//temp gains the first, goes thru the recursive thing again, essentially getting every number on the array eventually
//But once done, pops, so removes the last element and goes thru that way. This means there will be a new one for each element
//very clever

var removeDuplicates = function(nums) {
  for (i = 0; i < nums.length-2; i++) {
      if (nums[i] === nums[i+2]) {
          nums.splice(i+2, 1)
          i--
      }
  }
};
//removes only the second duplicate in an array of numbers
//note the nums.length-2 there, which should stop things automatically once we reach the point there can be no additional duplicates.

var search = function(nums, target) {
  // if (nums.includes(target)) {
  //     return true
  // }
  // return false
  for (i = 0; i < nums.length; i++) {
      if (nums[i] == target) {
          return true
      }
  }
  return false
};
//Pretty simple a check if something is in the array question. Interestingly, the second version is faster than the .includes() version


var deleteDuplicates = function(head) {
  var now = head;
  while (now) {
      if (now.next && now.next.val === now.val) {
          now.next = now.next.next;
      } else {
          now = now.next;
      }
  }
  return head;
};
//remove duplicates from a sorted list. Notice the .next and .next.val framework. I do not like sorted lists.

var largestRectangleArea = function(heights) {
  let answer = 0;
  let testHeight = 0;
  
  for (i = 0; i < heights.length; i++) {
      let testLength = 1;
      testHeight = heights[i]
      for (j = i+1; j < heights.length; j++) {
          if (testHeight <= heights[j]) {
              testLength++
          } else {
              break
          }
      }
      if (i > 0) {
          for (k = i - 1; k >= 0; k--) {
              if (testHeight <= heights[k]) {
                  testLength++
              } else {
                  break
              }
          }
      }
      
      let max = testLength * testHeight
      if (max > answer) {
          answer = max
      }
  }
  return answer;
};
//The goal is to find the largest rectangle in a histogram. This works, but it's too slow

var largestRectangleArea = function(heights) {
  var len = heights.length;
  var stack = [];
  var max = 0;
  var h = 0;
  var w = 0;
  
  for (var i = 0; i <= len; i++) {
    while (stack.length && (i === len || heights[i] <= heights[stack[stack.length - 1]])) {
      h = heights[stack.pop()];
      w = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
      max = Math.max(max, h * w);
    }
    stack.push(i);
  }
  
  return max;
};
//This is the better answer. It uses an array called stack to create a changing limit of what fits for the largest rectangle
//Then it gives the answer to the area of that array

const [brettNum, setBrettNum] = useState(0)
const [oliverNum, setOliverNum] = useState(0)
const [danNum, setDanNum] = useState(0)
const [tonyNum, setTonyNum] = useState(0)
const [weberNum, setWeberNum] = useState(0)

const socket = new WebSocket ('wss://tso-take-home-chat-room.herokuapp.com/')

socket.onmessage = (event) => {
  let name = event.data.split(':')[0]
  let count = event.data.split(':')[1].split(' ').length-1

  if (name === "Brett") {
    setBrettNum(prevState => {
      console.log('Applying add of ' + count + ' to Brett, currently ' + prevState); 
      return (prevState+count)
    })
    console.log('Added '+ count +' to Brett, now ' + brettNum)
  }
  else if (name === "Oliver") {
    setOliverNum(prevState => {
      console.log('Applying add of ' + count + ' to Oliver, currently ' + prevState); 
      return (prevState+count)
    })
    console.log('Added '+ count +' to Oliver, now ' + oliverNum)
  }
  else if (name === "Dan") {
    setDanNum(prevState => {
      console.log('Applying add of ' + count + ' to Dan, currently ' + prevState); 
      return (prevState+count)
    })
    console.log('Added '+ count +' to Dan, now ' + danNum)
  }

  else if (name === "Tony") {
    setTonyNum(prevState => {
      console.log('Applying add of ' + count + ' to Tony, currently ' + prevState); 
      return (prevState+count)
    })
    console.log('Added '+ count +' to Tony, now ' + tonyNum)
  }

  else if (name === "Weber") {
    setWeberNum(prevState => {
      console.log('Applying add of ' + count + ' to Weber, currently ' + prevState); 
      return (prevState+count)
    })
    console.log('Added '+ count +' to Weber, now ' + weberNum)
  }
}

var merge = function(nums1, m, nums2, n) {
  nums1.splice(m, n)
  let j = 0
  for (i = 0; i < nums2.length; i++) {
      while (nums2[i] >= nums1[j] ) {
          j++
      }
      nums1.splice(j, 0, nums2[i])
      j++
  }

};

var subsetsWithDup = function(nums) {
  const result = [[]];
  nums.sort((a, b) => a - b);

  function subsetMaker(start, set = []) {
      for(let i = start; i < nums.length; i++) {
          if(i > start && nums[i] === nums[i - 1]) {
              continue;
          }
          set.push(nums[i]);
          result.push([...set]);
          subsetMaker(i + 1, set);
          set.pop();
      }
  }
  subsetMaker(0);
  return result;
}
//I still have some trouble w/ backtracking functions
//But this one is exciting, since that line if (i > start && nums[i] === nums[i-1])
//stops from repetitions ever going into result

var generate = function(numRows) {
  let ans = [];
  for (let i = 0; i < numRows; i++) {
      ans[i] = [];
      ans[i][0] = 1;
      for (let j = 1; j < i; j++) {
          ans[i][j] = ans[i-1][j-1] + ans[i-1][j]
      }
      ans[i][i] = 1;
  }
  return ans;
};
//This just creates Pascal's Triangle: you know:
//        1
//      1, 1
//     1, 2, 1
//   1, 3, 3, 1
//  1, 4, 6, 4, 1
//1, 5, 10, 10, 5, 1


  let listArray = [
    {
      user: "Brett",
      count: brettNum
    },
    {
      user: "Oliver",
      count: oliverNum
    },
    {
      user: "Dan",
      count: danNum
    },
    {
      user: "Tony",
      count: tonyNum
    },
    {
      user: "Weber",
      count: weberNum
    }
  ]

  return (
    <div className="App">
      <h2>Word Count App</h2>
      {listArray.sort((a, b) => b.count - a.count).map(x => <Card user={x.user} number={x.count}/>)}
    </div>
  );
}

export default App;
