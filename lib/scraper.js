const axios = require('axios');
const cherrio = require('cheerio');

async function getHTML(url) {
  if(!url.includes('amazon.com/dp')) throw new Error("Please provide a valid URL. EX: https://amazon.com/dp/B07D1XCKWW");
  const d = await axios.get(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.90 Safari/537.36'
    }
  })
  .catch(e => {
    if(e.message.includes("503")) e.message = "Possible ratelimiting. Try again later";
    return console.log(`Amazon Scraper: ${e.message}`);
  });
  return d.data;
}

async function getPrice(html) {
  const c = await cherrio.load(html);
  const s = await c('#priceblock_ourprice');
  const l = await s.html();
  return l.trim();
}
async function getName(html) {
  const c = await cherrio.load(html);
  const s = await c('#productTitle');
  const l = await s.html();
  return l.trim();
}

async function scrape(product) {
  const html = await getHTML(product);
  const price = await getPrice(html);
  const name = await getName(html);
  
  return { price, name }

}

module.exports = scrape;
