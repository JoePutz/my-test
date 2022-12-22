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
