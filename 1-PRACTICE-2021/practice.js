/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */
console.log('This is a Practice');

/*
! MY CODE
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const Player1Btn = document.querySelector('#btn1');
const Player2Btn = document.querySelector('#btn2');
const resetBtn = document.querySelector('#btn3');
const GamesCount = document.querySelector('#GamesCount');

let p1Sc = 0;
let p2Sc = 0;
let winningScore;

GamesCount.addEventListener('input', function () {
  console.log(this.value);
  winningScore = parseInt(this.value);
  console.log(winningScore);
  reset();
});

let isGameOver = false;

Player1Btn.addEventListener('click', () => {
  if (!isGameOver) {
    p1Sc += 1;
    if (p1Sc === winningScore) {
      isGameOver = true;
    }
    p1Display.textContent = p1Sc;
  }
});

Player2Btn.addEventListener('click', () => {
  if (!isGameOver) {
    p2Sc += 1;
    if (p2Sc === winningScore) {
      isGameOver = true;
    }
    p2Display.textContent = p2Sc;
  }
});
function reset() {
  isGameOver = false;
  p1Sc = 0;
  p2Sc = 0;
  p1Display.textContent = 0;
  p2Display.textContent = 0;
}

resetBtn.addEventListener('click', reset);
*/

/*
// ! COLT CODE */

// const p1 = {
//   score: 0,
//   button: document.querySelector('#p1Button'),
//   display: document.querySelector('#p1Display'),
// };

// const p2 = {
//   score: 0,
//   button: document.querySelector('#p2Button'),
//   display: document.querySelector('#p2Display'),
// };
// // const p1Button = document.querySelector('#p1Button');
// // const p2Button = document.querySelector('#p2Button');
// // const p1Display = document.querySelector('#p1Display');
// // const p2Display = document.querySelector('#p2Display');
// const resetBtn = document.querySelector('#reset');
// const winningScoreSelect = document.querySelector('#playto');

// // let p1Score = 0;
// // let p2Score = 0;
// let winningScore = 3;
// let isGameOver = false;

// p1.button.addEventListener('click', () => {
//   if (!isGameOver) {
//     p1.score += 1;

//     winningPlayer(p1, p2);
//   }
// });

// p2.button.addEventListener('click', () => {
//   if (!isGameOver) {
//     p2.score += 1;
//     winningPlayer(p2, p1);
//   }
// });

// const winningPlayer = function (player, opponent) {
//   player.button.addEventListener('click', () => {
//     if (player.score === winningScore) {
//       isGameOver = true;
//       player.display.classList.add('winner');
//       opponent.display.classList.add('loser');
//     }
//     player.display.textContent = player.score;
//   });
// };

// const reset = () => {
//   isGameOver = false;
//   p1.score = 0;
//   p2.score = 0;
//   p1.display.textContent = 0;
//   p2.display.textContent = 0;
//   p1.display.classList.remove('winner', 'loser');
//   p2.display.classList.remove('winner', 'loser');
// };

// resetBtn.addEventListener('click', reset);

// winningScoreSelect.addEventListener('change', (e) => {
//   console.log(e.target.value);
//   winningScore = parseInt(e.target.value);
//   reset();
// });

// function multiply(x, y) {
//   return (x * y);
// }

// function square(x) {
//   return multiply(x, x);
// }
// function isrightTriangle(x, y, z) {
//   console.log(square(x), square(y), square(z));
//   console.log((square(x) + square(y)) === square(z));
//   return (square(x) + square(y)) === square(z);
// }

// console.log('BEFOREEE');
// isrightTriangle(3, 4, 5);
// console.log('AFTREEE');

// console.log('Fake Request: Sending Request to the Server!!!');
// setTimeout(() => {
//   console.log('Here is your Data from the server');
// }, 3000);
// console.log('I am at the END of the File');

// document.body.style.backgroundColor = 'red';
// setTimeout(() => {
//   document.body.style.backgroundColor = 'orange';
//   setTimeout(() => {
//     document.body.style.backgroundColor = 'blue';
//     setTimeout(() => {
//       document.body.style.backgroundColor = 'teal';
//       setTimeout(() => {
//         document.body.style.backgroundColor = 'violet';
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// const delayedColorChange = (newColor, delay, callbck) => {
//   setTimeout(() => {
//     document.body.style.backgroundColor = newColor;
//     callbck && callbck();
//   }, delay);
// };

