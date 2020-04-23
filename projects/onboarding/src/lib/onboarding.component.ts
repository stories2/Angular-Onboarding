import { Component, OnInit, Input, AfterViewInit,
  OnChanges, SimpleChanges, Inject, ViewChild, ViewContainerRef, HostListener, AfterViewChecked } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { StoryOnboardingModel } from './models/StoryOnboardingModel';

@Component({
  selector: 'Ng7-Onboarding',
  // template: `
  //   <p>
  //     Hello World!
  //   </p>
  // `,
  templateUrl: './onboarding.component.html',
  // styles: [],
  styleUrls: ['./onboarding.component.css']
})
export class OnboardingComponent implements OnInit, AfterViewInit, OnChanges, AfterViewChecked {

  // @Input() targetEle: ElementRef;
  @Input() story: StoryOnboardingModel[];
  ele: HTMLElement;
  left: number;
  top: number;
  width: number;
  height: number;
  currentStory: number;

  @ViewChild('onboardingView', {read: ViewContainerRef}) onboardingView: ViewContainerRef;

  constructor(@Inject(DOCUMENT) document) {
    this.currentStory = 0;
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {

    this.setElePos();
    console.log('ele', this.left, this.top, this.width, this.height);
    // console.log('ele', this.ele.clientTop, this.ele.scrollTop, this.ele.offsetParent, this.ele.getBoundingClientRect());
    // console.log('after targetEle', this.targetEle, this.targetEle.nativeElement.getBoundingClientRect());
    // setTimeout(() => {
    //   this.left = this.ele.offsetLeft;
    //   this.top = this.ele.offsetTop;
    //   this.width = this.ele.offsetWidth;
    //   this.height = this.ele.offsetHeight;
    //   console.log('ele 3s', this.ele.clientTop, this.ele.scrollTop, this.ele.offsetParent, this.ele.getBoundingClientRect());
    //   console.log('targetEle', this.targetEle, this.targetEle.nativeElement);
    // }, 3000);

    this.ele.onmouseenter = (e) => {
      console.log('onmouseenter', e);
    };

    this.ele.onload = (e) => {
      console.log('onload', e);
    };

    this.ele.onloadeddata = (e) => {
      console.log('onloadeddata', e);
    };

    this.ele.onchange = (e) => {
      console.log('onchange', e);
    };

    this.ele.onresize = (e) => {
      console.log('onresize', e);
    };


  }

  ngOnChanges(changes: SimpleChanges): void {
    // if (changes.targetEle) {
    //   console.log('change', this.targetEle, this.targetEle.nativeElement);
    // }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    console.log('onResize', event);
    console.log('ele re', this.ele.clientTop, this.ele.scrollTop, this.ele.offsetParent, this.ele.getBoundingClientRect());
  }

  ngAfterViewChecked(): void {
    console.log('a ngAfterViewChecked');
    console.log('ele ngAfterViewChecked', this.ele.clientTop, this.ele.scrollTop, this.ele.offsetParent, this.ele.getBoundingClientRect());
  }

  onBtnPrevClicked() {
    if (this.currentStory > 0) {
      this.currentStory --;
    }
  }

  onBtnNextClicked() {
    if (this.currentStory < this.story.length - 1) {
      this.currentStory ++;
    }
  }

  setElePos() {
    this.ele = document.getElementById(this.story[this.currentStory].id);
    this.left = this.ele.offsetLeft;
    this.top = this.ele.offsetTop;
    this.width = this.ele.offsetWidth;
    this.height = this.ele.offsetHeight;
    console.log('setElePos', this.ele, this.left, this.top, this.width, this.height);
  }
}
