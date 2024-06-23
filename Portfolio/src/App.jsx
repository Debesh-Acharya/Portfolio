
import './App.css'
import NavBar from './components/NavBar'
import Intro from './components/Intro'
import About from './components/About'

function App() {

  return (
    <>
      <NavBar/>
      <div id='content'>
        <Intro/>
        <About/>
      </div>
    </>
  )
}

export default App
