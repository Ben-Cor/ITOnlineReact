import { useState } from 'react'
import Header from './components/Header'
import ProfileCard from './components/ProfileCard'
import JobBoard from './components/JobBoard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <ProfileCard 
      name={'Ben Cornell'} 
      jobTitle={'Software Engineer'} 
      skills={'React | JS | PHP | Laravel'} 
      image={'src/assets/react.svg'} 
      bio={'I am an aspiring software engineer with a passion for building web applications. I love learning new technologies and improving my skills.'}
      />
      <JobBoard />
    </>
  )
}

export default App
