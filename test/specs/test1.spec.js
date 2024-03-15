const { Browser } = require("selenium-webdriver");

describe("demo test", function () {
  it.skip("my 1st test", async () => {
    browser.url("https://www.google.com");
    await $('[name="q"]').setValue("Webdriverio");
    await $(`(//input[@name='btnK'])[2]`).click();
    await $(`((//*[name()='svg'][@focusable='false'])[2])`).click();
    await $('[name="q"]').setValue("Puri jagannath");
    browser.keys("Enter");
    browser.pause(10000);
  });
});
