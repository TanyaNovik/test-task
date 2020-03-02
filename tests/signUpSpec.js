const RegisterPage = require('./../po/RegisterPage'),
  ElementHelper = require('./../helpers/ElementHelper');

describe('Register page', () => {
  let page, helper;

  beforeAll(async () => {
    page = new RegisterPage();
    helper = new ElementHelper();
    await browser.waitForAngularEnabled(false);
  });

  afterAll(async () => {
    await browser.waitForAngularEnabled(true);
  })

  it('should be able to sign up', async () => {
    await page.visit();
    await helper.waitForVisibilityOf(page.overThen13Btn);
    await helper.clickOnElement(page.overThen13Btn);
    await helper.waitForVisibilityOf(page.dayInput);
    await helper.setElementValue(page.dayInput, 10);
    await helper.setElementValue(page.monthInput, 10);
    await helper.setElementValue(page.yearInput, 1991);
    await helper.clickOnElement(page.continueBtn);
    await helper.waitForVisibilityOf(page.email);
    await helper.setElementValue(page.email, page.emailValue);
    await helper.setElementValue(page.password, page.passwordValue);
    await helper.clickOnElement(page.submitBtn);
    expect(browser.getTitle()).toBe('BBC – Register – thank you');
  });


});