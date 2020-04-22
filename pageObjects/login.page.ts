// const Page = require('../page');
import Page from './page'

class LoginPage extends Page {

  public get username() { return $('#username'); }
  public get password() { return $('#password'); }
  public get submitBtn() { return $('form button[type="submit"]'); }
  public get flash() { return $('#flash'); }
  public get headerLinks() { return $$('#header a'); }

  public open(): void {
    super.open('login');
  }

  public submit(): void {
    this.submitBtn.click();
  }

}

export default new LoginPage();