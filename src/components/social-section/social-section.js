import React from 'react'
import './social-section.scss'

function SocialSection () {
  return (
    <div id='social' className='section social-section'>
      <div className='left-side'>
        <p className='section-title'>What</p>
        <span className={'divider '} />
      </div>
      <div className='right-side'>

        <div className='info-row'>
          <h2 className='info-label'>Social Gathering & <br />Mini Table Tennis Tournament</h2>
          <img src='https://blog.joypixels.com/content/images/2019/06/clinking_beer_mugs_1024.gif' style={{ height: '150px', marginLeft: '20px' }} />
        </div>
        <p className='info-text'>
            Enjoy a night of <strong>music</strong>, <strong>food</strong> and <strong>drinks</strong> while meeting new people and <strong>compete</strong> for the grand prize in our first ever tournament!
        </p>
      </div>
      <div className='read-more-button-container'>
        <p onClick={() => {
          var elmnt = document.getElementById('social')
          elmnt.scrollIntoView({
            behavior: 'smooth'
          })
        }}className={'read-more-button '}>Get To Know More</p>
      </div>
    </div>
  )
}

export default SocialSection