// delayedColorChange('yellow', 1000, () => {
//   delayedColorChange('red', 1000, () => {
//     delayedColorChange('blue', 1000, () => {
//       delayedColorChange('green', 1000);
//     });
//   });
// });

// const fakeRequestCallback = (url, success, failure) => {
//   const delay = Math.floor((Math.random() * 4500) + 500);
//   console.log(delay);
//   setTimeout(() => {
//     if (delay > 4000) {
//       failure('Connection TimeOut '); /* failure() is a callback fnc */
//     } else {
//       success(`Here is your fake data from ${url}`); /* success() is a callbck fnc */
//     }
//   }, delay);
// };

// fakeRequestCallback('books.com/p1',
//   (response) => {
//     console.log('This has been a SUCCESS');
//     console.log(response);
//     fakeRequestCallback('books.com/p2', (response) => {
//       console.log('level2 - This has been a success');
//       console.log(response);
//       fakeRequestCallback('books.com/p3', (response) => {
//         console.log('level3 - This has been level3 success');
//         console.log(response);
//       }, (err) => {
//         console.log('level3 - error: Failure level3');
//       });
//     },
//     (err) => {
//       console.log('level2 -ERROR: FAILURE');
//       console.log(err);
//     });
//   },
//   (err) => {
//     console.log('ERROR: FAILURE');
//     console.log(err);
//   });
/*
!HOW TO CREATE A NEW PROMISE
*/
// const fakeRequest = (url) => new Promise((resolve, reject) => {
//   const rand = Math.random();
//   setTimeout(() => {
//     if (rand > 0.5) {
//       resolve('Yay, your data came through');
//       // console.log(resolve);
//     }
//     reject('It is a Connection time out and I am Sad');
//     // console.log(reject);
//   }, 1000);
// });

// fakeRequest('book/page1')
//   .then((data) => {
//     console.log('data is: ', data);
//   })
//   .catch((err) => {
//     console.log('Oh No', err);
//   });

// fakeRequestCallback('books.com/page1')
//   .then((data) => {
//     console.log('Success: Level 1');
//     return fakeRequestCallback('books.com/page2');
//   })
//   .then(() => {
//     console.log('Success: Level 2');
//     return fakeRequestCallback('books.com/page3');
//   })
//   .then(() => {
//     console.log('Success: Level 3');
//   })
//   .catch(() => {
//     console.log('ERROR: CONNECTION TIME OUT');
//   });

// const fakeRequest = (url) => new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const rand = Math.random();
//     if (rand < 0.7) {
//       resolve('Yahooo...MAZA AA GAYA');
//     } else {
//       reject('Error AA GAYA');
//     }
//   }, 1000);
// });

// const fakeRequest = (url) => new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const rand = Math.random();
//     if (rand < 0.7) {
//       resolve('Yahoo...Mazaa Done');
//     } else {
//       reject('Error :(');
//     }
//   }, 1000);
// });
// console.dir(fakeRequest('books.com/page1'));
// fakeRequest('books.com/page1')
//   .then((data) => {
//     console.log(data);
//   })
//   .then
//   .catch((err) => {
//     console.log(err);
//   });

// // function delayedColorChange1(color, delay) {
// //   return new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //       document.body.style.backgroundColor = color;
// //       resolve();
// //     }, delay);
// //   });
// // }

// const delayedColorChange1 = function (color, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       document.body.style.backgroundColor = color;
//       resolve();
//     }, delay);
//   });
// };
// delayedColorChange1('red', 1000)
//   .then(() => { delayedColorChange1('orange', 1000); })
//   .then(() => { delayedColorChange1('yellow', 1000); });
// // .then(delayedColorChange1('blue', 1000));
// // .then(delayedColorChange1('yellow', 1000));

// const delayedColorChange1 = function (color, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       document.body.style.backgroundColor = color;
//       resolve();
//     }, delay);
//   });
// };
// // delayedColorChange1('red', 1000)
// //   .then(() => { delayedColorChange1('yellow', 1000); })
// //   .then(() => { delayedColorChange1('orange', 1000); })
// //   .then(() => { delayedColorChange1('teal', 1000); });

// // delayedColorChange1('red', 1000)
// //   .then(() => { delayedColorChange1('orange', 1000); })
// //   .then(() => { delayedColorChange1('yellow', 1000); });

// delayedColorChange1('red', 1000)
//   .then(() => { delayedColorChange1('orange', 2000); })
//   .then(() => { delayedColorChange1('yellow', 1000); });

