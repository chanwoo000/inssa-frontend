import React, { useState } from 'react'
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
  margin: 190px 0 45px 0;
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
  gap: 12px;
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
const ErrorMessage = styled.div`
  color: red;
  margin-top: 10px;
`

export default function SignUp() {
  const navigate = useNavigate()
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const handleSignInClick = () => {
    if (password === confirmPassword) {
      navigate('/sign-in')
    } else {
      setError('비밀번호가 올바르지 않습니다.')
    }
  }
  return (
    <Container>
      <LogoContainer>
        <img src={logo} alt={'logo'} />
        요즘 핫한 인생네컷 사진첩
      </LogoContainer>
      <InformationContainer>
        <InputContainer>
          이름
          <Input />
        </InputContainer>
        <InputContainer>
          아이디
          <Input />
        </InputContainer>
        <InputContainer>
          비밀번호
          <Input
            type='password' //비밀번호가 *으로 표시됨
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputContainer>
        <InputContainer>
          비밀번호 확인
          <Input
            type='password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </InputContainer>
      </InformationContainer>
      <LoginButton onClick={handleSignInClick}>회원가입 완료</LoginButton>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  )
}
