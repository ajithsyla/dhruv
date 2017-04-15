import { DhruvPage } from './app.po';

describe('dhruv App', () => {
  let page: DhruvPage;

  beforeEach(() => {
    page = new DhruvPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
