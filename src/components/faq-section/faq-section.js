import React from 'react'
import './faq-section.scss'

function FaqSection () {
  return (
    <div id='faq' className='section faq-section'>
      <div className='left-side'>
        <h2 className='section-title'>FAQ</h2>
        <span className={'divider '} />
      </div>
      <div className='right-side'>
        <div className='info-row'>
          <p className='info-label'>Played on 4 mini tables by Stiga</p>
        </div>
        <div className='info-row'>
          <p className='info-label'>Professional match balls</p>
        </div>
        <div className='info-row'>
          <p className='info-label'>Courts with judges tables and scoreboards</p>
        </div>
        <div className='info-row'>
          <p className='info-label'>Winner, winner, ping pong dinner</p>
        </div>
        <div className='info-row'>
          <p className='info-label'>ITTF rules modified for net height</p>
        </div>
        <div className='info-row'>
          <p className='info-label'>Best of 3 in group, Best of 5 in knockouts</p>
        </div>
      </div>
    </div>
  )
}

export default FaqSection
