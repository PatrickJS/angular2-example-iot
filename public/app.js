System.register("app", ["angular2/angular2", "services/lightblub"], function($__export) {
  "use strict";
  var __moduleName = "app";
  var Component,
      Template,
      If,
      LightBlub,
      appTemplate,
      App;
  return {
    setters: [function($__m) {
      Component = $__m.Component;
      Template = $__m.Template;
      If = $__m.If;
    }, function($__m) {
      LightBlub = $__m.LightBlub;
    }],
    execute: function() {
      appTemplate = "\n\n<br>\n\n\n<center>\n  <span *if=\"name\">Hello, {{name}}!</span>\n  <div style=\"font-size: 6em\">\n    &#128161;\n  </div>\n  <h1>\n    Light Bulb\n  </h1>\n</center>\n  <button class=\"btn btn-warning btn-lrg btn-block\" (click)=\"lightbulb.on()\">&#128161</button>\n  <button class=\"btn btn-default bt-lrg btn-block\" (click)=\"lightbulb.off()\">! &#128161</button>\n\n<br>\n\n";
      App = $__export("App", (function() {
        var App = function App(lightbulb) {
          var $__0 = this;
          this.name = 'World';
          this.lightbulb = lightbulb;
          setTimeout((function() {
            $__0.name = 'NEW World';
          }), 2000);
        };
        return ($traceurRuntime.createClass)(App, {}, {});
      }()));
      Object.defineProperty(App, "annotations", {get: function() {
          return [new Component({
            selector: 'app',
            services: [LightBlub]
          }), new Template({
            inline: appTemplate,
            directives: [If]
          })];
        }});
      Object.defineProperty(App, "parameters", {get: function() {
          return [[LightBlub]];
        }});
    }
  };
});