// const fakeRequest = function (url) {
//   return new Promise((resolve, reject) => {
//     const rand = Math.random();
//     setTimeout(() => {
//       if (rand < 0.5) {
//         resolve('Yay: The data has been received');
//       } else {
//         reject('ERROR :-(  ');
//       }
//     }, 1000);
//   });
// };
// console.dir(fakeRequest('book.com/page1'));
// // console.dir(fakeRequest());
// fakeRequest('book.com/page1')
//   .then((data) => {
//     console.log(`The data is : ${data}`);
//     return fakeRequest('book.com/page2');
//   })
//   .then(() => {
//     console.log('This is level 2');
//     return fakeRequest('book.com/page3');
//   })
//   .then(() => {
//     fakeRequest('book.com/page4');
//     console.log('this is level 3');
//   })
//   .catch(() => {
//     console.log('ERROR: CONNECTION TIME OUT');
//   });

// const delayedColorChange = function (color, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       document.body.style.background = color;
//       resolve();
//     }, delay);
//   });
// };

// delayedColorChange('red', 1000)
//   .then(() => delayedColorChange('orange', 1000))
//   .then(() => delayedColorChange('blue', 1000))
//   .then(() => delayedColorChange('green', 1000))
//   .then(() => delayedColorChange('red', 1000));

// const fakeRequest = async function () {
//   console.log('Worked');
//   const rand = Math.random();
//   setTimeout(() => {
//     if (rand < 0.5) {
//       console.log('Yay: The data has been received');
//     } else {
//       console.log('ERROR :-(  ');
//     }
//   }, 1000);
//   return ('just a random return statement');
// };

// console.dir(fakeRequest());
// fakeRequest()
//   .then(delayedColorChange('orange', 4000));

// async function hello() {
//   return greeting = await Promise.resolve('Hello');
// }

// hello().then(alert);

// const delayedColorChange = async function (color, delay) {
//   console.dir(delayedColorChange());
//   // return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       document.body.style.background = color;
//       // resolve();
//       // return ('HEllo');
//     }, delay);
//   });
// };

// delayedColorChange();

// async function sing() {
//   throw ('OhhhNoooo');
//   return 'LA LA LA LA ';
// }

// sing()
//   .then((data) => {
//     console.log(`Promise resolved with:${data}`);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const login = async function (userName, password) {
//   if (!userName || !password) { throw 'Missing Credentials'; }
//   if (password === 'Kunal') { return 'Welcome'; }

//   throw 'Invalid Password :(';
// };

// login('wefgw')
//   .then((data) => { console.log(`you are ${data}`); })
//   .catch((err) => {
//     console.log(`The error message is :${err}`);
//   });

// async function rainbow() {
//   await delayedColorChange('red', 1000);
//   await delayedColorChange('blue', 1000);
//   await delayedColorChange('orange', 1000);
//   await delayedColorChange('blue', 1000);
//   await delayedColorChange('green', 1000);
//   await delayedColorChange('red', 1000);
// return 'ALL DONE';
// }

// rainbow()
// .then(() => { console.log('End of Rainbow'); });

// async function printRainbow() {
//   await rainbow();
//   console.log('End of Rainbow');
// }

// printRainbow();
// async function makeTwoRequest() {
//   const data1 = await fakeRequest('book.com/page1');
//   console.log(data1);
// }

// makeTwoRequest();

// const makeRequest = async function () {
//   throw ('Error RECEIVED');
//   return 'Hello';
// };

// const colorChange = async function (color, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       document.body.style.backgroundColor = color;
//       resolve();
//     }, delay);
//   });
// };

// const rainbow = async function () {
//   await colorChange('red', 1000);
//   await colorChange('green', 1000);
//   await colorChange('yellow', 1000);
//   await colorChange('purple', 1000);
//   return 'hello';
// };

// // rainbow()
// //   .then(() => colorChange('black', 1000));

// const fakeAPIResp = function (url) {
//   return new Promise((resolve, reject) => {
//     const rand = Math.random();
//     if (rand < 0.5) {
//       resolve('Your Data has been received');
//     }
//     reject('ERROR RECEIVED');
//   });
// };

// async function makeRequests() {
//   try {
//     const data1 = await fakeAPIResp('Book.com/page1');
//     console.log(data1);
//     const data2 = await fakeAPIResp('Book.com/page2');
//     console.log(data2);
//   } catch (e) {
//     console.log('CAUGHT AN ERROR');
//     console.log('error is : ', e);
//   }
// }

// makeRequests();

// const req = new XMLHttpRequest();

