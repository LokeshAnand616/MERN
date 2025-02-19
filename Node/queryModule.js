const querystring = require('node:querystring');

// Sample query string
const queryString = 'name=Lokesh&age=22&hobby=coding&hobby=gaming';

const parsedObj = querystring.parse(queryString);
console.log('Parsed Object:', parsedObj);

const newQueryString = querystring.stringify(parsedObj);
console.log('Stringified Query:', newQueryString);

const escapedString = querystring.escape('Hello World & Good Morning!');
console.log('Escaped String:', escapedString);

const unescapedString = querystring.unescape(escapedString);
console.log('Unescaped String:', unescapedString);
