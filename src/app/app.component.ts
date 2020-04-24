import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, AfterViewChecked } from '@angular/core';
import { StoryOnboardingModel } from 'projects/onboarding/src/lib/models/StoryOnboardingModel';

@Component({
  selector: 'ang-onboarding-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit, AfterViewChecked {

  title = 'AngularOnboarding';
  isTutorialMode: boolean;

  storyBoard = [
    {
      id: 'h1Wellcome',
      text: 'This is wellcome',
      direction: 'bottom'
    },
    {
      id: 'angularIcon',
      text: 'This is icon',
      direction: 'right'
    },
    {
      id: 'angularIcon',
      text: 'This is icon',
      direction: 'left'
    },
    {
      id: 'h2EleID',
      text: 'This is text',
      direction: 'top'
    },
    {
      id: 'ligroup',
      text: 'This is group',
      direction: 'top'
    },
    {
      id: 'tourOfHeroes',
      text: 'This is tutorial',
      direction: 'bottom'
    },
    {
      id: 'cli',
      text: 'This is cli',
      direction: 'bottom'
    },
    {
      id: 'blog',
      text: 'This is blog',
      direction: 'bottom'
    }
  ] as StoryOnboardingModel[];

  constructor() {
    this.isTutorialMode = false;
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.isTutorialMode = true;
  }

  ngAfterViewChecked(): void {
  }

  endOfTutorial(test: any) {
    this.isTutorialMode = false;
  }
}
