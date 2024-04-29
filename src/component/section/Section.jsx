import React, { Component } from 'react';
import './Section.css'
import rasm1 from '../../img/rasm3.jpg'
import rasm2 from '../../img/rasm2.png'
import rasm4 from '../../img/rasm4.png'
import rasm5 from '../../img/rasm5.png'



let card =[
    {
        id:1,
        h1:'Quality Food',
        p:'It can be a very secure path to earn good money and make you very successful creative entrepreneur.',
        url:rasm2

    },
    {
        id:1,
        h1:'Quality Food',
        p:'It can be a very secure path to earn good money and make you very successful creative entrepreneur.',
        url:rasm4

    },
    {
        id:1,
        h1:'Quality Food',
        p:'It can be a very secure path to earn good money and make you very successful creative entrepreneur.',
        url:rasm5

    },

 ]
class Section extends Component {
    render() {
        return (
            <div>
                <section >
                    <div className="container">
                        <p>{this.props.p}</p>
                        <h1>{this.props.h1}</h1>
                        <div className="section-row">
                            {
                                card?.map((inx) =>(
                                    <div className="section-all" key={inx.id}>
                                     <div className="img">
                                    <div className="imagi">
                                    <img src={inx.url} alt="" />
                                    </div>
                                     </div>
                                     <h1>{inx.h1}</h1>
                                     <p>{inx.p}</p>
                                    </div>
                                ))
                            }
                          
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Section;
