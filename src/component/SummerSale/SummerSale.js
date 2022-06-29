/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {sliderItems} from '../../data'
import './SummerSale.css'
import { Link } from "react-router-dom";



const SampleNextArrow = ({onClick })=> {
    return (
        <div  className="Arrow" onClick={onClick}>
           <i class="fa-solid fa-arrow-left-long" id='fa-solid'></i>
        </div>
    );
  }
  
  const SamplePrevArrow = ({onClick })=> {
    return (
        <div  className="Arrow" onClick={onClick}>
           <i class="fa-solid fa-arrow-right-long" id='fa-solid' style={{float:'right'}}></i>
        </div>
    );
  }
 const SummerSale=()=> {
    const settings = {
      infinite: true,
      speed: 800,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <div>
        <Slider {...settings}>
          {sliderItems.map(({img,title,desc,id})=>(
            <div className="sliderItems" key={id}>
                <div className="one">
                <div className="allone">
                  <img className="photo" src={img}/>
                  <div className="cricle"></div>
                </div>
                <div className="word">
                  <h3 className="hwrite">{title}</h3>
                  <p className="pwrite">{desc}</p>
                  <Link to={`/SummerSale/${id}`}><button className="btn">Shop Now</button></Link>
                </div>
                </div>
                <div className="two"></div>
            </div>
          ))}
        </Slider>
      </div>
    );

}
export default SummerSale