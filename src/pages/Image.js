import React from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  color: black;
`

const ImageDisplay = styled.img`
  max-width: 80%;
  max-height: 80vh;
  margin-bottom: 20px;
`

const ImageDetails = styled.div`
  font-size: 20px;
  text-align: center;
`

export default function Image() {
  const location = useLocation()
  const { src, date, note } = location.state || {}

  return (
    <div className='container'>
      <ImageContainer>
        <ImageDisplay src={src} alt={note} />
        <ImageDetails>
          <div>메모: {note}</div>
          <div>날짜: {date}</div>
        </ImageDetails>
      </ImageContainer>
    </div>
  )
}
