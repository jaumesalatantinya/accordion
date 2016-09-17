import React, {PropTypes} from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

const ProductDetail = ({title, author}) => {

    return (
        <Paper>
            <h4>{title}</h4>
            {author}
            <h4><RaisedButton label="View Detail" primary={true} /></h4>
        </Paper>
    );
};

ProductDetail.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
};

export default ProductDetail;
