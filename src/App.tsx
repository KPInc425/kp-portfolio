/** @jsxImportSource theme-ui */
import { useState } from 'react'
import './App.css'
import MainLayout from './layouts/MainLayout'
import VRLogoCard from './components/VRLogoCard'
import { Flex } from 'theme-ui'
import PortfolioInfo from './components/PortfolioInfo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MainLayout>
        <Flex m='5' sx={{justifyContent: 'center', alignItems: 'center', gap: '5'}}>
          <VRLogoCard />
          <PortfolioInfo />
        </Flex>
      </MainLayout>
    </>
  )
}

export default App
