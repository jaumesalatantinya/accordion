import React, {PropTypes} from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends React.Component {
    render () {
        return (
            <MuiThemeProvider>
                <div>
                    <Header />
                    {this.props.children}
                    <Footer />
                </div>
            </MuiThemeProvider>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;
