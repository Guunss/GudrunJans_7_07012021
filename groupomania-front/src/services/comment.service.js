import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:3000/api/comment/";

class CommentService {
  createComment(commentaire) {
    return axios.post(
      API_URL,
      {
        ...commentaire,
        userId: JSON.parse(localStorage.getItem("user")).userId,
      },
      { headers: authHeader() }
    );
  }
  deleteComment(id) {
    return axios.delete(API_URL + id, { headers: authHeader() });
  }
}

export default new CommentService();
