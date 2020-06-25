import React from "react"
import './style.scss'

const Talk = ({ imageUrl, url }) => (
  <div className='item'>
    <a href={`https://slides.com${url}`} target='_blank'>
      <img src={imageUrl} />
    </a>
  </div>
)

export default Talk
