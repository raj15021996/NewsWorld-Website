import React from "react";
import "./NewsCard.css";
function NewsItems({ title, description, imageUrl, newsUrl, author, date }) {
  return (
    <div>
      <div className="card my-2 " id="main-card" style={{ width: "18rem",height:"30rem"}}>
       
        <img
          src={imageUrl}
          className="card-img-top"
          alt="bulletien_image"
          id="card-image"
        ></img>
        
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text ">{description}...</p>
          <p className="card-text">
            <small className="text-muted">
              By {!author ? "Unkown" : author} on {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            href={newsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-warning d-flex justify-content-center"
            id="card-ancher"
          >
            Read More...
          </a>
        </div>
      </div>
    </div>
  );
}

export default NewsItems;
