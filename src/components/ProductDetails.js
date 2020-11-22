import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions';
import { Link } from 'react-router-dom';



class ProductDetails extends React.Component {
        
    renderDetails() {
        if (!this.props.product)
            return (<div> no  product selected</div>)
        return  (
            <div>                
                <img 
                        ref={this.props.images[`${this.props.product.id-1}`].imageRef} 
                        src={this.props.images[`${this.props.product.id-1}`].urls.regular} 
                        alt={this.props.images[`${this.props.product.id-1}`].alt_description}
                        className="ui medium rounded image"
                />
                <div>
                    <h3>{this.props.product.title}</h3>
                    <div>
                        price: {this.props.product.price} $                    
                    </div>
                </div>
                
                <div className="description">
                    {this.props.product.description}
                </div>                
                <div>
                <div  className="large ui buttons right floated ">
                                 <Link to="/" className="item">
                                 <div className="ui animated button" tabIndex="0" >
                                    <div className="hidden content">Home</div>
                                    <div className="visible content">
                                        <i className="home icon"></i>
                                    </div>
                                </div>
                                </Link>
                                 <div className="or"  data-text=""></div>
                                 <div className="ui animated button" tabIndex="1" onClick={() => this.props.addToCart(this.props.product)} >
                                    <div className="hidden content">Add</div>
                                    <div className="visible content">
                                        <i className="shop icon"></i>
                                    </div>
                                </div>
                            </div>                  
                </div>            
            </div>
        );
    }

    render() {
        return  (
            <div>{this.renderDetails()}</div>
        )
    }
};


const mapStateToProps = (state) => {
    return {
        product: state.selectedProd.selectedProduct,
        images:  state.images        
    }
}

export default connect (mapStateToProps, { addToCart })(ProductDetails);
