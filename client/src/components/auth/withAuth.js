import React from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000/api";

axios.interceptors.request.use(function(requestConfig) {
  const token = localStorage.getItem("specialToken");
  requestConfig.headers.authorization = token;
  return requestConfig;
});

export default function(Component) {
  return function(props) {
    const token = localStorage.getItem("specialToken");

    return token ? <Component {...props} /> : <Redirect to="/login" />;
  };
}
