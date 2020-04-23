import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, AfterViewChecked } from '@angular/core';
import { StoryOnboardingModel } from 'projects/onboarding/src/lib/models/StoryOnboardingModel';

@Component({
  selector: 'ang-onboarding-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit, AfterViewChecked {

  title = 'AngularOnboarding';

  @ViewChild('h2Ele') h2Ele: ElementRef;

  storyBoard = [
    {
      id:
    }
  ] as StoryOnboardingModel[];

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    console.log('h2Ele', this.h2Ele.nativeElement);
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked ngAfterViewChecked')
  }
}
