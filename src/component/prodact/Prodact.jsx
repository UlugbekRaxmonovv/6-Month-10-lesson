import React, { Component } from 'react';
import './Prodact.css'
import rasm1 from '../../img/rasm6.png'
import rasm2 from '../../img/rasm7.png'
import rasm3 from '../../img/rasm8.png'
import rasm4 from '../../img/rasm9.png'
import rasm5 from '../../img/rasm10.png'
import rasm6 from '../../img/rasm11.png'
import rasm7 from '../../img/rasm12.png'
import { IoIosStar } from "react-icons/io";


const data =[
    {
        id:1,
        img:rasm1,
        h1:'Vegie Muffen',
        span:'16$',
        p:'There are many things are needed to start the Fast Food Business.',
        btn1:'+',
        btn2:'-'
    },
    {
        id:2,
        img:rasm2,
        h1:'Salads',
        span:'12$',
        p:'There are many things are needed to start the Fast Food Business.',
        btn1:'+',
        btn2:'-'
    },
    {
        id:3,
        img:rasm3,
        h1:'Burger',
        span:'10$',
        p:'There are many things are needed to start the Fast Food Business.',
        btn1:'+',
        btn2:'-'
    },
    {
        id:4,
        img:rasm4,
        h1:'Delmonico Steak dish',
        span:'14$',
        p:'There are many things are needed to start the Fast Food Business.',
        btn1:'+',
        btn2:'-'
    },
    {
        id:5,
        img:rasm5,
        h1:'Egg Masala',
        span:'9$',
        p:'There are many things are needed to start the Fast Food Business.',
        btn1:'+',
        btn2:'-'
    },
    {
        id:6,
        img:rasm6,
        h1:'Peach Melba dish',
        span:'15$',
        p:'There are many things are needed to start the Fast Food Business.',
        btn1:'+',

    },
]

let links= data?.map((inx)=>(
    <div className="product-alt">
    <img src={inx.img} alt="" />
    <div className="p-1">
    <div className="p-2">
                <h1>{inx.h1}</h1>
        </div>
        <div className="p-2">
               <p>{inx.span}</p>
        </div>
    </div>
    <p>{inx.p}</p>
    <div className="btn1">
    <div className="btn7">
            <button className='box'>{inx.btn1}</button>
        </div> 
        <div className="btn7">
            <IoIosStar />
            <IoIosStar /> 
            <IoIosStar />
            <IoIosStar />
        </div>
    </div>
  </div>
))

class Prodact extends Component {

    render() {
        return (
            <div>
               <section>
                <div className="product">
                    <div className="product-all container">
                        <div className="tig">
                            <div className="tig1">
                                <h4>{this.props.span}</h4>
                                <h1>{this.props.h1}</h1>
                                <p> {this.props.p}</p>
                            </div>
                        </div>
                        <div className="product-row">
                        {links}
                        </div>
                        <div className="link">
                            <button>Learn More</button>
                        </div>


                        <div className="bottom">
                            <div className="bottm-all">
                                <div className="bottom-row">
                                    <span> Testimonial</span>
                                    <h1>Making Food great again and again</h1>
                                    <p>You need not only Just Food Stalls with Persons but also specialized equipment, Skills to manage Customers, Effective Product catlogues etc to make your.</p>

                                </div>
                                <div className="bottom-alt">
                                    <div className="bottom-link">
                                        <img src={rasm7} alt="" />
                                    </div>
                                 <h1>You need not only Just Food Stalls with Persons but also specialized equipment, Skills to manage Customers, Effective Product catlogues etc very successful to make your.</h1>
                                 <IoIosStar />
                                 <IoIosStar />
                                 <IoIosStar />
                                 <IoIosStar />
                                 <p>Augusta W. Reynoso</p>

                                 <h5>UI&UX DeSIGNER</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               </section>
           
            </div>
        );
    }
}

export default Prodact;
