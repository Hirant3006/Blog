import { useState, useEffect } from "react";
import * as contentful from 'contentful'

const client = contentful.createClient({
      space: "zttx8n98lc3r",
      accessToken: "AGjnCQHwzRIWOr7e9-kn8PLMMd0cWnRCXRjiNl_YHrY"
});

const usePost = (cat, title) => {
  const [post, setPost] = useState(-1);

  function replaceText(str) {
    return str.split("-").join(" ");
  }

  useEffect(() => {
    (async (cat, title) => {
      const data = await client.getEntries({
        order: "sys.updatedAt",
        content_type: "blogPost",
        "fields.category": cat,
        "fields.titleUrl": replaceText(title),
      });
      data.total ? setPost(data.items[0]) : setPost(-1)
    })(cat, title);
  }, [cat, title]);

  return post;
};

export default usePost;
