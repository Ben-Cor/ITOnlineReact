import { useState } from 'react'
import Header from './components/Header'
// import ProfileCard from './components/ProfileCard'
// import JobItem from './components/JobItem'
import JobColumn from './components/JobColumn'
import Footer from './components/Footer'
import important from './assets/important.svg'
import inProgress from './assets/in-progress.svg'
import completed from './assets/completed.svg'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      {/* <ProfileCard 
      name={'Ben Cornell'} 
      jobTitle={'Software Engineer'} 
      skills={'React | JS | PHP | Laravel'} 
      image={'src/assets/react.svg'} 
      bio={'I am an aspiring software engineer with a passion for building web applications. I love learning new technologies and improving my skills.'}
      /> */}
      {/* <JobItem /> */}
      <div className='mb-20'>
        <JobColumn title={'Important'} image={important} imageAlt={'Important'}/>
        <JobColumn title={'In Progress'} image={inProgress} imageAlt={'In Progress'}/>
        <JobColumn title={'Completed'} image={completed} imageAlt={'Completed'}/>
      </div>
      <Footer />
    </div>
  )
}

export default App
