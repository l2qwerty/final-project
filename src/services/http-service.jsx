/* eslint-disable class-methods-use-this */
import React from "react";
import { Redirect } from "react-router-dom";

const headers = { Accept: "application/json" };

class Service extends React.Component {
  state = {
    redirect: false,
  };

  setRedirect = () => {
    this.setState({
      redirect: true,
    });
  };

  // eslint-disable-next-line consistent-return
  renderRedirect = () => {
    if (this.state.redirect) {
      // eslint-disable-next-line prettier/prettier
      return <Redirect to='/login' />;
    }
  };

  request(url, method = "POST", data = null) {
    const options = {
      method,
      headers,
    };
    if (data) {
      options.body = JSON.stringify({ ...data });
    }
    return fetch(url, options);
  }

  get(url) {
    const method = "GET";
    return this.request(url, method).then(this.parseResponse);
  }

  post(url, data) {
    const method = "POST";
    return this.request(url, method, data).then(this.parseResponse);
  }

  parseResponse(response) {
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
          this.setRedirect();
        } else if (modifiedJson.success) return JSON.stringify(modifiedJson);
        return Promise.reject(JSON.stringify(modifiedJson));
      })
      .then((res) => JSON.parse(res));
  }
}
export default Service;
