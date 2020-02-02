import React, { useEffect, useState } from "react";
import * as contentful from "contentful";
import PostCard from "../../components/PostCard/";
import "./listpost.scss";
export default ({cat}) => {
  const [contents, setContents] = useState('beforeloading');

  
  useEffect(() => {
    const client = contentful.createClient({
      space: "zttx8n98lc3r",
      accessToken: "AGjnCQHwzRIWOr7e9-kn8PLMMd0cWnRCXRjiNl_YHrY"
    });
    const getPost = async () => {
      const data = await client.getEntries({
        // order: "sys.updatedAt",
        content_type: "blogPost",
        'fields.category': cat,
      });
      setContents(data);
    };

    getPost();
  }, [cat]);
  
  const PostCardList = (contents.items || []).map((content, index) => {
    return (
      <div key={index} className="mb-40">
        <PostCard isHomePage={cat === ''} {...content} />
      </div>
    );
  });

  if ((contents.items || []).length!==0)  return PostCardList
  else if (contents!=='beforeloading') return <div className="text-progress">Chưa có gì ở đây hết cậu ơi {':<'} </div>
  return <div className="text-progress">Đợi tớ tìm content tí :></div>
};  
