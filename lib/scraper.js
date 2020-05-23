const axios = require('axios');
const cherrio = require('cheerio');

async function getHTML(url) {
  const { data } = await axios.get(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.90 Safari/537.36'
    }
  })
  .catch(e => {
    if(e.message.includes("503")) e.message = "Possible ratelimiting. Try again later";
    
    return console.log(`Amazon Scraper: ${e.message}`);
  });
  return data;
}

function getPrice(html) {
  const c = cherrio.load(html);
  const s = c('#priceblock_ourprice');
  return s.html().trim();
}
function getName(html) {
  const c = cherrio.load(html);
  const s = c('#produceTitle');
  return s.html().trim();
}

async function scrape(product) {
  const html = await getHTML(product);
  const price = await getPrice(html);
  const name = await getName(html);
  
  return { price, name }

}

exports.scrape = scrape;
