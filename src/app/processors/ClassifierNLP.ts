const ml5 = require("ml5");
const puppeteer = require("puppeteer");
const filesys = require("fs");

export default class ClassifierNLP {
  init() {
    console.log("Hemingway Model is loaded/employed.");
  }

  gen(input: String) {
    this.rnn.generate({seed: input}, (err: Error, res: any) => {
      if (res) console.log(res);
      else console.log(err);
    });
  }

  private rnn = ml5.charNN("models/hemingway", this.init);
  private sentiment = ml5.sentiment
};