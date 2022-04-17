import React from "react";
import "./Comment.css";

const Comment = ({ comment }) => {
  const { img, name, describe } = comment;

  return (
    
      <div className="col-12 col-md-6 col-lg-4 shadow p-3">
        <img className="customer-img me-3" src={img} alt="" />
        <div>
          <h5 className="my-3">{name}</h5>
          <p>{describe}</p>
        </div>
      </div>
  );
};

export default Comment;
