import { useState } from 'react'
import Header from './components/Header'
import ProfileCard from './components/ProfileCard'
import JobBoard from './components/JobBoard'
import DynamicForm from './components/DynamicForm'
import BotListManager from './components/BotListManager'
import Footer from './components/Footer'

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
      <JobBoard />
      <DynamicForm />
      <BotListManager />
      <Footer />
    </div>
  )
}

export default App