// req.onload = function () {
//   console.log('ALL DONE WITH REQUEST');
//   console.log(this);
//   const parsedData = JSON.parse(this.responseText);
//   console.log(parsedData);
//   console.log(parsedData.network.name);
//   const { genres } = parsedData;
//   genres.forEach((element) => {
//     console.log(element);
//   });
// };

// req.onerror = function (e) {
//   console.log('ERROR');
//   console.log(e);
//   console.log(this);
// };

// req.open('GET', 'http://api.tvmaze.com/singlesearch/shows?q=girls');
// req.send();

// fetch('https://restcountries.eu/rest/v2/all')
//   .then((res) => {
//     console.log('RESPONSE', res);
//     console.dir(res);
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => {
//     console.log('Oh No! ERROR', e);
//   });

// const fetchFunc = async () => {
//   try {
//     const fetchdata = await fetch('https://restcountries.eu/rest/v2/all');
//     console.log(fetchdata);
//     const fetchedJSON = await fetchdata.json();
//     console.log(fetchedJSON);
//   } catch (e) {
//     console.log('ERROR: :(', e);
//   }
// };

// const funcBitCoin = () => {
//   axios.get('https://api.cryptonator.com/api/full/btc-usd')
//     .then((response) => {
//       console.log(response.data.ticker.price);
//     })

//     .catch((e) => {
//       console.log('ERROR is:((( ', e);
//     });
// };

// const propSeq = async () => {
//   try {
//     await fetchFunc();

//     await funcBitCoin();
//   } catch (e) {
//     console.log('ERROR is :(', e);
//   }
// };

// propSeq();

// const bitCoinAsync = async () => {
//   try {
//     const response = await axios.get('https://api.cryptonator.com/api/full/btc-usd');
//     console.log(response.data.ticker.price);
//   } catch (e) {
//     console.log('ERROR is:((( ', e);
//   }
// };

// bitCoinAsync();

// const dadJoke = async () => {
//   try {
//     const config = { headers: { Accept: 'application/json' } };
//     const response = await axios.get('https://icanhazdadjoke.com/', config);
//     console.log(response);
//     console.log(response.data.joke);
//   } catch (e) {
//     console.log('ERROR IS: ', e);
//   }
// };
// dadJoke();

/*
! My WAY
const jokeSection = document.querySelector('.jokeSection');
// const jokeBtn = document.querySelector('#btn');

// const jokeRespo = async () => {
//   try {
//     const config = { headers: { Accept: 'application/json' } };
//     const res = await axios.get('https://icanhazdadjoke.com/', config);
//     const jokePrint = res.data.joke;
//     const newUL = document.createElement('UL');
//     const newLI = document.createElement('LI');
//     newUL.className = 'newUList';
//     newUL.append(newLI);

//     newLI.append(jokePrint);
//     document.querySelector('.jokes').append(newLI);

//     // document.querySelector('.newUList').append(newLI);
//   } catch (e) {
//     jokeSection.innerHTML = '<p> There has been some Error </p>';
//     console.log('ERROR is : ', e);
//   }
// };

// const jokeSecCreated = () => {
//   jokeSection.style.width = '50%';
//   jokeSection.style.backgroundColor = 'pink';
// };

// jokeBtn.addEventListener('click', ((e) => {
//   console.log(e);
//   jokeRespo();
//   jokeSecCreated();
// }));
*/

// /*
// !COLT's Way */
// const jokeBtn = document.querySelector('#btn');

// const jokes = document.querySelector('.jokes');
// const addNewJoke = async () => {
//   const jokeText = await getDadJoke();
//   const newLI = document.createElement('LI');
//   newLI.append(jokeText);
//   jokes.append(newLI);
// };

// const getDadJoke = async () => {
//   try {
//     const config = { headers: { Accept: 'application/json' } };
//     const res = await axios.get('https://icanhazdadjoke.com/ ', config);
//     return (res.data.joke);
//   } catch (e) {
//     jokes.textContent = 'The ERROR HAS OCCURED';
//   }
// };

// jokeBtn.addEventListener('click', () => {
//   addNewJoke();
// });

/* Date: 13Feb */

const jokeSec = document.querySelector('.jokes');
const jokeBtn = document.querySelector('#btn');

const getJoke = async function () {
  try {
    const config = { headers: { Accept: 'application/json' } };
    const res = await axios.get('https://icanhazdadjoke.com/', config);
    const { joke } = res.data;
    console.log(joke);
    return joke;
  } catch (e) {
    console.log('ERROR HAS OCCURED:(', e);
  }
};
const addJoke = async () => {
  const jokeText = await getJoke();
  const newLI = document.createElement('LI');
  newLI.append(jokeText);
  jokeSec.append(newLI);
};

jokeBtn.addEventListener('click', async () => {
  await addJoke();
});

// /////////////////////////////////////

const form = document.querySelector('#searchForm');
const btn = document.querySelector('#btn');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const userQuery = (e.target[0].value);
  console.log(userQuery);
  const config = { params: { q: userQuery, isFunny: 'Kunal' } };
  const res = await axios.get('http://api.tvmaze.com/search/shows?', config);
  makeImages(res.data);
  e.target[0].value = ' ';
});

