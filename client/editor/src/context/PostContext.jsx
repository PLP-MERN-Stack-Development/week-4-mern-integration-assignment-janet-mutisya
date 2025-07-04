import { createContext, useState, useEffect } from 'react';
import { getPosts, getCategories } from '../hooks/api';

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAll = async () => {
      setLoading(true);
      try {
        const postsRes = await getPosts();
        const categoriesRes = await getCategories();
        setPosts(postsRes.data);
        setCategories(categoriesRes.data);
      } catch (err) {
        console.error(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchAll();
  }, []);

  return (
    <PostContext.Provider value={{ posts, setPosts, categories, loading, error }}>
      {children}
    </PostContext.Provider>
  );
};
