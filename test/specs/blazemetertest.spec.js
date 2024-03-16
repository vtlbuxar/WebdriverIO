const BlazeMeterPage = require("../pages/BlazeMeter.page");
const WebTestdata = require("../../testdata/WebTestdata.json");

describe("Blazemeter tests", async () => {
  beforeEach(async () => {
    await browser.url(WebTestdata.Blaze.BlazeURL);
    await browser.maximizeWindow();
  });
  it("[Web-01]Verify that upon tapping on Perforce Button user should see the TRY FREE button ", async () => {
    await BlazeMeterPage.Verifyperfocebtn();
  });

  it("[Web-02]Verify that user should see the search icon in the BlazeMeter page", async () => {
    await BlazeMeterPage.verifySearchIcon();
  });
  it("[Web-05]Verify that if user register with existing email id", async () => {
    await BlazeMeterPage.SingintoBlaze(
      WebTestdata.Blaze.FN,
      WebTestdata.Blaze.LN,
      WebTestdata.Blaze.Company,
      WebTestdata.Blaze.Email
    );
  });
  it("[Web-04]Verify that user should successfully signin to blaze", async () => {
    await BlazeMeterPage.LogintoBlaze(
      WebTestdata.yopmail.UserEmail,
      WebTestdata.yopmail.Password
    );
  });
  it.only("[Web-06]Verify that Upon tapping on functional tap Welcome text should display", async () => {
    await BlazeMeterPage.LogintoBlaze(
      WebTestdata.yopmail.UserEmail,
      WebTestdata.yopmail.Password
    );
    await BlazeMeterPage.toverifyFuntionalTab();
  });
});
