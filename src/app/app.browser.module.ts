import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';

/*Code that breaks the NG APP when importing SUI on app.browser.module, but works well when imported on app.module*/
// import {SuiModule} from 'ng2-semantic-ui';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    AppModule,
    // SuiModule,
  ],
  bootstrap: [ AppComponent ]
})
export class AppBrowserModule {}
