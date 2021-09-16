import React from 'react';
import StarRatings from 'react-star-ratings';

class StarRating extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      rating: 0
    }
    this.changeRating = this.changeRating.bind(this)
  }
  changeRating( newRating, name ) {
    this.setState({
      rating: newRating
    });
  }
  render() {
    return (
      <StarRatings
          rating={this.state.rating}
          starRatedColor="black"
          changeRating={this.changeRating}
          numberOfStars={5}
          name='rating'
        />
    )
  }
}
export default StarRating;