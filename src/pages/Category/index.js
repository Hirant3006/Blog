import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const Category = () => {
    let param = useParams();
    useEffect(() => {
        console.log('Param ' , param)
    },[])
return <div>{param.cat}</div>
};

export default Category
