import React, { useEffect, useState } from "react";
import * as contentful from "contentful";
import PostCard from "../../components/PostCard/";
import "./listpost.scss";

export default ListPost => {
  const [contents, setContents] = useState({});

  useEffect(() => {
    const client = contentful.createClient({
      space: "zttx8n98lc3r",
      accessToken: "AGjnCQHwzRIWOr7e9-kn8PLMMd0cWnRCXRjiNl_YHrY"
    });
    const getPost = async () => {
      const data = await client.getEntries({
        order: "sys.updatedAt",
        content_type: "blogPost"
      });
      const data2 = await client.getContentTypes();
      console.log("data ", data2);
      setContents(data);
    };

    getPost();
  }, []);

  const PostCardList = (contents.items || []).map((content, index) => {
    return (
      <div key={index} className="mb-40">
        <PostCard {...content} />
      </div>
    );
  });

  return contents ? PostCardList : <div>Đợi tí..</div>;
};
