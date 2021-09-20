import React from 'react';

const SingleReviewTile = (props) => {
  let currentProductId = props.currentProductId;
  let reviews = props.reviews;
  console.log('hello', currentProductId, reviews);

  return (
    <div className="single-review-tile">
      <h3>Product Id: {currentProductId}</h3>
      <ul>
        {reviews.map((loneReview) => {
          return (
            <div className="lone-review" key={loneReview.review_id}>
              <h5>Review {loneReview.review_id}</h5>
              {loneReview.rating}<br></br>
              {loneReview.reviewer_name}<br></br>
              {loneReview.date}<br></br>
              {loneReview.summary}<br></br>
              {loneReview.body}<br></br>
              {loneReview.recommend}<br></br>
              {loneReview.response}<br></br>
              {loneReview.helpfulness}<br></br>
            </div>
          )
        })}
      </ul>
    </div>
  )
}

export default SingleReviewTile;