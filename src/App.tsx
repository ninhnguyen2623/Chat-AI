import { useState } from 'react'
import './App.css'
import { Outlet } from "react-router";
import Sidebar from './components/Sidebar';
function App() {
  return (
    <>
      <div className='bg-default h-screen flex'>
        <div className="xl:block hidden">
          <Sidebar />
        </div>
        <Outlet />
      </div>
    </>
  )
}

export default App
