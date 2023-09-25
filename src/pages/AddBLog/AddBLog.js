import React, { useState } from "react";
import BlogForm from "../../components/BlogForm/BlogForm";
import BLogList from "../../components/BlogList/BLogList";

export default function AddBLog() {
  const [blogs, setBlogs] = useState([]);

  const addBlog = (newBlog) => {
    setBlogs([...blogs, newBlog]);
  };
  return (
    <div>
      <BlogForm addBlog={addBlog}/>
      <BLogList blogs={blogs} />
    </div>
  );
}
