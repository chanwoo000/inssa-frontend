import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.svg'
import { useNavigate } from 'react-router-dom'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
`
const LogoContainer = styled.div`
  margin: 190px 0 100px 0;
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 18px;
  gap: 20px;
`
const Input = styled.input`
  display: flex;
  text-align: center;
  font-size: 16px;
  width: 260px;
  height: 50px;
  border: solid 1px #fdd329;
  border-radius: 26px;
  background-color: #272727;
  color: white;
`
const InputContainer = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  gap: 10px;
`
const InformationContainer = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  gap: 15px;
`
const LoginButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  width: 260px;
  height: 50px;
  border-radius: 26px;
  background-color: #fdd329;
  cursor: pointer;
  margin: 35px 0 10px 0;
`
const SignUpLink = styled.div`
  cursor: pointer;
`
export default function SignIn() {
  const navigate = useNavigate()

  const handleSignUpClick = () => {
    navigate('/sign-up')
  }
  return (
    <Container>
      <LogoContainer>
        <img src={logo} alt={'logo'} />
        요즘 핫한 인생네컷 사진첩
      </LogoContainer>
      <InformationContainer>
        <InputContainer>
          아이디
          <Input />
        </InputContainer>
        <InputContainer>
          비밀번호
          <Input />
        </InputContainer>
      </InformationContainer>
      <LoginButton>로그인</LoginButton>
      <SignUpLink onClick={handleSignUpClick}>회원가입</SignUpLink>
    </Container>
  )
}
