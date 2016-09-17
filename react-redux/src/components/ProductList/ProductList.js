import React from 'react';
import ProductService from '../../services/ProductService';
import ProductDetail from '../ProductDetail/ProductDetail';

class ProductList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {products: []};
    }

    componentDidMount() {
        ProductService.getAllProducts().then((products) => {
            if (products) {
                this.setState({products: products});
            }
        });
    }
    render () {
        let products;
        if (this.state.products){
            products = this.state.products.map((product) => {
                return (
                    <ProductDetail
                        key={product.id}
                        title={product.title}
                        author={product.author}
                    />);
            });
        }
        return (
            <div>
                {products}
            </div>
        );
    }
}

export default ProductList;
