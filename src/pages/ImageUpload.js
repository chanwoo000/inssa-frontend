import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import backGroundImage from '../assets/backGroundIamge.svg'
import Button from '../components/Button/MainButton'

const ImagePreview = styled.img`
  max-width: 120px;
  max-height: 150px;
  cursor: pointer; /* Add pointer cursor to indicate it's clickable */
`

const ImageList = styled.div`
  display: grid;
  position: fixed;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-top: 100px;
  max-height: 600px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`

const ImageItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const FolderName = styled.div`
  font-size: 16px;
  margin-top: 10px;
`

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Input = styled.input`
  margin-bottom: 10px;
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
`

const ModalBackground = styled.div`
  display: ${(props) => (props.show ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
`

const ModalButton = styled.button`
  background-color: white;
  border: none;
  cursor: pointer;
  width: 50px;
  height: 30px;
`

export default function ImageUpload() {
  const navigate = useNavigate()

  const [images, setImages] = useState([
    { id: 1, src: backGroundImage, date: '2023.03.30', note: '하이하이' },
    { id: 2, src: backGroundImage, date: '2023.03.30', note: '바이바이' }
  ])

  const [modalOpen, setModalOpen] = useState(false)
  const [newImage, setNewImage] = useState({ src: '', date: '', note: '' })
  const fileInputRef = useRef(null)

  const handleButtonClick = () => {
    fileInputRef.current.click()
  }

  const handleFileChange = (event) => {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setNewImage({ ...newImage, src: e.target.result })
        setModalOpen(true)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSave = () => {
    if (newImage.src && newImage.date && newImage.note) {
      const newEntry = {
        id: images.length + 1,
        src: newImage.src,
        date: newImage.date,
        note: newImage.note
      }
      setImages([...images, newEntry])
      setNewImage({ src: '', date: '', note: '' })
      setModalOpen(false)
    }
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  const handleImageClick = (image) => {
    navigate(`/image/${image.id}`, { state: image })
  }

  return (
    <div className='container'>
      <input
        type='file'
        accept='image/*'
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      <Button onClick={handleButtonClick}>이미지 추가하기</Button>
      <ImageList>
        {images.map(
          (image) =>
            image.src && (
              <ImageItem key={image.id}>
                <ImagePreview
                  src={image.src}
                  alt={image.note}
                  onClick={() => handleImageClick(image)}
                />
                <FolderName>{image.note}</FolderName>
                <div>{image.date}</div>
              </ImageItem>
            )
        )}
      </ImageList>

      <ModalBackground show={modalOpen}>
        <ModalContent>
          <h4>이미지 정보 입력</h4>
          <InputContainer>
            <Input
              type='date'
              value={newImage.date}
              onChange={(e) =>
                setNewImage({ ...newImage, date: e.target.value })
              }
            />
            <Input
              type='text'
              placeholder='한 줄 메모'
              value={newImage.note}
              onChange={(e) =>
                setNewImage({ ...newImage, note: e.target.value })
              }
            />
          </InputContainer>
          <ModalButton onClick={handleSave}>저장</ModalButton>
          <ModalButton onClick={closeModal}>닫기</ModalButton>
        </ModalContent>
      </ModalBackground>
    </div>
  )
}
