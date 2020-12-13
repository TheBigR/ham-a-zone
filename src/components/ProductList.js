import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  fetchProducts,
  showProductDetails,
  fetchImages,
  addToCart,
} from '../actions'

class ProductList extends React.Component {
  componentDidMount() {
    this.props.fetchProducts()
    this.props.fetchImages()
  }

  renderList() {
    return this.props.products.map((product) => {
      return (
        <div
          className="ui item"
          key={this.props.images[`${product.id - 1}`].id}
        >
          <img
            ref={this.props.images[`${product.id - 1}`].imageRef}
            src={this.props.images[`${product.id - 1}`].urls.regular}
            alt={this.props.images[`${product.id - 1}`].alt_description}
            className="ui small rounded image"
          />
          <div className="content">
            <div className="header">{product.title}</div>
            <div className="description">price: {product.price}$</div>
            <div className="extra">
              <div className="large ui buttons right floated">
                <Link to={`/product/${product.id}`}>
                  <button
                    className="ui button "
                    onClick={() => this.props.showProductDetails(product)}
                  >
                    Details...
                  </button>
                </Link>
                <div className="or" data-text=""></div>
                <div
                  className="ui animated button"
                  tabIndex="0"
                  onClick={() => this.props.addToCart(product)}
                >
                  <div className="hidden content">Add</div>
                  <div className="visible content">
                    <i className="shop icon"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    })
  }

  render() {
    return <div className="ui divided items">{this.renderList()}</div>
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
    images: state.images,
  }
}

export default connect(mapStateToProps, {
  fetchProducts,
  showProductDetails,
  fetchImages,
  addToCart,
})(ProductList)
