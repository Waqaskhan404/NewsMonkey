import React from "react";

const NewItem=(props)=>  {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      props;
    return (
      <div className="my-3">
        <div className="card">
          <div
            style={{
              display: "felx",
              justifyContent: "flex end",
              position: 'absolute',
              right: "0",
            }}
          >
            <span className="badge rounded-pill bg-danger">{source}</span>
          </div>

          <img
            src={
              !imageUrl
                ? "https://static.themoscowtimes.com/image/1360/21/btg-ks-pano_1.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title} ...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-muted">
                by {author} on {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );

}

export default NewItem;
