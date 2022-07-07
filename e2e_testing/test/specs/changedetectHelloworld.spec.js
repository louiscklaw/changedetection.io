// const devAssetMainPage = require("../pageobjects/devAssetMain.page");
const changedetectDashboardPage = require("../pageobjects/changedetectDashboard.page");
const changedetectDiffPage = require("../pageobjects/changedetectDiff.page");
// const helper = require("../pageobjects/helper");
const { expect } = require("chai");
// const baseUrl = require("../../data/baseURL");

describe("login to account", () => {
  before("land to page", async () => {
    await browser.url("http://192.168.10.61:5000");
  });
  // after("logout", async () => {
  //   await helper.logout();
  // });
  it("landing on dashboard page", async () => {
    await changedetectDashboardPage.clickDiffButton();
    await changedetectDashboardPage.switchToDiffWindow();
    await changedetectDiffPage.clickEditButton();
    await browser.back();
    await expect(await changedetectDiffPage.checkEleDiffUiExist()).true;

    await browser.saveScreenshot("screenshots/empty_page.png");
  });
});
