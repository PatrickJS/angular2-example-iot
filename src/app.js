import {Component, Template} from 'angular2/angular2';
import {If} from 'angular2/angular2';
import {LightBlub} from 'services/lightblub';

var appTemplate = `

<br>


<center>
  <span *if="name">Hello, {{name}}!</span>
  <div style="font-size: 6em">
    &#128161;
  </div>
  <h1>
    Light Bulb
  </h1>
</center>
  <button class="btn btn-warning btn-lrg btn-block" (click)="lightbulb.on()">&#128161</button>
  <button class="btn btn-default bt-lrg btn-block" (click)="lightbulb.off()">! &#128161</button>

<br>

`;

@Component({
  selector: 'app',
  services: [
    LightBlub
  ]
})
@Template({
  inline: appTemplate,
  directives: [
    If
  ]
})
export class App {
  name: string;
  lightbulb: LightBlub;
  constructor(lightbulb: LightBlub) {
    this.name = 'World';
    this.lightbulb = lightbulb;

    setTimeout(() => {
      this.name = 'NEW World'
    }, 2000);

  }

}
