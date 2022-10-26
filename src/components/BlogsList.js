import React from "react";
import { BlogsListCard } from "./BlogsListCard";

export const BlogsList = (props) => {
  const { blog } = props;

  return (
    <div>
      BlogsList
      <div>
        {blog.map((blogs) => {
          return (
            <div>
              <h2>{blogs.title}</h2>
              <p>{blogs.author}</p>
              <p>{blogs.text}</p>
              <BlogsListCard blog = {blogs} />
            
            </div>
        
        );
        })}
     
      </div>
    </div>
  );
};
