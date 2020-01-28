import React from "react";
import "./home.scss";
import ListPost from "./ListPost";

export default Home => {

  //  const PostCard = contents.map((content,index) => {
  //    return <PostCard props={content} />
  //  })

  return (
    <div className="main">
      <ListPost />
    </div>
  );
};
