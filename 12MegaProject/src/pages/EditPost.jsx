import { useState, useEffect } from "react";
import { Container, PostForm } from "../components/index";
import appwriteService from "../appwrite/config";
import { useParams, useNavigate } from "react-router-dom";

function EditPost() {
  const { slug } = useParams();
  const [post, setPost] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      console.log("slug : ::::", slug);
      appwriteService.getPost(slug).then((post) => {
        if (post) {
          console.log("post", post);
          setPost(post);
          console.log("post1", post);
        } else {
          navigate("/");
        }
      });
    }
  }, [slug, navigate]);

  return post ? (
    <div className="py-8">
      <Container>
        <PostForm post={post} />
      </Container>
    </div>
  ) : null;
}

export default EditPost;
