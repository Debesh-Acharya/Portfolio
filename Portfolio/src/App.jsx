
import './App.css'
import NavBar from './components/NavBar'
import Intro from './components/Intro'
import About from './components/About'
import Experience from './components/Experience'

function App() {

  return (
    <>
      <NavBar/>
      <div id='content'>
        <Intro/>
        <About/>
        <Experience/>
      </div>
    </>
  )
}

export default App
