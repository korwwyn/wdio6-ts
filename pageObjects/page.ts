export default class Page {
  title: string;
  constructor() {
    this.title = 'My Page';
  }

  public open(path: string): void {
    browser.url(path);
  }
}