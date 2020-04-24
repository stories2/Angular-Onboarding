# AngularOnboarding

![demo](/demo/demo.gif)

Show onboarding for angular 7.

## How to use

```
<Ng7-Onboarding [story]="storyBoard" [gap]='20' (done)="endOfTutorial($event)"></Ng7-Onboarding>
```

`story`
- Set onboarding flow array.

`gap`
- Set gap between highlighted DOM and onboarding popup.

`done` 
- Trigger when onboarding is ended.

### Optional

`btnNextText`
- Set next button text.

`btnPrevText`
- Set previous button text.

`btnDoneText`
- Set done button text.

### Story board data

```
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
    ...
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
```

`id`
- Will highlight DOM's ID

```
<h1 id="h1Wellcome"> <!-- h1Wellcome is id -->
    Welcome to {{ title }}!
</h1>
```

`text`
- Onboarding message.

`direction`
- Onboarding view's direction. `left`, `top`, `right`, `bottom` avaliable.

## Build Library

```
ng build Onboarding
```

## Publish Library

```
cd dist/onboarding
npm publish
```

### Reference

How to create angular library [link](https://medium.com/@esanjiv/complete-beginner-guide-to-publish-an-angular-library-to-npm-d42343801660)

CSS Spotlight [link](http://jsfiddle.net/XYXHR/)