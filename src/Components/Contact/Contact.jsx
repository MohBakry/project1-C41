import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
      <>
      <div style={{height: '600px'}}>
      <h1 style={{marginTop:'130px', color:'#055160', textAlign:'center' ,fontSize:'45px',fontWeight:'bold' }}>
      CONATCT SECTION
        </h1>
        <br />
        <div className="container p-5">
      <div className="App text-center ">
        <form id="contact-form" >
          <div className="form-group" style={{marginTop:'50px', width:'70%' ,marginLeft:'15%'}} >
            <input type="text" className="form-control" placeholder='User Name' />
          </div>
          <div className="form-group text-center" style={{marginTop:'50px', width:'70%',marginLeft:'15%'}} >
            <input type="text" className="form-control" placeholder='Phone Number' />
          </div>
          
          <div className="form-group" style={{marginTop:'50px', width:'70%',marginLeft:'15%'}} >
            <input type="email" className="form-control" placeholder='Email address'/>
          </div>
          <div className="form-group" style={{marginTop:'50px', width:'70%',marginLeft:'15%'}} >
            <input type="text" className="form-control" placeholder='Password'  />
          </div>
 
        </form>
      </div>
      </div>
      </div>
     
        
      </>
    )
  }
}
