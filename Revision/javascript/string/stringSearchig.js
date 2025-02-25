let str = 'lokesh iyyappan'

//indexof
console.log(str.indexOf('l'));// strats search from begining of the string
console.log(str.indexOf('l',2));// starts to search from 2nd index so it return -1 indicate l not present
console.log(str.indexOf(''))//empty string gives start index

//lastIndexOf()
console.log(str.lastIndexOf('n'))// gives the last occurence of the character in the string
console.log(str.lastIndexOf('y',8))// search from the specified index
console.log(str.lastIndexOf(''))//empty string gives last index

//Includes()
console.log(str.includes('iyya'))// returns true
console.log(str.includes('iyy',12))// search from specifiede index returns false
console.log(str.includes(""))//empty string returns true
console.log(str.includes())//null returns false

//Starts and ends with
console.log(str.startsWith('lok'))//returns true
console.log(str.startsWith('lok',5))//returns false
console.log(str.endsWith('pan'))//retuns true
console.log(str.endsWith('pan',2))