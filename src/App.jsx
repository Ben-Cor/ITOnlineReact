import { useState } from 'react'
import Header from './components/Header'
import ProfileCard from './components/ProfileCard'
import JobItem from './components/JobItem'
import JobList from './components/JobList'

import Footer from './components/Footer'
import StatusBoard from './components/StatusBoard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <ProfileCard 
      name={'Ben Cornell'} 
      jobTitle={'Software Engineer'} 
      skills={'React | JS | PHP | Laravel'} 
      image={'src/assets/react.svg'} 
      bio={'I am an aspiring software engineer with a passion for building web applications. I love learning new technologies and improving my skills.'}
      />
      <JobItem />
      <Footer />
    </div>
  )
}

export default App
