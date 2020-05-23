# Simple Amazon Scraper
A node package that allows you to scrape the name and price of a URL from Amazon.
- Currently only supports US urls.

# Installation

```shell
npm install simple-amazon-scraper
```

## Usage

```js
const amazon = require('simple-amazon-scraper');

amazon('ProductURL')
.then(product => console.log(product));
// Result:
{
  price: '$amount',
  name: 'some long item name'
}
```


