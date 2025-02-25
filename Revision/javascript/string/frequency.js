function getCharFrequencyObject(str){
    const charFreq = {};
    for(let char of str){
        charFreq[char] = (charFreq[char]||0)+1;
    }
    return charFreq
}
console.log(getCharFrequencyObject("swiss")); 
