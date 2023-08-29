import Header from './components/Header'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import { Home, Project, Contact, About } from './pages'

function App() {
  return (
    <div className="bg-light dark:bg-dark dark:text-light min-h-screen mx-auto">
      <Header />
      <main className="mx-auto max-w-screen-lg px-5">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
