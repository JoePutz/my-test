import './App.css';
import React, {useState} from 'react';
import Card from './components/Card';

function App() {


//alright, gonna make this my leetcode practice 

function onCheck() {
  const button = document.querySelector('#button')
  
  const disableButton = () => {
    button.disabled = true;
  }


}

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
