import axios from "axios";
import { GET_USER_PROFILE } from "./types";
import Cookies from "js-cookie";

const ROOT_URL = process.env.API_URI || "http://localhost:8000";

var token = Cookies.get("token");
const axiosInstance = axios.create({
  baseURL: ROOT_URL,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    Authorization: token
  }
});

export function getUserProfile() {
  return function(dispatch) {
    // Submit email/password to server
    axiosInstance
      .post(`/api/get-userinfo`)
      .then(res => {
        dispatch({ type: GET_USER_PROFILE, payload: res });
      })
      .catch(error => {
        console.log(error);
        dispatch({ type: GET_USER_PROFILE, payload: error });
      });
  };
}

const request = axios;
export { request };
