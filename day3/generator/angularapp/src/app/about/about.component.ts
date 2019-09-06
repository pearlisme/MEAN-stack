import { Component} from '@angular/core';

@Component({
  template: `
    <h1 class='bg-info  text-center'>About System Inc.</h1>
    <h2 class='text-danger'>{{ title }}</h2>
    <h3>We offer</h3>
    <li>Angular 8</li>
    <li>React and Redux</li>
    <li>Python and Machine Learning </li>
    <h4 class="bg-secondary text-info">Contact : 888 888 8888</h4>
  `
})
export class AboutComponent{
title = 'System Inc. offers online tranings on Front-end skills'

}