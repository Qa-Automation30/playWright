class Login {
    constructor(page) {
        this.page = page;
        this.userEmail = page.locator("#userEmail");
        this.password = page.locator("#userPassword");
        this.loginButton = page.locator("[type='submit']");
    }
    async validLogin(userName, password) {
        await this.userEmail.fill(userName);
        await this.password.fill(password);
        await this.loginButton.click();

    }
    async goToLoginPage() {
        await this.page.goto("https://rahulshettyacademy.com/client");
    }
}
module.exports = { Login }