import React, { Component } from 'react'
import pf from './Portfolio.module.css'
import img1 from '../../img/poert1.png'
import img2 from '../../img/port2.png'
import img3 from '../../img/port3.png'
import ModalImage from "react-modal-image";

export default class Portfolio extends Component {
  render() {
    return (
      <>
        <div className="container">
            <div>
                <h1 className={pf.pmain}>PORTFOLIO COMPONENT</h1>
            </div>
            <div className="row mt-5">
                <div className="col-md-4 p-4" >
                <ModalImage
                small={img1}
                    large={img1}
                    alt="1"
                    className='rounded'
                    />
                </div>
                <div className="col-md-4 p-4" >
                <ModalImage
                small={img2}
                    large={img2}
                    className='rounded'
                    alt="2"
                    />
                </div>
                <div className="col-md-4 p-4" >
                <ModalImage
                small={img3}
                    large={img3}
                    alt="3"
                    className='rounded'
                    />
                </div>
                <div className="col-md-4 p-4" >
                    <img src={img1} alt="" className='w-100 rounded' />
                </div>
                <div className="col-md-4 p-4" >
                    <img src={img2} alt=""className='w-100 rounded' />
                </div>
                <div className="col-md-4 p-4" >
                    <img src={img3} alt=""className='w-100 rounded' />
                </div>
            </div>
        </div>
      </>
    )
  }
}
