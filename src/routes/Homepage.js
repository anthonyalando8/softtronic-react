import React from 'react'
import Navbar from '../Components/Navbar'
import './HomepageStyles.css';

const Homepage = () => {
  return (
    <>
      <div>
          <Navbar />
      </div>
      <main>
        <div className='top position-relative'>
          <div className='position-relative content text-center'>
              <img className='position-absolute top-background' src='https://ik.imagekit.io/anthonyalando/Softtronic/curve-blue-bg_zWvwm-RfS?ik-sdk-version=javascript-1.4.3&updatedAt=1674406971455' alt='backgroung-top'/>
              <div className='position-relative'>
                  <h1 className='e-bold'>The Most Reliable Networking Solutions on the Market</h1>
                  <p>Recognize the value of a well designed network</p>
                  <div className='top-button'>
                    <button className='btn btn-heavy'>Contact Us</button>
                    <button className='btn btn-light'>Discover</button>
                  </div>
              </div>
              <div className='position-absolute top-attach-one'>
                <img src='https://ik.imagekit.io/anthonyalando/Softtronic/wifi-router_r8d870N-F?ik-sdk-version=javascript-1.4.3&updatedAt=1673607997969' alt='top-attach-one'/>
              </div>  
          </div>
          <div className='position-absolute top-attach-two'>
            <img src='https://ik.imagekit.io/anthonyalando/Softtronic/happy-businesswoman-talking-phone.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1673774872117' alt='top-attach-two'/>
          </div>
        </div>
      </main>
      
    </>
  )
}

export default Homepage