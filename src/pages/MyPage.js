import React from 'react'
import styled from 'styled-components'
import folderImage from '../assets/folder.svg' // 폴더 이미지 경로

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
`

const FolderContainer = styled.div`
  display: grid;
  position: fixed;
  top: 100px;
  grid-template-columns: repeat(3, 1fr); // 3개의 열, fr은 비율(즉 1 : 1: 1)
  gap: 16px; // 그리드 아이템 사이의 간격
  padding: 16px; // 전체 컨테이너의 패딩
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
const Button = styled.button`
  bottom: 130px;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  width: 260px;
  height: 50px;
  border-radius: 26px;
  background-color: #fdd329;
  cursor: pointer;
`

const MyPage = () => {
  const folders = [
    { id: 1, name: 'Folder 1' },
    { id: 2, name: 'Folder 2' },
    { id: 3, name: 'Folder 3' },
    { id: 4, name: 'Folder 4' },
    { id: 5, name: 'Folder 5' },
    { id: 6, name: 'Folder 6' }
  ]

  return (
    <Container>
      <FolderContainer>
        {folders.map((folder) => (
          <Folder key={folder.id}>
            <img src={folderImage} alt='Folder' />
            <FolderName>{folder.name}</FolderName>
          </Folder>
        ))}
      </FolderContainer>
      <Button>폴더 추가하기</Button>
    </Container>
  )
}

export default MyPage
