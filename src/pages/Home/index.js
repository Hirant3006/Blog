import React, { useEffect, useState } from "react";
import "./home.scss";
import * as contentful from "contentful";
import BlogPost from '../../components/BlogPost';


export default Home => {
  const [contents, setContents] = useState([]);

  const client = contentful.createClient({
    space: "zttx8n98lc3r",
    accessToken: "AGjnCQHwzRIWOr7e9-kn8PLMMd0cWnRCXRjiNl_YHrY"
  });

  const getPost = () =>
    client.getEntries().then(entries => {
      setContents(entries.items)
    });
    
    useEffect(() => {
      getPost();
    }, []);

//  const BlogPost = contents.map((content,index) => {
//    return <BlogPost props={content} />
//  }) 

  return (
    <div className="main">
      {/* {BlogPost} */}
    </div>
  );
};
