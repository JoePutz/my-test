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
