import React from 'react';
import { BrowserRouter, Route } from  'react-router-dom';
import Header from './Header';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';
import Cart from  './Cart';


const App  = () => {  

return (
    <div className="ui container">
        <BrowserRouter>
            <div>
                <Header  />
                <Route path="/" exact component={ProductList} />
                <Route path="/product/:id" component={ProductDetails} />
                <Route path="/cart" exact component={Cart} />
            </div>
        </BrowserRouter>
    </div>
    ); 
};

export default App;
