/** @jsxImportSource theme-ui */
import { useState } from 'react'
import './App.css'
import MainLayout from './layouts/MainLayout'
import VRLogoCard from './components/VRLogoCard'
import { Flex } from 'theme-ui'
import PortfolioInfo from './components/PortfolioInfo'
import PortfolioProjects from './components/PortfolioProjects'
import PortfolioResume from './components/PortfolioResume'


function App() {
  const [activeTab, setActiveTab] = useState(
    localStorage.getItem('activeView') || 'Home'
  )
  return (
    <>
      <MainLayout activeTab={activeTab}>
        <Flex m={['0','5']} sx={{justifyContent: 'center', alignItems: 'center', gap: '5', flexDirection: ['column', 'column', 'column', 'column', 'row']}}>
          <VRLogoCard />
          <PortfolioInfo activeTab={activeTab} setActiveTab={setActiveTab} />
        </Flex>
        { activeTab === 'Portfolio' && (
          <PortfolioProjects />
        )}
        { activeTab === 'Resume' && (
          <PortfolioResume />
        )}
      </MainLayout>
    </>
  )
}

export default App
