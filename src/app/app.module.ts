import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { OnboardingModule } from 'onboarding';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    OnboardingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
