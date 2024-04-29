import React, { Component } from 'react';

import './About.css'

class About extends Component {
    render() {
        return (
            <div>
                <section name="" id="select1">
                <div className="about">
                    <div className="about-all container">
                    <div className="about-row">
                            <img src={this.props.url} alt="" />
                        </div>
                        <div className="about-row">
                           <h3>{this.props.h3}</h3>
                           <h2>{this.props.h1}</h2>
                           <h5>{this.props.p}</h5>
                           <button>{this.props.btn}</button>
                        </div>
                    </div>
                </div>
                </section>
            </div>
        );
    }
}

export default About;
