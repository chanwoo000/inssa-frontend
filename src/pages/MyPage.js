import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Modal from 'react-modal'
import folderImage from '../assets/folder.svg'
import Button from '../components/button/MainButton'
import * as style from '../components/mypage/MyPageStyle'

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
      <style.FolderContainer>
        {folders.map((folder) => (
          <div key={folder.id} onClick={() => handleFolderClick(folder.id)}>
            <style.Folder key={folder.id}>
              <img src={folderImage} alt='Folder' />
              <style.FolderName>{folder.name}</style.FolderName>
            </style.Folder>
          </div>
        ))}
      </style.FolderContainer>
      <Button onClick={openModal}>폴더 추가하기</Button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={style.customStyles}
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
        <style.ButtonContainer>
          <style.ModalButton onClick={handleAddFolder}>추가</style.ModalButton>
          <style.ModalButton onClick={closeModal}>닫기</style.ModalButton>
        </style.ButtonContainer>
      </Modal>
    </div>
  )
}

export default MyPage
