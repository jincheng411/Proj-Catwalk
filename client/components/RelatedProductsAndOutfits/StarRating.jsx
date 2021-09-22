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
        className='stars'
        rating={this.props.rating}
        starRatedColor="rgb(235, 210, 17)"
        changeRating={this.changeRating}
        numberOfStars={5}
        name='rating'
        starDimension="12px"
        starSpacing="8px"
        />
        )
      }
  }
}
export default StarRating;