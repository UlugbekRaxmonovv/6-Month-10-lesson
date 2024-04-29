import React, { Component } from 'react';
import { FaSquareInstagram,FaFacebook,FaYoutube } from "react-icons/fa6";;
import { PiPaperPlaneTiltFill } from "react-icons/pi";


import './Footer.css'

const link =[
    {
        id:1,
        title:' Home',
        links:['www.company name.com','companyname@gmail.com','Phone: +7 485-118-03-25']
    },
    {
        id:2,
        title:'About',
        links:['Landingpage','Documentation','Referral Program','UI & UX Design','Web Design']
    },
    {
        id:3,
        title:'Menu',
        links:['Landingpage','Documentation','Referral Program','UI & UX Design','Web Design']
    },
    {
        id:1,
        title:'Company',
        links:['Landingpage','Documentation','Referral'],
        img:[<FaSquareInstagram  className='ikon'/>,
        <FaFacebook  className='ikon' />,
        <PiPaperPlaneTiltFill  className='ikon' />,
        <FaYoutube   className='ikon'/>],


    },
]

let linkss = link?.map((inx)=>(
    <div className="footer-row" key={inx} >
    <ul >
    <h6>{inx.title}</h6>
    {
        inx?.links?.map((link,inx) =>(
            <li key={inx} className='links'>
                <a href="">{link}</a>
            </li>
        ))
    }
      {inx.img && (
        
                <ul>
                   <div className="all1">
                    <div className="all5">
                    {inx.img.map((il, inxt) => (
                        <li key={inxt}>
                            {il}
                        </li>
                    ))}
                    </div>
                   </div>
                </ul>
            )}
    </ul>
  
 </div>
))

class Footer extends Component {
    render() {
        return (
            <div>
                <section className='footer'>
                <div className="footer-all container">
           {linkss}
                </div>
                </section>
            </div>
        );
    }
}

export default Footer;
