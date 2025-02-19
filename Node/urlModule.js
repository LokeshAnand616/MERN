//url string
const urlString = "https://example.com:8080/path?query=value#hash";
console.log("ulr string\n",urlString);

//url object
const url = new URL("https://example.com:8080/path?query=value#hash");
console.log("url object\n")
console.log(url.hostname); // example.com
console.log(url.port); // 8080
console.log(url.pathname); // /path

//constructing a URL from components
const myURL = new URL("https://example.com");
myURL.pathname = "/page";
myURL.search = "?query=test";
myURL.hash = "#section1";

console.log(myURL.toString());
// Output: "https://example.com/page?query=test#section1"

//The WHATWG (Web Hypertext Application Technology Working Group)'
//  URL API is the modern approach to handling URLs in Node.js.

const url2 = new URL("https://user:pass@example.com:8080/path?query=value#hash");
console.log(url2.protocol); // "https:"
console.log(url2.host); // "example.com:8080"
console.log(url2.pathname); // "/path"
console.log(url2.search); // "?query=value"
console.log(url2.hash); // "#hash"

