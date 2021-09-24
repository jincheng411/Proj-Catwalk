import React from "react";
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
  componentDidMount() {
    this.comparisonModal();
  }
  componentDidUpdate(prevProps) {
    if(prevProps.hover !== this.props.hover || this.props.myProductFeatures !== prevProps.myProductFeatures) {
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
    const{currentProduct, myName} = this.props
    return (
    <div>
      <div className={toggleModal}>
        <div className='comparison-main-pop-up'>
          <div className='compare-head-wrap'>
          <span className='compare-head'>Comparing</span>
          </div>
          <br></br>
          <span className='current-product-name-cm'>{currentProduct.name}</span>
          <span> || </span>
          <span className='product-card-name-cm'>{myName}</span>
          <br></br>
          <br></br>
          <table className="features-table">
          <tbody className="features-table">
            {this.state.features.map((feature, index) => {
              return (
                <tr className="features-table-rows" key={index}>
                  <td className="features-table-text" >{this.state.featuresObj[feature] === 'current' || this.state.featuresObj[feature] === 'both' ? <i className="fas fa-check"></i> : ''}</td>
                  <td className="features-table-text features-table-name">{feature}</td>
                  <td className="features-table-data">{this.state.featuresObj[feature] === 'inBoth' || this.state.featuresObj[feature] === 'recent' ? <i className="fas fa-check"></i> : ''}</td>
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