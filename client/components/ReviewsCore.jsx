import React from 'react';
import axios from 'axios';
import SingleReviewTile from './RatingsAndReviews/SingleReviewTile.jsx';

class ReviewsCore extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: []
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.currentProductId !== prevProps.currentProductId) {
      getReviewData(this.props.currentProductId)
        .then((res) => {
          let allReviews = response.data.results;
          this.setState({
            reviews: allReviews})
        })
    }
  }

  getReviewData() {
    axios.get(`/api/products/${this.props.currentProductId}/reviews`)
  }


  render () {
    const {currentProductId} = this.props;
    return (
      <div className="reviews-core">
        <h2>Reviews Core</h2>
        <SingleReviewTile currentProductId={currentProductId} reviews={this.state.reviews} />
      </div>
    )
  }
}

export default ReviewsCore;