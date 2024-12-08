"use client";

import axios from "axios";
import { useState } from "react";

const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const updateTitle = (e) => {
    setTitle(e.target.value);
  };

  const updateDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleCreate = (e) => {
    e.preventDefault();
    const post = {
      title,
      description,
    };

    const submitPost = async () => {
      try {
        const api = await axios.post("http://localhost:3001/post", post);
        if (api.status < 200 || api.status > 304) {
          throw new Error("Request post failed");
        }
        const response = api.data;
      } catch (err) {
        console.log(err);
      }
    };

    submitPost();

    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-sm">
      <form onSubmit={handleCreate}>
        <label
          htmlFor="input-label"
          className="block text-sm font-medium mb-2 dark:text-white"
        >
          Title
        </label>
        <input
          type="text"
          id="input-label"
          className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
          placeholder="Amazing title..."
          value={title}
          onChange={updateTitle}
        />
        <div className="max-w-sm">
          <label
            htmlFor="textarea-label"
            className="block text-sm font-medium mb-2 dark:text-white"
          >
            Description
          </label>
          <textarea
            id="textarea-label"
            className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
            rows="3"
            placeholder="Write about..."
            value={description}
            onChange={updateDescription}
          ></textarea>
          <button
            type="submit"
            className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 text-gray-500 hover:border-blue-600 hover:text-blue-600 focus:outline-none focus:border-blue-600 focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-blue-500 dark:hover:border-blue-600 dark:focus:text-blue-500 dark:focus:border-blue-600"
          >
            Create post
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBlog;
