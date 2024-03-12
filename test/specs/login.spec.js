const LoginPage = require('../pages/login.page')
describe('Demo test', ()=>{

    it('Login test', async()=>{

await browser.url('https://the-internet.herokuapp.com/login')

await LoginPage.Login('tomsmith', 'SuperSecretPassword!')
await LoginPage.checkmessege('You logged into a secure area!')


    })
})