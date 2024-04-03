import puppeteer from "puppeteer";

(async () => {
  console.log("Launching Chrome...");
  const browser = await puppeteer.launch({
    headless: false,
    args: [
      "--disable-gpu",
      "--disable-dev-shm-usage",
      "--disable-setuid-sandbox",
      "--no-first-run",
      "--no-sandbox",
      "--no-zygote",
      "--single-process",
    ],
  });
  const page = await browser.newPage();
  await page.goto("https://www.linkedin.com");

  await page.screenshot({
    path: "test.jpg",
  });
})();
