import { AngularCli22.05.17Page } from './app.po';

describe('angular-cli22.05.17 App', () => {
  let page: AngularCli22.05.17Page;

  beforeEach(() => {
    page = new AngularCli22.05.17Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
