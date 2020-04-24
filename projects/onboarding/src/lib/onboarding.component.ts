import { Component, OnInit, Input, AfterViewInit,
  OnChanges, SimpleChanges, Inject, ViewChild,
  ViewContainerRef, HostListener, AfterViewChecked, ElementRef, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { StoryOnboardingModel } from './models/StoryOnboardingModel';

@Component({
  selector: 'Ng7-Onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.css']
})
export class OnboardingComponent implements OnInit, AfterViewInit, OnChanges, AfterViewChecked {

  @Input() story: StoryOnboardingModel[];
  @Input() gap: number;
  @Input() btnNextText?: string;
  @Input() btnPrevText?: string;
  @Input() btnDoneText?: string;

  @Output() done = new EventEmitter<string>();

  left: number;
  top: number;
  width: number;
  height: number;
  currentStory: number;

  posLeft: number;
  posTop: number;

  @ViewChild('onboardingEle') onboardingEle: ElementRef;
  @ViewChild('onboardingView', {read: ViewContainerRef}) onboardingView: ViewContainerRef;

  constructor(@Inject(DOCUMENT) document, private cdr: ChangeDetectorRef) {
    this.currentStory = 0;
    this.posLeft = 0;
    this.posTop = 0;
    this.left = 0;
    this.top = 0;
    this.width = 0;
    this.height = 0;

    this.btnNextText = this.btnNextText || 'Next';
    this.btnPrevText = this.btnPrevText || 'Prev';
    this.btnDoneText = this.btnDoneText || 'Done';
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.setElePos(this.story, this.currentStory, this.gap);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.btnNextText) {
      this.btnNextText = changes.btnNextText.currentValue || 'Next';
    }

    if (changes.btnPrevText) {
      this.btnPrevText = changes.btnPrevText.currentValue || 'Prev';
    }

    if (changes.btnDoneText) {
      this.btnDoneText = changes.btnDoneText.currentValue || 'Done';
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.setElePos(this.story, this.currentStory, this.gap);
  }

  ngAfterViewChecked(): void {
    this.setElePos(this.story, this.currentStory, this.gap);
  }

  onBtnPrevClicked() {
    if (this.currentStory > 0) {
      this.currentStory --;
      this.setElePos(this.story, this.currentStory, this.gap);
    }
  }

  onBtnNextClicked() {
    if (this.currentStory < this.story.length - 1) {
      this.currentStory ++;
      this.setElePos(this.story, this.currentStory, this.gap);
    } else {
      this.done.emit('End of story');
    }
  }

  setElePos(story: StoryOnboardingModel[], storyIndex: number, gap: number) {

    if (story.length <= 0) {
      return;
    }

    const ele = document.getElementById(story[storyIndex].id);
    const onboardingEle = document.getElementById('onboardingEle');
    this.left = ele.offsetLeft;
    this.top = ele.offsetTop;
    this.width = ele.offsetWidth;
    this.height = ele.offsetHeight;

    switch (story[storyIndex].direction) {
      case 'left':
        this.posLeft = ele.offsetLeft - onboardingEle.offsetWidth - gap;
        this.posTop = ele.offsetTop;
        break;
      case 'top':
        this.posLeft = ele.offsetLeft;
        this.posTop = ele.offsetTop - onboardingEle.offsetHeight - gap;
        break;
      case 'right':
        this.posLeft = ele.offsetLeft + ele.offsetWidth + gap;
        this.posTop = ele.offsetTop;
        break;
      case 'bottom':
        this.posLeft = ele.offsetLeft;
        this.posTop = ele.offsetTop + ele.offsetHeight + gap;
        break;
      default:
        console.warn(`Wrong direction detected : ${story[storyIndex].direction}`);
        break;
    }
    this.cdr.detectChanges();
  }
}
