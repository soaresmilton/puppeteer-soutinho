const puppeteer = require('puppeteer');


async function robo() {

  const referenceCurrency = "dolar";
  const convertedCurrency = "real";

  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  const conversionURL = `https://www.google.com/search?q=${referenceCurrency}+para+${convertedCurrency}&oq=${referenceCurrency}+para+${convertedCurrency}&aqs=chrome.0.69i59j69i57j0i512j0i131i433i512j0i512l6.1525j1j1&sourceid=chrome&ie=UTF-8`;
  await page.goto(conversionURL);

  const convertedValue = await page.evaluate(() => {
    return document.querySelector(".a61j6.vk_gy.vk_sh.Hg3mWc").value;
  });

  console.log(`O valor de 1 ${referenceCurrency} em ${convertedCurrency} é ${convertedValue}`)

  await browser.close();
}

robo();