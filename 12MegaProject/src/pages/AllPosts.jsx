import { useEffect, useState } from "react";
import { Container, PostCard } from "../components/index";
import appwriteService from "../appwrite/config";

function AllPosts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    appwriteService.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
        console.log("posts", posts);
      }
    });
  }, []);

  return (
    <div className="w-full">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => {
            console.log(post); // Logging each post
            return (
              <div
                key={post.$id}
                className="p-2 w-1/4"
              >
                <PostCard {...post} />
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;
