import './App.css'
import { Routes, Route } from 'react-router-dom'
import Welcome from './pages/Welcome'
import Home from './pages/Home'
import WineRatings from './pages/WineRatings'
import Events from './pages/Events'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/home' element={<Home />} />
        <Route path='/ratings' element={<WineRatings />} />
        <Route path='/events' element={<Events />} />
      </Routes>
    </div>
  )
}

export default App
