import React from 'react';
import axios from 'axios';
import SingleReviewTile from './RatingsAndReviews/SingleReviewTile.jsx';
import WriteNewReviewButton from './RatingsAndReviews/WriteNewReviewButton.jsx';
import MoreReviewsButton from './RatingsAndReviews/MoreReviewsButton.jsx';
import './ReviewsStyle.css';

class ReviewsCore extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: []
    }
  }

  componentDidMount() {
    ('is this working?')
    this.getReviewData()
  }
  componentDidUpdate(prevProps) {
    if (prevProps.currentProductId !== this.props.currentProductId) {
      if (this.props.currentProductId) {
        axios.get(`/api/reviews`, {
          params: {
            product_id: this.props.currentProductId
        }
        }).then(({ data }) => {
          this.setState({
            reviews: data.results,
          })
        })
      }
    }
  }

  getReviewData() {
    ('allo?');
    axios.get(`/api/reviews`, {
      params: {
        product_id: this.props.currentProductId
    }
    }).then(({ data }) => {
      this.setState({
        reviews: data.results,
      })
    })
  }


  render () {
    ('array of reviews:', this.state.reviews);
    const {currentProductId} = this.props;
    return (
      <div className="reviews-core">
        <h2>Reviews Core</h2>
        <SingleReviewTile currentProductId={currentProductId} reviews={this.state.reviews} />
        <MoreReviewsButton /><br></br><br></br><WriteNewReviewButton />
      </div>
    )
  }
}

export default ReviewsCore;