import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Sidebar from './components/Sidebar/Sidebar'
import Activities from './pages/Activities'
import Calender from './pages/Calender'
import Teams from './pages/Teams'
import Projects from './pages/Projects'
import Dashboard from './pages/Dashboard'
import Header from './components/Header/Header'

function App() {
  return (
    <div className='app'>
      <Sidebar />
      <main className='main'>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/activities' element={<Activities />} />
          <Route exact path='/dashboard' element={<Dashboard />} />
          <Route exact path='/projects' element={<Projects />} />
          <Route exact path='/teams' element={<Teams />} />
          <Route exact path='/calender' element={<Calender />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
