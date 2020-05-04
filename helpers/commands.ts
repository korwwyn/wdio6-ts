const SMALL_TIMEOUT = 10000;

module.exports = {
  waitForText(element, expectedText: string) {
    const elemText = element.getText();
    browser.waitUntil(() => elemText === expectedText, {
      timeout: SMALL_TIMEOUT,
      timeoutMsg: `Expected "${elemText}" to be "${expectedText}" after ${SMALL_TIMEOUT} ms`,
    });
  },
  waitForElementsDisplayed(selector) {
    let elements;

    browser.waitUntil(
      () => {
        elements = $$(selector);
        return elements.length > 0;
      },
      {
        timeout: SMALL_TIMEOUT,
      }
    );
    // browser.saveScreenshot(`./screenshots/screen_${date}.png`);

    elements.forEach((element) => {
      browser.waitUntil(() => element.isDisplayed(), {
        timeout: SMALL_TIMEOUT,
      });
    });

    return elements;
  },
  getUrlAndTitle() {
    return {
      url: this.getUrl(),
      title: this.getTitle(),
    };
  },
};
