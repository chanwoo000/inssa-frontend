import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Decorate from './pages/Decorate'
import ImageUpload from './pages/ImageUpload'
import MyPage from './pages/MyPage'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Splash from './pages/Splash'
import Theme from './pages/Theme'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'

function App() {
  return (
    <div id='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Splash />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/my-page' element={<MyPage />} />
          <Route path='/theme' element={<Theme />} />
          <Route path='/image-upload' element={<ImageUpload />} />
          <Route path='/decorate' element={<Decorate />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
