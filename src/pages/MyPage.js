import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Modal from 'react-modal'
import folderImage from '../assets/folder.svg'
import Button from '../components/Button/MainButton'

const FolderContainer = styled.div`
  display: grid;
  position: fixed;
  top: 100px;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: 16px;
`

const Folder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  gap: 10px;
`

const FolderName = styled.div`
  font-size: 16px;
`

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    background: `url(${folderImage}) no-repeat center center`,
    backgroundSize: 'cover',
    width: '200px', // 폴더 이미지 크기에 맞게 조정
    height: '200px', // 폴더 이미지 크기에 맞게 조정
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '30px'
  }
}

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`
const ModalButton = styled.button`
  background-color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 50px;
  height: 30px;
`

Modal.setAppElement('#root')

const MyPage = () => {
  const [folders, setFolders] = useState([
    { id: 1, name: 'Folder 1' },
    { id: 2, name: 'Folder 2' },
    { id: 3, name: 'Folder 3' },
    { id: 4, name: 'Folder 4' },
    { id: 5, name: 'Folder 5' },
    { id: 6, name: 'Folder 6' }
  ])

  const [modalIsOpen, setIsOpen] = useState(false)
  const [newFolderName, setNewFolderName] = useState('')
  const navigate = useNavigate()
  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }
  const handleFolderClick = (id) => {
    navigate(`/image-upload/${id}`)
  }
  const handleAddFolder = () => {
    if (newFolderName.trim()) {
      // trim은 좌우 공백을 지우는 함수, 즉 폴더에 이름을 썼는지 확인하는 조건문
      setFolders([...folders, { id: folders.length + 1, name: newFolderName }])
      setNewFolderName('')
      closeModal()
    }
  }

  return (
    <div className='container'>
      <FolderContainer>
        {folders.map((folder) => (
          <div key={folder.id} onClick={() => handleFolderClick(folder.id)}>
            <Folder key={folder.id}>
              <img src={folderImage} alt='Folder' />
              <FolderName>{folder.name}</FolderName>
            </Folder>
          </div>
        ))}
      </FolderContainer>
      <Button onClick={openModal}>폴더 추가하기</Button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <input
          type='text'
          value={newFolderName}
          onChange={(e) => setNewFolderName(e.target.value)}
          placeholder='폴더 이름 입력'
          style={{
            marginBottom: '10px',
            borderRadius: '5px',
            border: 'none',
            width: '150px',
            height: '30px',
            textAlign: 'center'
          }}
        />
        <ButtonContainer>
          <ModalButton onClick={handleAddFolder}>추가</ModalButton>
          <ModalButton onClick={closeModal}>닫기</ModalButton>
        </ButtonContainer>
      </Modal>
    </div>
  )
}

export default MyPage
