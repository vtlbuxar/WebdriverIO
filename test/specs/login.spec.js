const loginPage = require("../pages/login.page");
const LoginPage = require("../pages/login.page");
describe("Demo test", () => {
  it("Login test", async () => {
    await browser.url(
      "https://www.timeanddate.com/worldclock/philippines/manila"
    );
    // await LoginPage.Login('tomsmith', 'SuperSecretPassword!')
    // await LoginPage.checkmessege('You logged into a secure area!')
    await LoginPage.checktext();
  });
});
