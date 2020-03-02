
class RegisterPage {

  constructor() {
    this.url = 'https://account.bbc.com/register';
    this.overThen13Btn = element(by.css('[aria-label ="13 or over"]'));
    this.dayInput = element(by.id('day-input'));
    this.monthInput = element(by.id('month-input'));
    this.yearInput = element(by.id('year-input'));
    this.continueBtn = element(by.id('submit-button'));
    this.email = element(by.id('user-identifier-input'));
    this.password = element(by.id('password-input'));
    this.submitBtn = element(by.id('submit-button'));
    this.emailValue = `a${new Date().getTime()}@com.com`;
    this.passwordValue = `pass1234`;
  }

  async visit() {
    await browser.get(this.url);
  }
}
module.exports = RegisterPage;
