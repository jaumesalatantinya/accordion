import React from 'react';
import Paper from 'material-ui/Paper';

const style = {
    margin: 'auto',
    display: 'block'
};

class Home extends React.Component {
    render () {
        return (
        <Paper style={style} >
            <section className="content-grid">
            <div className="grid">
                <section className="grid__col-sm-7 grid__col-md-8 grid__col--bleed">
                    <ul className="grid">
                        <li className="grid__col-12">
                            <h3>Amazing destination</h3>
                            <div className="grid__cell">
                                <img src="http://lorempixel.com/400/200/city/1/" className="example-img-right" />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec est eget dui volutpat imperdiet. In hac habitasse platea dictumst. Duis eget eros risus. Maecenas vel pretium urna, sit amet efficitur urna.</p>
                                    <a className="example-btn" href="javascript:void(0);">read more</a>
                            </div>
                        </li>
                        <li className="grid__col-12 grid__col-md-6">
                            <h3>Brilliant views</h3>
                            <p>Aliquam ornare faucibus leo, vel euismod nisi porta non. Donec at arcu eget enim bibendum facilisis. Etiam urna elit, blandit ut libero placerat, iaculis aliquam erat.</p>
                            <div className="grid__cell-footer">
                                <a className="example-btn" href="javascript:void(0);">read more</a>
                            </div>
                        </li>
                        <li className="grid__col-12 grid__col-md-6">
                            <h3>Stellar beaches</h3>
                            <p>Nunc venenatis pulvinar tempor. In ligula tortor, laoreet non elementum et, consectetur placerat augue. Curabitur lobortis, dui a ullamcorper vulputate, purus est hendrerit leo.</p>
                            <div className="grid__cell-footer">
                                <a className="example-btn" href="javascript:void(0);">read more</a>
                            </div>
                        </li>
                        <li className="grid__col-12 grid__col-md-6">
                            <h3>Special offer</h3>
                            <p>Vestibulum tincidunt et lorem eu congue. Sed molestie finibus nisi non dictum. Aliquam hendrerit dolor id eleifend dignissim. Proin sed magna consectetur, pellentesque mi vel, blandit nisi. Praesent quis efficitur sapien, id tempor mi. Nulla molestie euismod arcu, at ullamcorper mi vehicula id.</p>
                            <div className="grid__cell-footer">
                                <a className="example-btn" href="javascript:void(0);">read more</a>
                            </div>
                        </li>
                        <li className="grid__col-12 grid__col-md-6">
                            <h3>Romantic getaway</h3>
                            <p>Cras nec dui in erat auctor molestie nec non odio. Nam rhoncus ipsum tincidunt.</p>
                            <div className="grid__cell-footer">
                                <a className="example-btn" href="javascript:void(0);">read more</a>
                            </div>
                        </li>
                    </ul>
                </section>
            </div>
            </section>
            </Paper>
        );
    }
}

export default Home;
