class LoginPage {
  get usernameTextbox() {
    return $("#username");
  }
  get passwordtextbox() {
    return $("#password");
  }
  get loginButton() {
    return $('button[type="submit"]');
  }
  get successLoginmessege() {
    return $("#flash");
  }
  get Timetest() {
    return $(
      `//h1[normalize-space()='Current Local Time in Manila, Philippines']`
    );
  }

  async Login(Username, password) {
    await this.usernameTextbox.setValue(Username);
    await this.passwordtextbox.setValue(password);
    await this.loginButton.click();
  }
  async checkmessege(msg) {
    await expect(this.successLoginmessege).toHaveTextContaining(msg);
  }
  async checktext() {
    let a = await this.Timetest.getText();
    console.log(a);
  }
}
module.exports = new LoginPage();