const makeImages = (shows) => {
  for (const iterator of shows) {
    if (iterator.show.image) {
      const img = document.createElement('IMG');
      img.src = (iterator.show.image.medium);
      document.body.append(img);
    }
  }
};

/*
* ****************    Date Feb 14     ******************
*/
console.dir(Array.prototype);
console.dir(Object.prototype);
console.dir(Function.prototype);
console.dir(String.prototype);
console.dir(Number.prototype);
console.dir(Window.prototype);
console.dir(window);
// console.dir(window.prototype);
const myName = 'Kunal Dixit';
String.prototype.yell = () => {
  console.log(`My name is ${myName}`);
};
// myName.yell();

/** ********** FACTORY FUNCTIONS ************ */
function makeColhex(r, g, b) {
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}

function rgb(r, g, b) {
  return `rgb(${r},${g},${b})`;
}
const makeCol1 = makeColhex(255, 30, 40);
// console.log(makeCol1);
const makeCol2 = rgb(123, 345, 321);
// console.log(makeCol2);

// ! Making a Factory function for creating Objects

const makeColor = function (r, g, b) {
  const Color = {};
  Color.r = r;
  Color.g = g;
  Color.b = b;

  Color.hex = function () {
    console.log(this);
    const { r, g, b } = this;
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
  };

  Color.rgb = function () {
    const { r, g, b } = this;
    return `rgb(${r},${g},${b})`;
  };

  return Color;
};

const ColorMaker = makeColor(234, 90, 123);
// console.dir(ColorMaker);

// console.log(ColorMaker.r);
// console.log(ColorMaker.hex());
// console.log(ColorMaker.rgb());

// ! The factory function discussed above is not the most ideal even if that it does the job i.e.  creating multiple objects based on a certain pattern described in the function

/* The shortfall in above method is that it creates the function hex() and rgb() as unique 'key pairs' for each object that it creates, and doesnt make it as part of the 'Object'prototype
*/
//! The most ideal way is the constructor Function

// function Color(r, g, b) {
//   this.r = r;
//   this.g = g;
//   this.b = b;
//   console.log(this);
// }

// const color1 = new Color(123, 234, 50);
// Color.prototype.hex = function () {
//   console.log(this);
//   const { r, g, b } = this;
//   return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
// };
// const color2 = new Color(234, 123, 43);

// const newCol2 = color2.hex();
// console.log(newCol2);
// const newCol1 = color1.hex();
// console.log(newCol1);

//  ! Class syntax:

// class Color {
//   constructor(r, g, b, name) {
//     this.r = r;
//     this.g = g;
//     this.b = b;
//     this.name = name;
//   }

//   greet() {
//     return (`Hello from ${this.name}!`);
//   }

//   rgb() {
//     const { r, g, b } = this;
//     return `rgb(${r},${g},${b})`;
//   }

//   hex() {
//     const { r, g, b } = this;
//     return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
//   }
// }
// const c1 = new Color(233, 234, 23, 'red');
// console.log(c1);
// console.log(c1.greet());
// console.log(c1.rgb());
// console.log(c1.hex())  ;

class Pet {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    return `${this.name} is eating!`;
  }
}

class Cat extends Pet {
  // eslint-disable-next-line class-methods-use-this
  meow() {
    // eslint-disable-next-line quotes
    return `MEOWWWW`;
  }
}

class Dog extends Pet {
  bark() {
    return 'WOOOOFFFF';
  }
}

const monty = new Cat('monty', 3);
const wyatt = new Dog('wyatt', 9);
console.log(wyatt.eat());
console.log(monty.eat());

const a1 = 7;
let a2 = a1;
a2 = 3;

console.log(a1, a2);

const obj1 = {
  name: 'Kunal',
};
const obj2 = obj1;
console.log(obj1, obj2);
obj2.name = 'Sonal';
console.log(obj1, obj2);
