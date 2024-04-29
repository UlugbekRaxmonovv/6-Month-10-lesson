import React, { Component } from 'react';
import './Search.css'

class Search extends Component {
    render() {
        return (
            <div>
                <section className='search'>
               <div className="search-all container ">
                <h4>{this.props.h1}</h4>
                <h1>{this.props.p}</h1>

                <div className="search-row">
                <div className="input">
                 <input type="text" placeholder='Enter your message' />
                </div>
                <div className="input">
                <button>Send</button>
                </div>
                </div>
               </div>
                   
                </section>
            </div>
        );
    }
}

export default Search;
