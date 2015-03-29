System.register("services/lightblub", [], function($__export) {
  "use strict";
  var __moduleName = "services/lightblub";
  var LightBlub;
  function status(response) {
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(new Error(response.statusText));
    }
  }
  function json(response) {
    return response.json();
  }
  return {
    setters: [],
    execute: function() {
      LightBlub = $__export("LightBlub", (function() {
        var LightBlub = function LightBlub() {
          this.light = false;
          this.baseUrl = 'http://10.0.0.24';
        };
        return ($traceurRuntime.createClass)(LightBlub, {
          toggle: function() {
            var $__0 = this;
            return (this.light ? this.off() : this.on()).then((function(json) {
              console.log('jsonjson', json);
              $__0.light = !$__0.light;
              return json;
            }));
          },
          on: function() {
            var $__0 = this;
            return this.fetch('/on', {on: true}).then((function(json) {
              console.log('on', json);
              $__0.light = true;
              return json;
            }));
          },
          off: function() {
            var $__0 = this;
            return this.fetch('/off', {off: true}).then((function(json) {
              console.log('off', json);
              $__0.light = false;
              return json;
            }));
          },
          fetch: function(url, data) {
            return window.fetch(this.baseUrl + url, {
              method: 'post',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(data)
            }).then(status).then(json);
          }
        }, {});
      }()));
    }
  };
});
