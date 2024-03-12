class LoginPage{

get usernameTextbox(){
    return $('#username')
}
get passwordtextbox(){
    return $('#password')
}
get  loginButton(){
    return $('button[type="submit"]')
}
get successLoginmessege(){
    return $('#flash')
}




async Login(Username, password){
    await this.usernameTextbox.setValue(Username)
    await this.passwordtextbox.setValue(password)
    await this.loginButton.click()
}
async checkmessege(msg){
    await expect (this.successLoginmessege).toHaveTextContaining(msg)
}
}
module.exports =new LoginPage()