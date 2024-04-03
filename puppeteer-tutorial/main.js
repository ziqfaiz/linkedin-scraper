const puppeteer = require('puppeteer');

(async () => {
	const browser = await puppeteer.launch();
    console.log("Browser launched")
	const page = await browser.newPage();
	await page.goto('https://www.linkedin.com/');
    console.log("Went to linkedin.com");
    await page.screenshot({path: 'main-page.png'});
	
	await browser.close();
})();