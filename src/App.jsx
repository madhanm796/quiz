import { useState } from 'react'
import './App.css'
import Categories from './components/Categories'
import Topics from './components/Topics'
import CategoryTitle from './components/CategoryTitle'
import Header from './components/Header'
import Aside from './components/Aside'


import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div className='app'>
      <div style={{ display: 'flex', padding: '16px', flexDirection: 'row' }}>
        <main style={{
          flex: 1
          , maxWidth: '1280px', margin: '0 auto'
        }}>
          <Header></Header>

          <Outlet></Outlet>
        </main>
        <Aside />
      </div>
    </div>
  )
}

export default App
