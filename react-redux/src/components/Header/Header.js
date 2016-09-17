import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';


class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {open: false};
        this.handleToggle = this.handleToggle.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleToggle () {
        this.setState({open: !this.state.open});
    }

    handleClose () {
        this.setState({open: false});
    }

    render() {
        return (
            <div>
                <AppBar
                    title='React Redux Workshop'
                    onLeftIconButtonTouchTap={this.handleToggle}
                    isInitiallyOpen={true}
                />
                <Drawer
                    docked={false}
                    width={200}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({open})}
                >
                    <MenuItem onTouchTap={this.handleClose}><IndexLink to="/">Home</IndexLink></MenuItem>
                    <MenuItem onTouchTap={this.handleClose}><Link to="product-list">Products</Link></MenuItem>
                    <MenuItem onTouchTap={this.handleClose}><Link to="about-us">About Us</Link></MenuItem>
                </Drawer>
            </div>
        );
    }
}
export default Header;
