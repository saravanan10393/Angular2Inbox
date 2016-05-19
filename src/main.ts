import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { InboxAppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(InboxAppComponent);

