import React, { useState } from 'react'
import styled from 'styled-components'
import logo from '../../../assets/logo/logo.svg'
import { useNavigate } from 'react-router-dom'
import Button from '../../../components/Button/SignButton'
import Input from '../../../components/Input/input'

const LogoContainer = styled.div`
  margin: 190px 0 45px 0;
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 18px;
  gap: 20px;
`

const InformationContainer = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const ErrorMessage = styled.div`
  color: red;
  margin-top: 10px;
`

export default function SignUp() {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
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
    <div className='container'>
      <LogoContainer>
        <img src={logo} alt={'logo'} />
        요즘 핫한 인생네컷 사진첩
      </LogoContainer>
      <InformationContainer>
        <Input
          label='이름'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          label='아이디'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          label='비밀번호'
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          label='비밀번호 확인'
          type='password'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </InformationContainer>
      <Button onClick={handleSignInClick}>회원가입 완료</Button>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </div>
  )
}
