import React from 'react'
import { connect } from 'react-redux'
import { removeFromCart, addQuantity, subQuantity } from '../actions'

class Cart extends React.Component {
  render() {
    if (!this.props.products) return <div> no product selected</div>
    return (
      <div>
        <table className="ui selectable celled table">
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Product</th>
              <th>Price</th>
              <th>Qunatity</th>
              <th>Product Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{this.drawProductsTable()}</tbody>
        </table>
        <div>Total Items: {this.props.totalItems}</div>
      </div>
    )
  }

  drawProductsTable() {
    return this.props.cart.map((product) => {
      const currentProd = this.props.products.filter((prod) => {
        return prod.id === product
      })
      return (
        <tr key={this.props.images[`${product - 1}`].id}>
          <td>{product}</td>
          <td>
            <img
              ref={this.props.images[`${product - 1}`].imageRef}
              src={this.props.images[`${product - 1}`].urls.regular}
              alt={this.props.images[`${product - 1}`].alt_description}
              className="ui small rounded image"
            />
          </td>
          <td>{currentProd[0].title}</td>
          <td>{currentProd[0].price}</td>
          <td>
            <div className="large ui buttons center floated">
              <button
                className="ui button"
                onClick={() => this.props.subQuantity(currentProd[0])}
              >
                <i className="minus icon"></i>
              </button>
              <div
                className="or"
                data-text={this.props.quantity[product]}
              ></div>
              <button
                className="ui button"
                onClick={() => this.props.addQuantity(currentProd[0])}
              >
                <i className="plus icon"></i>
              </button>
            </div>
          </td>
          <td>{this.props.quantity[product] * currentProd[0].price}</td>
          <td>
            <div
              className="ui animated button"
              tabIndex="0"
              onClick={() => this.props.removeFromCart(currentProd[0])}
            >
              <div className="hidden content">Remove</div>
              <div className="visible content">
                <i className="trash  alternate icon"></i>
              </div>
            </div>
          </td>
        </tr>
      )
    })
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    products: state.products,
    images: state.images,
    quantity: state.quantity,
    totalItems: state.totalItems,
  }
}

export default connect(mapStateToProps, {
  removeFromCart,
  addQuantity,
  subQuantity,
})(Cart)
