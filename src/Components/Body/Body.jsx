import React, { Component } from 'react'
import img from '../../img/Home.png'

export default class Body extends Component {
  render() {
    return (
     <>
     <div className="container-fluid p-5" style={{backgroundColor:'#1abc9c' , marginTop: '100px', height:'600px'}}>
        <div className="row">
            <div className='text-center' >
            <img src={img} className={"w-25 text-center"} alt="" />

        <br />
        <h1 style={{fontSize:'40px' , fontWeight:'bold',color:'white'}}>
            START FRAMEWORK
        </h1>
        <br />
        <h6 style={{color:'white'}}>Graphic Artist - Web Designer - Illustrator</h6>
        <br />
        <br />

            </div>
           

        </div>
     </div>
     </>
    )
  }
}
