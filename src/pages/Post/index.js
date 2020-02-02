import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import usePost from "../../hooks/usePost";
import Post from "../../components/Post/";
import SideBar from "../../components/SideBar/index";

const BlogPost = () => {
  let { cat, title } = useParams();

  const post = usePost(cat, title);

  useEffect(() => {
    console.log("Post ", post);
  }, [post]);

  return (
    <div className="main">
      <div className="posts">
        {post !== -1 ? (
          <Post fields={post.fields} />
        ) : (
          <div className="text-progress">Đang tìm, đợi chút nha :></div>
        )}
      </div>
      <div className="about-content">
        <SideBar />
      </div>
    </div>
  );
};
export default BlogPost;
