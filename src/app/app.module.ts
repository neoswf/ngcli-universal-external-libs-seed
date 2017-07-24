import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

/*Code that breaks the NG APP when importing SUI on app.browser.module, but works well when imported on app.module*/
// import {SuiModule} from 'ng2-semantic-ui';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'ngcli-universal-seed-app'}),
    FormsModule,
    HttpModule,
    AppRoutingModule,
    // SuiModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
