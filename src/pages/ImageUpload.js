import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import backGroundImage from '../assets/backGroundIamge.svg'
import Button from '../components/button/MainButton'
import * as style from '../components/imageupload/ImageUploadStyle'

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
      <style.ImageList>
        {images.map(
          (image) =>
            image.src && (
              <style.ImageItem key={image.id}>
                <style.ImagePreview
                  src={image.src}
                  alt={image.note}
                  onClick={() => handleImageClick(image)}
                />
                <style.FolderName>{image.note}</style.FolderName>
                <div>{image.date}</div>
              </style.ImageItem>
            )
        )}
      </style.ImageList>

      <style.ModalBackground show={modalOpen}>
        <style.ModalContent>
          <h4>이미지 정보 입력</h4>
          <style.InputContainer>
            <style.Input
              type='date'
              value={newImage.date}
              onChange={(e) =>
                setNewImage({ ...newImage, date: e.target.value })
              }
            />
            <style.Input
              type='text'
              placeholder='한 줄 메모'
              value={newImage.note}
              onChange={(e) =>
                setNewImage({ ...newImage, note: e.target.value })
              }
            />
          </style.InputContainer>
          <style.ModalButton onClick={handleSave}>저장</style.ModalButton>
          <style.ModalButton onClick={closeModal}>닫기</style.ModalButton>
        </style.ModalContent>
      </style.ModalBackground>
    </div>
  )
}
