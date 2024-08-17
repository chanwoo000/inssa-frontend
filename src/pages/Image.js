import React from 'react'
import { useLocation } from 'react-router-dom'
import * as style from '../components/image/ImageStyle'

export default function Image() {
  const location = useLocation()
  const { src, date, note } = location.state || {}

  return (
    <div className='container'>
      <style.ImageContainer>
        <style.ImageDisplay src={src} alt={note} />
        <style.ImageDetails>
          <div>메모: {note}</div>
          <div>날짜: {date}</div>
        </style.ImageDetails>
      </style.ImageContainer>
    </div>
  )
}
