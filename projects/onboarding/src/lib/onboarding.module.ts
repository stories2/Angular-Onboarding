import { NgModule } from '@angular/core';
import { OnboardingComponent } from './onboarding.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule, MatCardModule } from '@angular/material';

@NgModule({
  declarations: [OnboardingComponent],
  imports: [
    BrowserAnimationsModule,

    MatCardModule,
    MatButtonModule
  ],
  exports: [OnboardingComponent]
})
export class OnboardingModule { }
