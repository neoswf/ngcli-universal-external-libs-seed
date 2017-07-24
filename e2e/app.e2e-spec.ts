import { NgcliUniversalExternalUiSeed } from './app.po';

describe('ngcli-universal-external-ui-seed App', () => {
  let page: NgcliUniversalExternalUiSeed;

  beforeEach(() => {
    page = new NgcliUniversalExternalUiSeed();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
