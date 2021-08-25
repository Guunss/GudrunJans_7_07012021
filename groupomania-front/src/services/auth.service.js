import axios from "axios";

const API_URL = "http://localhost:3000/api/auth/";

class AuthService {
  login(user) {
    return axios
      .post(API_URL + "login", {
        email: user.email,
        password: user.password,
      })
      .then((response) => {
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(user) {
    console.log(user);
    if (user.image) {
      const formData = new FormData();
      formData.append("email", user.email);
      formData.append("password", user.password);
      formData.append("pseudo", user.pseudo);
      formData.append("image", user.image);
      return axios.post(API_URL + "/signup", formData, {
        headers: {
          "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
        },
      });
    } else {
      return axios.post(API_URL + "/signup", {
        email: user.email,
        password: user.password,
        pseudo: user.pseudo,
      });
    }
  }
}

export default new AuthService();
