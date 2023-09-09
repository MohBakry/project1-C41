import React, { Component } from 'react'
import { SocialIcon } from 'react-social-icons'
import f from './Footer.module.css'

export default class Footer extends Component {
  render() {
    return (
      <>
         <div className= 'p-5 text-white b-0' style={{backgroundColor :' #055160'}}>
        <div className="row">
            <div className="col-md-4 text-center">
                <h4>LOCATION</h4>
                <br />
                <h6 className={f.h6}>2215 John Daniel Drive <br/>Clark, MO 65243</h6>

            </div>
            <div className="col-md-4 text-center">
                <h4>AROUND THE WEB</h4>
                <br />
                <div className="text-center">
                  
                <SocialIcon url="www.facebook.com"/>
                <SocialIcon url="www.Twitter.com"/>
                <SocialIcon url="www.instagram.com"/>
                <SocialIcon url="www.linkedin.com"/>

                </div>
            </div>
            <div className="col-md-4 text-center">
                <h4>ABOUT FREELANCER</h4>
                <br />
                <h6>Freelance is a free to use, licensed Bootstrap theme<br/> created by Route</h6>
            </div>
        </div>
      </div>
      </>
    )
  }
}
