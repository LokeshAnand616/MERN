let str = 'lokesh iyyappan'

console.log(str.length)//give the length of the string

//at()
console.log('using str.at()')
console.log(str.at(0)); //counts from first 
console.log(str.at(-1)); // counts from last
console.log(str.at(6));//takes white spaces  
console.log(str.at(16),'\n');//While trying to access the index exceed the string length it will give undefined value

//charAt()
console.log('using str.charAt()');
console.log(str.charAt(0));
console.log(typeof str.charAt(-1)); //while try to get with negative values it just return empty string it wont count back
console.log(str.charAt(16),'\n'); // If we try to access the string out of the index it will return a empty string

//charCodeAt()
console.log('using str.charCodeAt()')
console.log(str.charCodeAt(0));//gives the ascii value of the string
console.log(str.charCodeAt(-1))//gives NaN as result
console.log(str.charCodeAt(16),'\n')

//slice()
console.log(str.slice(7,15))// it extract the value from strat index to end index
console.log(str.slice())// if we didt specify the start and end index it will take the copy of entire array
console.log(str.slice(3))// if we didt specify the end index it will take the string's end index
console.log(str.slice(-15,-1))// we can specify the negative index it will count from back
console.log(str.slice(4,1))//


