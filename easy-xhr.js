(function() {
  let _get = (url) => {
    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();
      xhr.addEventListener('load', () => {
        resolve(xhr);
      });
      xhr.addEventListener('error', () => {
        reject(xhr);
      });
      xhr.open('GET', url);
      xhr.send();
    });
  };
  let _getSync = (url) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, false);
    xhr.send();
    return xhr;
  };
  let _post = (url, ctype, data) => {
    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();
      xhr.addEventListener('load', () => {
        resolve(xhr);
      });
      xhr.addEventListener('error', () => {
        reject(xhr);
      });
      xhr.open('POST', url);
      xhr.setRequestHeader('Content-Type', ctype);
      xhr.send(data);
    });
  };
  let _postSync = (url, ctype, data) => {
    let xhr = new XMLHttpRequest();
    xhr.open('POST', url, false);
    xhr.setRequestHeader('Content-Type', ctype);
    xhr.send(data);
    return xhr;
  };
  return {
    async get(url) {
      return (await _get(url)).responseText;
    },
    getSync(url) {
      return _getSync(url).responseText;
    },
    async getJSON(url) {
      return JSON.parse((await _get(url)).responseText);
    },
    getJSONSync(url) {
      return JSON.parse(_getSync(url).responseText);
    },
    async getXML(url) {
      return (await _get(url)).responseXML;
    },
    getXMLSync(url) {
      return _getSync(url).responseXML;
    },
    async post(url, contentType, data) {
      return (await _post(url, contentType, data)).responseText;
    },
    postSync(url, contentType, data) {
      return _postSync(url, contentType, data).responseText;
    }
  };
})
