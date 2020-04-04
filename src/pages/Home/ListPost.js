import React, { useEffect, useState } from "react";
import * as contentful from "contentful";
import PostCard from "../../components/PostCard/";
import "./listpost.scss";

const Er404 = (contents) => (
  <div className="text-progress">
   {contents==='error' ? 'Hừm.. có vẻ chúng ta đang offline' : ((contents.items || []).length === 0) ?  "Chưa có gì ở đây hết cậu ơi :<" : "Đợi tớ tìm content tí :>"} 
    {/* <img class="meow1" alt="meow" src={require("../../assets/meow1.png")} />{" "}
    <img class="meow2" alt="meow" src={require("../../assets/meow2.png")} /> */}
  </div>
);

const client = contentful.createClient({
  space: "zttx8n98lc3r",
  accessToken: "AGjnCQHwzRIWOr7e9-kn8PLMMd0cWnRCXRjiNl_YHrY"
});

// const getPost = cat => {
//   return new Promise(resolve => {
//     client
//       .getEntries({
//         // order: "sys.updatedAt",
//         content_type: "blogPost",
//         "fields.category": cat
//       })
//       .then(data => resolve(data));
//   });
// };
const getPost = cat => {
  return client
    .getEntries({
      // order: "sys.updatedAt",
      content_type: "blogPost",
      "fields.category": cat
    })
    .then(data => Promise.resolve(data)).catch(error => Promise.reject(error))
};

export default ({ cat }) => {
  const [contents, setContents] = useState("beforeloading");

  useEffect(() => {
    getPost(cat).then(data => setContents(data)).catch(error => setContents('error'))
  }, [cat]);

  const PostCardList = (contents.items || []).map((content, index) => {
    return (
      <div key={index} className="mb-40">
        <PostCard isHomePage={cat === ""} {...content} />
      </div>
    );
  });

  if ((contents.items || []).length !== 0) return PostCardList;
  else if (contents !== "beforeloading") return Er404(contents);
  return <div className="text-progress">Đợi tớ tìm content tí :></div>;
};
