import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo/logo.svg'
import styled from 'styled-components'

const LogoContainer = styled.div`
  margin-top: 270px;
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 18px;
  color: white;
  gap: 20px;
`

export default function Splash() {
  const navigate = useNavigate()

  useEffect(() => {
    // 3초 후에 메인 페이지로 이동
    const timer = setTimeout(() => {
      navigate('/sign-in') // 이동할 경로를 설정
    }, 3000) // 3초 후에 이동하도록 설정

    // 클린업 함수
    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div>
      <LogoContainer>
        <img src={logo} alt={'logo'} />
        요즘 핫한 인생네컷 사진첩
      </LogoContainer>
    </div>
  )
}
