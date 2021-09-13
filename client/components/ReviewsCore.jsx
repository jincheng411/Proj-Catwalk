import React from 'react';
import axios from 'axios';

class ReviewsCore extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: []
    }
  }
  render () {
    return (
      <div>
        <h1>Reviews Core</h1>
      </div>
    )
  }
}

export default ReviewsCore;