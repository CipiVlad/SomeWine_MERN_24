import './App.css'
import { Routes, Route } from 'react-router-dom'
import Welcome from './pages/Welcome'
import Home from './pages/Home'
import WineRatings from './pages/WineRatings'
import Events from './pages/Events'
import RatingDetails from './pages/details/RatingDetails'
import EventDetails from './pages/details/EventDetails'
import AddRating from './pages/AddRating'
import Add from './pages/Add'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/home' element={<Home />} />
        <Route path='/ratings' element={<WineRatings />} />
        <Route path='/details/ratings/:id' element={<RatingDetails />} />
        <Route path='/events' element={<Events />} />
        <Route path='/details/events/:id' element={<EventDetails />} />


        <Route path='/add' element={<Add />} />
        <Route path='/add/rating' element={<AddRating />} />
      </Routes>
    </div>
  )
}

export default App
