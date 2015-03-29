System.register("services/light", [], function($__export) {
  "use strict";
  var __moduleName = "services/light";
  var LightService;
  function status(response) {
    console.log('response', response);
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(new Error(response.statusText));
    }
  }
  function json(response) {
    console.log('json', response);
    return response.json();
  }
  return {
    setters: [],
    execute: function() {
      LightService = $__export("LightService", (function() {
        var LightService = function LightService() {
          this.light = false;
          this.baseUrl = 'http://10.0.0.24';
        };
        return ($traceurRuntime.createClass)(LightService, {
          toggle: function() {
            var $__0 = this;
            return (this.light ? this.off() : this.on()).then((function(json) {
              console.log('jsonjson', json);
              $__0.light = !$__0.light;
              return json;
            }));
          },
          on: function() {
            return fetch(this.baseUrl + '/on', {
              method: 'post',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({on: true})
            }).then(status).then(json);
          },
          off: function() {
            return fetch(this.baseUrl + '/off', {
              method: 'post',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({off: true})
            }).then(status).then(json);
          }
        }, {});
      }()));
    }
  };
});
