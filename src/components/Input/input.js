import React from 'react'
import styled from 'styled-components'

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

export default function CustomInput({ label, type = 'text', value, onChange }) {
  return (
    <InputContainer>
      {label}
      <Input type={type} value={value} onChange={onChange} />
    </InputContainer>
  )
}
