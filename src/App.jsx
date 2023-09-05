import {} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home'
import Exemplo1 from './Exemplo1'
import Exemplo2 from './Exemplo2'
import Exemplo3 from './Exemplo3'
import Nav from './Nav'
import Footer from './Footer'
import Notfound from './Notfound'


function App() {
  

  return (
    <>
    <BrowserRouter>
    <Nav />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Exemplo1" element={<Exemplo1 />}/>
      <Route path="/Exemplo2" element={<Exemplo2 />}/>
      <Route path="/Exemplo3" element={<Exemplo3 />}/>
      <Route path="*" element={<Notfound />}/>
      
    </Routes>
    <Footer />
    </BrowserRouter>
      
    </>
  )
}

export default App
