import React from "react";
import StyledPostCard from "./styledPostCard";
import moment from "moment";
import { BLOCKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import MetaTags, { ReactTitle } from "react-meta-tags";
import filtersTitles from "../../utilities/index.js";
import 'moment/locale/vi';

const Post = ({ fields }) => {
  const formatTime = date => moment(date).locale('vi').format("DD/MM/YYYY HH:mm");

  const options = {
    // Render image
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: node => {
        let { title, file } = node.data.target.fields;
        return (
          <div className="card-content-img mt-20 mb-20">
            <img alt={file.name} src={file.url} />
            <div>{title}</div>
          </div>
        );
      }
    },
    renderText: text =>
      text.split("\n").flatMap((text, i) => [i > 0 && <br key={i} />, text])
  };

  return (
    <StyledPostCard className="mb-40 ">
      <div className="card">
        <ReactTitle title={`${fields.title} |  A little Hirany`} />
        <MetaTags>
          <meta property="og:title" content={fields.title} />
        </MetaTags>
        <a className="card-title mb-10" href="/">
          {fields.title}
        </a>
        <b className="card-cat mb-10 regular">
          {filtersTitles(
            fields.category.charAt(0).toUpperCase() + fields.category.slice(1)
          )}
        </b>
        <span className="card-date small mb-30">
          {formatTime(fields.createDate)}
        </span>
        <div className="card-content">
          {documentToReactComponents(fields.content, options)}
        </div>
        {/* <a className="mt-20 small">đọc thêm></a> */}
        {/* <div className="card-footer mt-40">footer</div> */}
      </div>
    </StyledPostCard>
  );
};

export default Post;
