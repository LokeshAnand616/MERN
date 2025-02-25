function mostFrequentWord(str) {
    let words = str.split(" ");
    let freq = {};

    for (let word of words) {
        freq[word] = (freq[word] || 0) + 1;
    }

    return Object.keys(freq).reduce((a, b) => freq[a] >= freq[b] ? a : b);
}

console.log(mostFrequentWord("apple banana apple orange apple banana")); 
