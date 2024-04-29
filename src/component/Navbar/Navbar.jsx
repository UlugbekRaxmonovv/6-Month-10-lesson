import React, { Component } from 'react';
import { data } from '../../Malumot';
import rasm1 from '../../img/rasm1.png'
import './Navbar.css'

class Navbar extends Component {

    render() {
        return (
            <div>
        <header>
          <div className="container">
            <nav>
                <ul className='nav-link'>
                    <img src={rasm1} alt="" />
                  {
                  data?.map((el)=>(
                      <li key={el}>
                        <a href="#select1" className="">{el}</a>
                      </li>
                  ))
                  }
                </ul>
                <button>Booking Now</button>
            </nav>
          </div>
        </header>
            </div>
        );
    }
}

export default Navbar;
