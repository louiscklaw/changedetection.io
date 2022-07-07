const page = require("./page");

const eleEditButton = '//*[contains(text(), "EDIT")]';
const eleDiffUi = '//*[@id="diff-ui"]';

class ChangedetectDiff {
  async helloWorld() {
    console.log("helloworld");
    return;
  }
  async clickEditButton() {
    return await page.click(eleEditButton);
  }

  async checkEleDiffUiExist() {
    return page.isElementExisting(eleDiffUi);
  }
  async suspend(timeout_s) {
    return await page.waitUntilClickable('//*[@hello="world"]', timeout_s);
  }
}

module.exports = new ChangedetectDiff();
