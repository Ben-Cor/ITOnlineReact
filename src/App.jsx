import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import JobTypes from './components/JobTypes'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <JobTypes />
      <Footer />
    </div>
  )
}

export default App
