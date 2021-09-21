import React from "react";

/*
PROPS
currentProduct {id, name}
currentProductFeatures: [{feature}, {feature}]
hover: false
myName: name of ProductCard
myProductFeatures: features of product card ([{}, {}, {}])
*/
//? Current is product detail
//? recent is relatedProduct Card
class ComparisonModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      toggleModal: this.props.hover ? 'compare-modal display-block' : 'compare-modal display-none',
      features: [],
      featuresObj: {}
    }
    this.comparisonModal = this.comparisonModal.bind(this)
  }
  componentDidUpdate(prevProps) {
    if(prevProps.hover !== this.props.hover || this.props.myProductFeatures !== prevProps.myProductFeatures) {
    this.setState({toggleModal: this.props.hover ? 'compare-modal display-block' : 'compare-modal display-none'})
    this.comparisonModal();
    }
  }

  comparisonModal() {
    if (this.props.myProductFeatures.length > 0 && this.props.currentProductFeatures.length > 0) {
      var features = {};
      this.props.currentProductFeatures.forEach(currentProductFeature => {
        if (currentProductFeature.value) {
          features[currentProductFeature.feature + ': ' + currentProductFeature.value] = 'current';
        } else {
          features[currentProductFeature.feature] = 'current';
        }
      });
      this.props.myProductFeatures.forEach(oneFeature => {
        if (oneFeature.value) {
          if (features[oneFeature.feature + ': ' + oneFeature.value] === 'current') {
            features[oneFeature.feature + ': ' + oneFeature.value] = 'both';
          } else {
            features[oneFeature.feature + ': ' + oneFeature.value] = 'recent';
          }
        } else {
          if (features[oneFeature.feature] === 'current') {
            features[oneFeature.feature] = 'both';
          } else {
            features[oneFeature.feature] = 'recent';
          }
        }
      });
      var finalFeaturesArray = Object.keys(features);
      this.setState({features: finalFeaturesArray,
      featuresObj: features})

  }
}

  render() {
    console.log(this.state)
    const {toggleModal} = this.state
    const{currentProduct, currentProductFeatures, myName, myProductFeatures} = this.props
    return (
    <div>
      <div className={toggleModal}>
        <div className='comparison-main-pop-up'>
          <span className='compare-head'>Comparing</span>
          <br></br>
          <span className='current-product-name-cm'>{currentProduct.name}</span>
          <span>    ||   </span>
          <span className='product-card-name-cm'>{myName}</span>
          <br></br>
          <br></br>

          <table id="features-table">
          <tbody>
            {this.state.features.map((feature, index) => {
              return (
                <tr className="features-table-rows" key={index}>
                  <td className="features-table-text" >{this.state.featuresObj[feature] === 'current' || this.state.featuresObj[feature] === 'both' ? 'check' : ''}</td>
                  <td className="features-table-text features-table-name">{feature}</td>
                  <td className="features-table-data">{this.state.featuresObj[feature] === 'inBoth' || this.state.featuresObj[feature] === 'recent' ? 'check' : ''}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        </div>
      </div>
    </div>
  );
  }
}
export default ComparisonModal;