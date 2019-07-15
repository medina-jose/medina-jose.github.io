import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// routing 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// other dependencies
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component'; 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
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
