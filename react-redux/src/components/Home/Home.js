import React from 'react';

class Home extends React.Component {
    render () {
        return (
            <section className="content-grid">
                <div className="grid">
                    <div className="grid__col-12">
                        <h2 id="tiles-example">Home <a href="#tiles-example">#</a></h2>
                    </div>
                </div>

                <div className="grid">
                    <a href="#0" className="grid__col-auto grid--justify-center grid--align-center example-tile example-tile-1">
                        <h3>Lesson 1</h3>
                        <p>Introducing HTML</p>
                        <span className="cta">
                    more info
                </span>
                    </a>
                    <a href="#0" className="grid__col-auto grid--justify-center grid--align-center example-tile example-tile-2">
                        <h3>Lesson 2</h3>
                        <p>Introducing CSS</p>
                        <span className="cta">
                    more info
                </span>
                    </a>
                </div>

                <div className="grid">
                    <a href="#0" className="grid__col-auto grid--justify-center grid--align-center example-tile example-tile-3">
                        <h3>Lesson 3</h3>
                        <p>Advanced CSS</p>
                        <span className="cta">
                    more info
                </span>
                    </a>
                    <a href="#0" className="grid__col-auto grid--justify-center grid--align-center example-tile example-tile-4">
                        <h3>Lesson 4</h3>
                        <p>Advanced HTML5</p>
                        <span className="cta">
                    more info
                </span>
                    </a>
                    <a href="#0" className="grid__col-auto grid--justify-center grid--align-center example-tile example-tile-5">
                        <h3>Lesson 5</h3>
                        <p>Introducing JavaScript</p>
                        <span className="cta">
                    more info
                </span>
                    </a>
                </div>
            </section>
        );
    }
}

export default Home;
