import { Routes, Route } from 'react-router-dom'
import { Pokedex, Pokemon } from './pages'
import { Nav } from './components'
import './App.css'

export default function App() {
 
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' index element={<Pokedex />} />
        <Route path='/pokemon:id' index element={<Pokemon />} />
      </Routes>
    </>
  )
}
