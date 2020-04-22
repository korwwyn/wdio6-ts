import { expect } from 'chai';

describe('webdriver.io page', () => {
  it('should have the right title', () => {
    browser.url('https://webdriver.io')
    const title = browser.getTitle()
    expect(title).to.deep.equal('WebdriverIO · Next-gen browser automation test framework for Node.js')
  })
  
})