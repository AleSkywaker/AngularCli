import { browser, by, element } from 'protractor';

export class AngularCli22.05.17Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
