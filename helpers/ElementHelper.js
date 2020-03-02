class ElementHelper {

  async setElementValue(element, value) {
    console.log(`setElementValue element: ${element.locator()}; value: ${value}`);
    await element.sendKeys(value);
  }

  async waitForVisibilityOf(element, timeOut) {
    const timeoutMs = await timeOut || browser.params.defaultTimeOut;
    console.log(`waitForVisibilityOf: element: ${element.locator()} timeout: ${timeoutMs}`);
    await browser.wait(protractor.ExpectedConditions.visibilityOf(element), timeoutMs,
      `Waiting for visibilityOf of ${element.locator()} failed`);
  }

  async clickOnElement(element) {
    console.log(`clickOnElement element: ${element.locator()}`);
    await element.click();
  }
}
module.exports = ElementHelper;
