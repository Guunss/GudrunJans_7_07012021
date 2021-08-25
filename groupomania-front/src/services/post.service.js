import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:3000/api/post/";

class PostService {
  getAllPosts() {
    return axios.get(API_URL, { headers: authHeader() }).then((response) => {
      return response.data;
    });
  }

  createPost(post) {
    const formData = new FormData();
    formData.append("titre", post.titre);
    formData.append("image", post.image);
    formData.append("userId", JSON.parse(localStorage.getItem("user")).userId);

    let headers = authHeader();
    headers[
      "Content-Type"
    ] = `multipart/form-data; boundary=${formData._boundary}`;
    return axios.post(API_URL, formData, {
      headers: headers,
    });
  }

  getPost(id) {
    return axios
      .get(API_URL + id, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }
}

export default new PostService();
