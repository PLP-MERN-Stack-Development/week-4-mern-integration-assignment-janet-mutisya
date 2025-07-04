
const PostForm = ({ onSubmit }) => {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const data = {
            title: e.target.title.value,
            body: e.target.body.value,
          };
          onSubmit(data);
        }}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-lg mx-auto"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
          Create New Post
        </h2>
  
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Title
          </label>
          <input
            name="title"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter post title"
            required
          />
        </div>
  
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Body
          </label>
          <textarea
            name="body"
            rows="5"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Write your post content here..."
            required
          ></textarea>
        </div>
  
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          >
            Submit Post
          </button>
        </div>
      </form>
    );
  };
  
  export default PostForm;
  