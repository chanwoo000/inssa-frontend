import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ImageUpload from './pages/ImageUpload'
import MyPage from './pages/MyPage'
import SignIn from './pages/Login/SignIn/SignIn'
import SignUp from './pages/Login/SignUp/SignUp'
import Splash from './pages/Splash'
import Image from './pages/Image'
import MainLayout from './Outlet'

function App() {
  return (
    <div id='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Splash />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />

          <Route element={<MainLayout />}>
            <Route path='/my-page' element={<MyPage />} />
            <Route path='/image/:ImageId' element={<Image />} />
            <Route path='/image-upload/:folderId' element={<ImageUpload />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
