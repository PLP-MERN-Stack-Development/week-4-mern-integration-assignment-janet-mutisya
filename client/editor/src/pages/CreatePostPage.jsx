import PostForm from "../components/Posts/PostForm";

const CreatePostPage = () => {
  const handleSubmit = (data) => {
    console.log("New post data:", data);
    // Implement POST API call here later
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-3xl font-extrabold text-center mb-8 text-blue-700">
        New Blog Post
      </h1>
      <PostForm onSubmit={handleSubmit} />
    </div>
  );
};

export default CreatePostPage;
