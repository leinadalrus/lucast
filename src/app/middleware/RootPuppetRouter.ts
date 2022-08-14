import puppeteer, { Puppeteer } from "puppeteer";

export default class RootPuppetRouter {  
  async init() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto("https://127.0.0.1:8080");

    const retval = {
      behavior: "allow",
      downloadPath: "./"
    };

    return retval;
  }
};