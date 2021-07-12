/* eslint-disable class-methods-use-this */
const headers = { Accept: "application/json" };
const baseURL = "https://run.mocky.io/v3/c87e58ab-40a9-416d-b4e0-85b20a6a0be1";
class Service {
  static request(path, method = "POST", data = null) {
    const url = `${baseURL}${path}`;
    const options = {
      method,
      headers,
    };
    if (data) {
      options.body = JSON.stringify({ ...data });
    }
    return fetch(url, options);
  }

  static get(path = "") {
    const method = "GET";
    return this.request(path, method).then(this.parseResponse);
  }

  static post(path = "", data) {
    const method = "POST";
    return this.request(path, method, data).then(this.parseResponse);
  }

  static parseResponse(response) {
    return response
      .json()
      .then((json) => {
        const modifiedJson = {
          success: response.ok,
          status: response.status,
          statusText: response.statusText
            ? response.statusText
            : json.error || "",
          response: json,
        };
        if (modifiedJson.status === 401) {
          Promise.reject(JSON.stringify(modifiedJson.statusText));
        } else if (modifiedJson.success) return JSON.stringify(modifiedJson);
        return Promise.reject(JSON.stringify(modifiedJson));
      })
      .then((res) => JSON.parse(res));
  }
}
export default Service;
