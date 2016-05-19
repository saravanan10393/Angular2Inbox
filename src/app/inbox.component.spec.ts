import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { InboxAppComponent } from '../app/inbox.component';

beforeEachProviders(() => [InboxAppComponent]);

describe('App: Inbox', () => {
  it('should create the app',
      inject([InboxAppComponent], (app: InboxAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'inbox works!\'',
      inject([InboxAppComponent], (app: InboxAppComponent) => {
    expect(app.title).toEqual('inbox works!');
  }));
});
