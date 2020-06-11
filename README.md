# Simple Amazon Scraper
A node package that allows you to scrape the name and price of a URL from Amazon.
- Currently only supports US urls.

# Installation

```shell
npm install simple-amazon-scraper
```

# Usage
### Using .then()
```js
const amazon = require('simple-amazon-scraper');

amazon('ProductURL')
.then(product => console.log(product));
// Result:
// {
//   price: '$amount',
//   name: 'some long item name'
// }
```
### Using async/await

```js
const amazon = require('simple-amazon-scraper');
(async() => {
    const product = await amazon('ProductURL')
    console.log(product);
})();
// Result:
// {
//   price: '$amount',
//   name: 'some long item name'
// }
```

