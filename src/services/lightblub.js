
export class LightBlub {
  constructor() {
    this.light = false;
    this.baseUrl = 'http://10.0.0.24'
  }

  toggle() {
    return (this.light ?
       this.off() :
       this.on()
    )
    .then(json => {
      console.log('jsonjson', json);
      this.light = !this.light;
      return json
    });

  }

  on() {
    return this.fetch('/on', {
      on: true
    })
    .then(json => {
      console.log('on', json);
      this.light = !this.light;
      return json
    });

  }

  off() {
    return this.fetch('/off', {
      off: true
    })
    .then(json => {
      console.log('off', json);
      this.light = !this.light;
      return json
    });
  }

  fetch(url, data) {
    return fetch(this.baseUrl+url, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    .then(status)
    .then(json)

  }
}


function status(response) {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response)
  } else {
    return Promise.reject(new Error(response.statusText))
  }
}

function json(response) {
  return response.json()
}
