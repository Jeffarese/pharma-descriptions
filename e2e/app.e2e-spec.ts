import { PharmaDescriptionsPage } from './app.po';

describe('pharma-descriptions App', function() {
  let page: PharmaDescriptionsPage;

  beforeEach(() => {
    page = new PharmaDescriptionsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
