import {Component, Template} from 'angular2/angular2';
import {If} from 'angular2/angular2';
import {LightBlub} from 'services/lightblub';

var appTemplate = `

<br>

<center>
  <span style="font-size: 4em">
    &#128161;
  </span>
  <button class="btn btn-default" (click)="lightbulb.on()">Toggle Lightbulb On</button>
  <button class="btn btn-default" (click)="lightbulb.off()">Toggle Lightbulb Off</button>
</center>

<br>

<span *if="name">Hello, {{name}}!</span>

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
