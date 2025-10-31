
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Resume from './pages/Resume'
import UserForm from './pages/UserForm'
import Histroy from './pages/History'
import Pnf from './pages/Pnf'
import Header from './components/Header'
import Footer from './components/Footer'


function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/resume' element={<Resume/>}></Route>
      <Route path='/form' element={<UserForm/>}></Route>
      <Route path='/history' element={<Histroy/>}></Route>
      <Route path='/*' element={<Pnf/>}></Route>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
