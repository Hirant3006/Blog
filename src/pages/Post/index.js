import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import usePost from "../../hooks/usePost";
import Post from "../../components/Post/";
import SideBar from "../../components/SideBar/index";
import styled from "styled-components";

const StyledHome = styled.div`
  display: flex;
  justify-content: space-between;
  .posts {
    width: 65%;
  }
  .about-content {
    width: 28%;
  }
  @media only screen and (max-width: 800px) {
    .about-content {
      display: none;
    }
    .posts {
      width: 100%;
    }
  }
`;

const BlogPost = () => {
  let { cat, title } = useParams();

  const post = usePost(cat, title);

  useEffect(() => {
  }, [post]);

  return (
    <StyledHome c>
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
    </StyledHome>
  );
};
export default BlogPost;
