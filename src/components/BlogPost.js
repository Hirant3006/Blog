import React, { useEffect, useState } from "react";

export default  (props) => {
    useEffect(() => {
        console.log(this.props)
      }, []);

      return (
          <div>
               BlogPost 
          </div>
      )
}