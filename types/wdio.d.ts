declare module WebdriverIO {
  // adding command to `browser`
  interface Browser {  
    getUrlAndTitle: () => {url: string; title: string};
    waitForText: () => void;
  }
}