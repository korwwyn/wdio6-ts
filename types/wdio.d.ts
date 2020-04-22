declare module WebdriverIO {
  // adding command to `browser`
  interface Browser {
      browserCustomCommand: (arg) => void

      getUrlAndTitle: typeof getUrlAndTitle
  }
}

function getUrlAndTitle() {
  return {
    url: this.getUrl(),
    title: this.getTitle()
  }
}

browser.addCommand('getUrlAndTitle', getUrlAndTitle);