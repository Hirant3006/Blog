import React from "react";
import "./index.scss";
import moment from "moment";
import {Link} from 'react-router-dom'
// import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const PostCard = ({ fields,isHomePage }) => {
  const formatTime = date => moment(date).format("MMMM DD, YYYY HH:mm");

  const options = {
    // Render image
    // renderNode: {
    //   [BLOCKS.EMBEDDED_ASSET]: node => {
    //     // console.log(node)
    //     let { title, file } = node.data.target.fields
    //     // console.log(file["en-US"].url)
    //     return <img src={file.url}/>
    //   },
    // },
    renderText: text =>
      text.split("\n").flatMap((text, i) => [i > 0 && <br key={i} />, text])
  };

  // const renderContent = (listContent) => {
  //   const data = documentToReactComponents(listContent,options)
  //   return data
  // }

  function removeAccents(str) {
    return str.split(" ").join("-");
  }
  // const url = () => {
  //   window.encodeURI( )
  // }

  return (
    <div className="card mb-40 ">
      <b className="card-cat mb-10 regular">{fields.category.charAt(0).toUpperCase() + fields.category.slice(1)}</b> 
      <Link className="card-title mb-10" to={`/${fields.category}/${removeAccents(fields.titleUrl)}`}>
        {fields.title}
      </Link>
      <span className="card-date small mb-10">
        {formatTime(fields.createDate)}
      </span>
      <img
        className="mb-20"
        alt={fields.image.fields.title}
        src={fields.image.fields.file.url}
      ></img>
      <div className="card-content">
        {documentToReactComponents(fields.content, options)}
      </div>
      {/* <a className="mt-20 small">đọc thêm></a> */}
      {/* <div className="card-footer mt-40">footer</div> */}
    </div>
  );
};

export default PostCard;
