import React, { Component } from 'react'
import ab from './About.module.css'

export default class About extends Component {
  render() {
    return (
      <>
        <div className="container-fluid p-5" style={{backgroundColor:'#1abc9c' , marginTop: '100px', height:'600px'}}>
            <h1 className={ab.abmain}>ABOUT COMPONENT</h1>

            <br />
            <div className="container">
            <div className="row">
                <div className="col-md-6">
            <h5 className={ab.absub}  >Freelancer is a free bootstrap theme created by Route. The download includes
             the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for<br/>
              easy customization.</h5>
                </div>
                <div className="col-md-6">
                <h5 className={ab.absub} >Freelancer is a free bootstrap theme created by Route. The download includes
             the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for<br/>
              easy customization.</h5>

           
                    
                </div>
            </div>
            </div>
            
        </div>
      </>
    )
  }
}
