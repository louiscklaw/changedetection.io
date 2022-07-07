const page = require("./page");

const TestDiffButton = '//a[@target="ca376d33-7c8c-41f2-8de5-4181c60e9fa1"]';

class ChangeDetectDashboard {
  async clickDiffButton() {
    return await page.click(TestDiffButton);
  }

  async switchToDiffWindow() {
    return await browser.switchWindow(/.*Diff.*/);
  }
  async suspend(timeout_s) {
    return await page.waitUntilClickable('//*[@hello="world"]', timeout_s);
  }
}

module.exports = new ChangeDetectDashboard();
