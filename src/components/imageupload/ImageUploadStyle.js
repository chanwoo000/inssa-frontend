import styled from 'styled-components'

export const ImagePreview = styled.img`
  max-width: 120px;
  max-height: 150px;
  cursor: pointer; /* Add pointer cursor to indicate it's clickable */
`

export const ImageList = styled.div`
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

export const ImageItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const FolderName = styled.div`
  font-size: 16px;
  margin-top: 10px;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Input = styled.input`
  margin-bottom: 10px;
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
`

export const ModalBackground = styled.div`
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

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
`

export const ModalButton = styled.button`
  background-color: white;
  border: none;
  cursor: pointer;
  width: 50px;
  height: 30px;
`
