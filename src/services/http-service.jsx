const headers = {
  "X-Foo-Bar": "Hello World",
};

function joinURL(baseURL, url) {
  return `${baseURL}/${url}`;
}
class Service {
  constructor() {
    this.domain = "https://run.mocky.io/v3/";
  }

  request(url, method = "POST", data = null) {
    // eslint-disable-next-line no-param-reassign
    url = joinURL(this.domain, url);
    const options = {
      headers,
      method,
      mode: "no-cors",
    };
    if (data) {
      options.body = JSON.stringify({ ...data });
    }
    return fetch(url, options);
  }

  get(url, id) {
    const method = "GET";
    if (id) {
      // eslint-disable-next-line no-param-reassign
      url = `${url}/${id}`;
    }
    return this.request(url, method).then((res) => res.json());
  }

  post(url, data) {
    const method = "POST";
    return this.request(url, method, data).then((res) => res.json());
  }
}

export default Service;
