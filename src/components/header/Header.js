import React from 'react'
import styled from 'styled-components'
import smallLogo from '../../assets/smallLogo.svg'
export const Container = styled.div`
  position: fixed;
  top: 0;
  align-items: center;
  display: flex;
  width: 430px;
  height: 80px;
  background-color: #2d2d2d;
  font-size: 16px;
  color: white;
  gap: 10px;
  padding: 24px;
  box-sizing: border-box;
`
export const LogoContainer = styled.div`
  display: flex;
`

const Header = () => {
  return (
    <Container>
      <LogoContainer>
        <img src={smallLogo} alt={'logo'} />
      </LogoContainer>
      정찬우 님의 인생네컷 폴더
    </Container>
  )
}

export default Header
