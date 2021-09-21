import React from 'react';
import StarRatings from 'react-star-ratings';


class StarRating extends React.Component {
  constructor(props) {
    super(props)
    this.changeRating = this.changeRating.bind(this)
  }
  changeRating( newRating, name ) {
    this.setState({
      rating: newRating
    });
  }
  render() {
    if (this.props.rating === 100) {
      return (
        <p className='no-reviews'>No Reviews</p>
      )
    } else if (this.props.rating >= 0 && this.props.rating <= 5) {
      return (
        <StarRatings
        rating={this.props.rating}
        starRatedColor="black"
        changeRating={this.changeRating}
        numberOfStars={5}
        name='rating'
        starDimension="10px"
        starSpacing="8px"
        />
        )
      }
  }
}
export default StarRating;