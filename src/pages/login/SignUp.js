import React, { useState } from 'react'
import logo from '../../assets/logo/logo.svg'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/button/SignButton'
import Input from '../../components/input/Input'
import * as style from '../../components/signup/SignUpStyle'

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
      <style.LogoContainer>
        <img src={logo} alt={'logo'} />
        요즘 핫한 인생네컷 사진첩
      </style.LogoContainer>
      <style.InformationContainer>
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
      </style.InformationContainer>
      <Button onClick={handleSignInClick}>회원가입 완료</Button>
      {error && <style.ErrorMessage>{error}</style.ErrorMessage>}
    </div>
  )
}
