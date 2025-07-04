import { useParams } from 'react-router-dom';
import useApi from '../hooks/useApi';
import PostView from '../components/Posts/PostView';

const PostPage = () => {
  const { id } = useParams();
  const { data: post, loading, error } = useApi(`https://jsonplaceholder.typicode.com/posts/${id}`);

  if (loading) return <p>Loading post...</p>;
  if (error) return <p>Error loading post</p>;

  return (
    <div className="p-4">
      <PostView post={post} />
    </div>
  );
};

export default PostPage;
