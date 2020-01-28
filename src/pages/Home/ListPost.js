import React, { useEffect, useState } from "react";
import * as contentful from "contentful";
import PostCard from "../../components/PostCard/";

export default ListPost => {
  const [contents, setContents] = useState({});
 
  useEffect(() => {
    const client = contentful.createClient({
        space: "zttx8n98lc3r",
        accessToken: "AGjnCQHwzRIWOr7e9-kn8PLMMd0cWnRCXRjiNl_YHrY"
      });
    const getPost = async () => {
        const data = await client.getEntries();
        console.log("data ", data);
        setContents(data);
      };
    
    getPost();
  }, []);

  const PostCardList = (contents.items || []).map((content, index) => {
    return <div key={index}><PostCard {...content} /></div>
  })

  return (
    <div className="posts">
      {PostCardList}
    </div>
  );
};
