import React, { Component } from 'react';
import './Main.css'

class Main extends Component {
    render() {
        return (
            <div>
                  <section className='section'>
                    <div className="container">
                        <div className="main">
                        <div className="main-all">
                                <h1>{this.props.h1}</h1>
                                <p>{this.props.p}</p>
                               <div className="btn">
                               <div className="btn1">
                                <button>{this.props.btn}</button>
                                </div>
                                <div className="btn1">
                                <button>{this.props.btn1}</button>
                                </div>
                               </div>
                            </div>
                            <div className="main-all">
                              <img src={this.props.url} alt="" />
                            </div>
                        </div>
                    </div>
                  </section>
            </div>
        );
    }
}

export default Main;
