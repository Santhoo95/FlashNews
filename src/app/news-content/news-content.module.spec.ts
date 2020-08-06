import { NewsContentModule } from './news-content.module';

describe('NewsContentModule', () => {
  let newsContentModule: NewsContentModule;

  beforeEach(() => {
    newsContentModule = new NewsContentModule();
  });

  it('should create an instance', () => {
    expect(newsContentModule).toBeTruthy();
  });
});
