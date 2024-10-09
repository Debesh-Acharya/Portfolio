
import './App.css'
import NavBar from './components/NavBar'
import Intro from './components/Intro'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'

function App() {

  return (
    <>
      <NavBar/>
      <div id='content'>
        <Intro/>
        <About/>
        <Experience/>
        <Projects/>
      </div>
    </>
  )
}

export default App
