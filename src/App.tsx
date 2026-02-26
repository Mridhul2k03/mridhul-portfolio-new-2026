import './App.css'
import Navbar from './Components/Common/Navbar'
import Footer from './Components/Common/Footer'
import Index from './Pages/Index'
import About from './Pages/About'
import Projects from './Pages/Projects'
import Skills from './Pages/Skills'
import Contact from './Pages/Contact'

import { Routes, Route } from 'react-router-dom'

function App() {  

  return (
   <div className="flex flex-col min-h-screen bg-black">
    <Navbar />
    <main className="grow">
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </main>
    <Footer />
   </div>
  )
}

export default App