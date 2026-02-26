import { useState } from 'react'
import './App.css'
import Navbar from './Components/Common/Navbar'
import Footer from './Components/Common/Footer'
import Loader from './Components/Common/Loader'
import Index from './Pages/Index'
import About from './Pages/About'
import Projects from './Pages/Projects'
import Skills from './Pages/Skills'
import Contact from './Pages/Contact'

import { Routes, Route } from 'react-router-dom'

function App() {  
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <Loader onLoadingComplete={() => setIsLoading(false)} />;
  }

  return (
   <div className="flex flex-col min-h-screen bg-black animate-in fade-in duration-1000">
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