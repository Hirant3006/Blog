import React from "react";
import "./index.scss";
import moment from "moment";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const PostCard = ({ fields }) => {
  const formatTime = date => moment(date).format("MMMM DD, YYYY HH:mm");

  const options = {
    renderText: text =>
      text.split("\n").flatMap((text, i) => [i > 0 && <br key={i} />, text])
  };

  // const renderContent = (listContent) => {
  //   const data = documentToReactComponents(listContent,options)
  //   return data
  // }

  return (
    <div className="card mb-40 ">
      <b className="card-cat mb-10 regular">{fields.category}</b>
      <a className="card-title mb-10" href='/'>{fields.title}</a>
      <span className="card-date small mb-10">
        {formatTime(fields.createDate)}
      </span>
      <img
        className="mb-20"
        alt={fields.image.fields.title}
        src={fields.image.fields.file.url}
      ></img>
      <div className="card-content">
        {documentToReactComponents(fields.content,options)}
      </div>
      {/* <a className="mt-20 small">đọc thêm></a> */}
      {/* <div className="card-footer mt-40">footer</div> */}
    </div>
  );
};

export default PostCard;
