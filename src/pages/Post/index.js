import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import usePost from "../../hooks/usePost";
import Post from "../../components/Post/";
import SideBar from "../../components/SideBar/index";
import styled from "styled-components";
import { Helmet } from "react-helmet";

const StyledHome = styled.div`
  display: flex;
  justify-content: center;
  .posts {
    width: 65%;
  }
  .about-content {
    display: none;
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

  console.log(post)

  const Posts = post =>
    post !== -1 ? (
      <div>
        <Helmet>
          <meta name="description" content="Lorem ipsum" />
          <meta
            name="robots"
            content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
          />
          <link rel="canonical" href="https://hirany.netlify.com" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={`A little Hirany | ${post.fields.title}`} />
          <meta property="og:description" content={post.fields.title} />
          <meta property="og:url" content="https://hirany.netlify.com" />
          <meta property="og:site_name" content="A little Hirany" />
          <meta property="og:image:width" content="1280" />
          <meta property="og:image:height" content="720" />
        </Helmet>
        <Post fields={post.fields} />
      </div>
    ) : (
      <div className="text-progress">Đang tìm, đợi chút nha :></div>
    );
  useEffect(() => {}, [post]);

  return (
    <StyledHome c>
      <div className="posts">{Posts(post)}</div>
      <div className="about-content">
        <SideBar />
      </div>
    </StyledHome>
  );
};
export default BlogPost;
