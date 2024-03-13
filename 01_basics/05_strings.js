const name = "sohag"
const repoCount = 10

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('sohag-sb-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('h'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-1, 1)
console.log(anotherString);

const newStringOne = "   sohag    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://sohag.com/sohag%20banerjee"

console.log(url.replace('%20', '-'))

console.log(url.includes('babai'))

console.log(gameName.split('-'));