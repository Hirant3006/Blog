import React, { useEffect, useState } from "react";
import "./index.scss";

const PostCard = ({ fields }) => {
  useEffect(() => {
    console.log(fields);
  }, [fields]);

  return (
    <div className="card">
      <b className="card-cat mb-10 regular">{fields.category}</b>
      <a className="card-title mb-10">{fields.title}</a>
      <img
        className="mb-20"
        alt={fields.image.fields.title}
        src={fields.image.fields.file.url}
      ></img>
      <span className="card-content">{fields.content.content[0].content[0].value}</span>
      {/* <a className="mt-20 small">đọc thêm></a> */}
      <div className="card-footer mt-40">
        <span className="card-date">{fields.createDate}</span>
      </div>
    </div>
  );
};

export default PostCard;
