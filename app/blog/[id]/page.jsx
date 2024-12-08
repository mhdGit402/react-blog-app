import axios from "axios";

const BlogPost = async ({ params }) => {
  const { id } = await params;
  const api = await axios.get(`http://localhost:3001/post/${id}`);
  const post = api.data;

  return (
    <div>
      <div
        key={post.id}
        className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70"
      >
        <div className="p-4 md:p-7">
          <h3 className="text-lg font-bold text-gray-800 dark:text-white">
            {post.title}
          </h3>
          <p className="mt-2 text-gray-500 dark:text-neutral-400">
            {post.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
