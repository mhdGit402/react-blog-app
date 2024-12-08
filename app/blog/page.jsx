import axios from "axios";
import { Span } from "next/dist/trace";
import Link from "next/link";

const Blog = async () => {
  const api = await axios.get("http://localhost:3001/post");
  const posts = api.data;

  return (
    <div>
      {posts ? (
        posts.map((post) => (
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
              <Link
                className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 decoration-2 hover:text-blue-700 hover:underline focus:underline focus:outline-none focus:text-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-600 dark:focus:text-blue-600"
                href={`/blog/${post.id}`}
              >
                View post
                <svg
                  className="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </Link>
            </div>
          </div>
        ))
      ) : (
        <span>Loading...</span>
      )}
    </div>
  );
};

export default Blog;
