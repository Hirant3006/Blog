import React from "react";
import StyledPostCard from "./styledPostCard";
import moment from "moment";
import { Link } from "react-router-dom";
import filtersTitles from "../../utilities/index.js";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const PostCard = ({ fields }) => {
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
    <StyledPostCard className="mb-40">
      <div className="card">
        <Link
          className="card-title"
          to={`/${fields.category}/${removeAccents(fields.titleUrl)}`}
        >
          {fields.title}
        </Link>
        <b className="card-cat regular">
          {filtersTitles(
            fields.category.charAt(0).toUpperCase() + fields.category.slice(1)
          )}
        </b>
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
    </StyledPostCard>
  );
};

export default PostCard;
