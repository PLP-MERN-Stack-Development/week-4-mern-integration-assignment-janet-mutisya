import { useEffect, useState } from "react";
import PostList from "../components/Posts/PostList";
import useApi from "../hooks/useApi";

const HomePage = () => {
  const { getPosts } = useApi();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getPosts();
      setPosts(data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">
        Latest Posts
      </h1>

      {loading ? (
        <p className="text-center text-gray-600">Loading posts...</p>
      ) : posts.length === 0 ? (
        <p className="text-center text-gray-600">No posts found.</p>
      ) : (
        <PostList posts={posts} />
      )}
    </div>
  );
};

export default HomePage;
