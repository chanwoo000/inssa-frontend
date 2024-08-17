import styled from 'styled-components'
import folderImage from '../../assets/folder.svg'
import Modal from 'react-modal'

export const FolderContainer = styled.div`
  display: grid;
  position: fixed;
  top: 100px;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: 16px;
`

export const Folder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  gap: 10px;
`

export const FolderName = styled.div`
  font-size: 16px;
`

export const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    background: `url(${folderImage}) no-repeat center center`,
    backgroundSize: 'cover',
    width: '200px',
    height: '200px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '30px',
    border: 'none'
  }
}

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`
export const ModalButton = styled.button`
  background-color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 50px;
  height: 30px;
`

Modal.setAppElement('#root')
