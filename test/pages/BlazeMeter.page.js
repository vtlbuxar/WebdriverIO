class BlazeMeter {
  get PerforceTAP() {
    return $("#SvgjsSvg1033");
  }

  get tryfreebtn() {
    return $(".try-for-free");
  }
  get serchIcon() {
    return $("#edit-actions");
  }
  get LoginBTN() {
    return $(`//a[@data-title='Login']`);
  }
  get registerBTN() {
    return $(`(//a[normalize-space()='Register'])[1]`);
  }
  get firstName() {
    return $("#firstName");
  }
  get lastName() {
    return $("#lastName");
  }
  get RegisterEmail() {
    return $("#email");
  }
  get companyName() {
    return $(`//input[@id='user.attributes.company']`);
  }
  get register_BTN() {
    return $("#kc-register");
  }
  get welcomeStartBTN() {
    return $(`//button[normalize-space()='Start!']`);
  }
  get rendomYpomail() {
    return $("#geny");
  }
  get Errormsg() {
    return $(".kc-feedback-text");
  }
  get UnsuccessfullReg_MSG() {
    return $("//div[@class='text']");
  }
  get performanceTab() {
    return $(".menu-item.performance.active");
  }
  get signinBTN() {
    return $(
      "//div[@class='page-navigation-item page-navigation-selected-item']"
    );
  }
  get functionalBTN() {
    return $(".menu-item.functional.active");
  }
  get Username() {
    return $("#username");
  }
  get password() {
    return $("#password");
  }
  get signinBTN_AfterUN_PW() {
    return $("//input[@id='kc-login']");
  }
  get creataPerformanceTest() {
    return $("//button[normalize-space()='Create a performance test']");
  }
  get WelcomeText() {
    return $("//strong[normalize-space()='Welcome!']");
  }
  get HiiStick() {
    return $("//span[@class='hi-balloon']");
  }
  get WelcomeSpiel() {
    return $("(//span[@class='description'])[1]");
  }

  async Verifyperfocebtn() {
    await this.PerforceTAP.click();
    await this.tryfreebtn.isDisplayed();
    let btn = await this.tryfreebtn.getText();
    console.log(btn);
  }
  async verifySearchIcon() {
    const searchIcon = await this.serchIcon;
    await expect(searchIcon).toBeDisplayed();
  }

  async SingintoBlaze(Firstname, Lastname, Email, Company) {
    await this.LoginBTN.click();
    await this.registerBTN.click();
    await this.firstName.setValue(Firstname);
    await this.lastName.setValue(Lastname);
    await this.RegisterEmail.setValue(Email);
    await this.companyName.setValue(Company);
    await this.register_BTN.click();
    await this.Errormsg.isDisplayed(true);
    let messege = await this.Errormsg.getText();
    console.log(messege);
    // const Error = await this.Errormsg.isDisplayed();
    // expectChai(Error).to.equal(true);
  }
  async LogintoBlaze(User_name, Pass_word) {
    await this.LoginBTN.click();
    await this.signinBTN.click();
    await this.Username.setValue(User_name);
    await this.password.setValue(Pass_word);
    await this.signinBTN_AfterUN_PW.click();
    // await await this.creataPerformanceTest.isDisplayed(true);
  }
  async toverifyFuntionalTab() {
    await this.WelcomeText.isDisplayed(true);
    await this.HiiStick.isDisplayed(true);
    const spiel = await this.WelcomeSpiel;
    await spiel.waitUntil(async function () {
      return (
        (await this.getText()) ===
        "We're happy to have you on board! Everything is set up for you to start testing"
      );
    });
    await this.WelcomeSpiel.isDisplayed(true);
  }
}
module.exports = new BlazeMeter();
