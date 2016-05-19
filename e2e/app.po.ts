export class InboxPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('inbox-app h1')).getText();
  }
}
