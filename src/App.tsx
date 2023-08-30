import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainLayout from './layouts/MainLayout'
import VRLogoCard from './components/VRLogoCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MainLayout>
        <VRLogoCard />
      </MainLayout>
    </>
  )
}

export default App
