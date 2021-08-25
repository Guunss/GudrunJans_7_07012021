import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:3000/api/compte/";

class UserService {
  getUser() {
    return axios.get(API_URL, { headers: authHeader() }).then((response) => {
      return response.data;
    });
  }

  deleteUser() {
    return axios.delete(API_URL, { headers: authHeader() }).then((response) => {
      return response.data;
    });
  }
}

export default new UserService();
