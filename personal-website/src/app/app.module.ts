import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// routing dependencies
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// other dependencies
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'; 

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
