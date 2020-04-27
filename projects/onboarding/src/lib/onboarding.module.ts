import { NgModule } from '@angular/core';
import { OnboardingComponent } from './onboarding.component';
import { CommonModule } from '@angular/common';

import { MatButtonModule, MatCardModule } from '@angular/material';

@NgModule({
  declarations: [OnboardingComponent],
  imports: [
    CommonModule,

    MatCardModule,
    MatButtonModule
  ],
  exports: [OnboardingComponent]
})
export class OnboardingModule { }
