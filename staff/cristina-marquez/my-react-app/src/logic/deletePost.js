import axios from "axios";

async function deletePost(postId) {

    const response = await axios.delete(`http://localhost:8080/posts/${postId}`)
    return response.data


}

export default deletePost
