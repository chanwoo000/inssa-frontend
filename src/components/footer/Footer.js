import React from 'react'
import box from '../../assets/box.svg'
import upload from '../../assets/upload.svg'
import pencil from '../../assets/pencil.svg'
import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  align-items: center;
  display: flex;
  width: 430px;
  height: 80px;
  background-color: #2d2d2d;
  justify-content: center;
`
export const FooterContainer = styled.div`
  gap: 125px;
  display: flex;
`

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
  color: white;
  cursor: pointer;
`
export const PencilLogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  color: white;
  margin-top: 2px;
  cursor: pointer;
`

const Footer = () => {
  return (
    <Container>
      <FooterContainer>
        <LogoContainer>
          <img src={box} alt={'box'} />
          보관함
        </LogoContainer>

        <LogoContainer>
          <img src={upload} alt={'upload'} />
          등록
        </LogoContainer>

        <PencilLogoContainer>
          <img src={pencil} alt={'pencil'} />
          꾸미기
        </PencilLogoContainer>
      </FooterContainer>
    </Container>
  )
}

export default Footer
