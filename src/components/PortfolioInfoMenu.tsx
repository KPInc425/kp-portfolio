import { useState } from "react"
import { Flex, Text, Box } from "theme-ui"

type SetActiveTab = (item: string) => void
type PortfolioInfoMenuProps = {
    activeTab: string
    setActiveTab: SetActiveTab
}

const PortfolioInfoMenu = ({activeTab, setActiveTab} : PortfolioInfoMenuProps) => {
    const menuItems = ['Home', 'Details', 'Portfolio', 'Resume', 'Contact']
    const [showMenu, setShowMenu] = useState(false)
    const handleTabClick = (viewTab: string) => {
        localStorage.setItem('activeView', viewTab)
        setActiveTab(viewTab)
        if (showMenu) setShowMenu(false)
    }
    return (
        <Box sx={{position: 'relative'}}>
            <Flex ml='4' px='2' sx={{
                backgroundColor: 'primary', 
                borderRadius: '12px 12px 0 0', 
                height: '50px', 
                width: 'fit-content', 
                gap: '4', 
                alignItems: 'center', 
                justifyContent: 'space-around',
                display: ['none', 'flex']
            }}>
                { menuItems.map((viewTab) => {
                    return ( 
                        <Flex
                            key={viewTab}
                            onClick={() => handleTabClick(viewTab)}   
                            className="caveat-font"
                            sx={{
                            backgroundColor: `${activeTab == viewTab ? 'black' : 'transparent'}`,
                            borderRadius: '8px 8px 0 0', 
                            height: '58px', 
                            flexDirection: 'column', 
                            justifyContent: 'center', 
                            marginTop: '-8px', 
                            minWidth: '120px',
                            cursor: 'pointer',
                            WebkitTextStroke: '1px #000',
                            textShadow: `${activeTab == viewTab ? '0 0 15px #1EFF00' : 'none'}`,
                            fontWeight: '900'
                        }}>
                            <Text sx={{textAlign: 'center', paddingTop: '15px', cursor: 'pointer', fontSize: '6'}}>{viewTab}</Text> 
                        </Flex>
                    )})
                }
            </Flex>
            
            <Flex ml='auto' mr='10px' sx={{
                backgroundColor: 'primary', 
                borderRadius: '12px 12px 0 0', 
                height: '50px', 
                width: 'fit-content', 
                gap: '4', 
                alignItems: 'center', 
                justifyContent: 'space-around',
                display: ['flex', 'none']
            }}>
                <Flex
                    onClick={() => setShowMenu(!showMenu)}   
                    className="caveat-font"
                    sx={{
                    // backgroundColor: `${activeTab == item ? 'black' : 'transparent'}`,
                    borderRadius: '8px 8px 0 0', 
                    height: '58px', 
                    flexDirection: 'column', 
                    justifyContent: 'center', 
                    marginTop: '-8px', 
                    minWidth: '120px',
                    cursor: 'pointer',
                    WebkitTextStroke: '1px #000',
                    // textShadow: `${activeTab == item ? '0 0 15px #1EFF00' : 'none'}`,
                    fontWeight: '900'
                }}>
                    <Text sx={{textAlign: 'center', paddingTop: '15px', cursor: 'pointer', fontSize: '6'}}>Menu</Text> 
                </Flex>
            </Flex>
            {showMenu && (
                <Flex sx={{flexDirection: 'column', position: 'absolute', backgroundColor: 'surfaceOpaque', top: '50px', right: '10px', borderRadius: '0 0 12px 12px'}}>
                    { menuItems.map((viewTab) => {
                        return ( 
                            <Flex
                                key={viewTab}
                                onClick={() => handleTabClick(viewTab)}   
                                className="caveat-font"
                                sx={{
                                backgroundColor: `${activeTab == viewTab ? 'black' : 'transparent'}`,
                                borderRadius: '8px 8px 0 0', 
                                height: '58px', 
                                flexDirection: 'column', 
                                justifyContent: 'center', 
                                minWidth: '120px',
                                cursor: 'pointer',
                                WebkitTextStroke: '1px #000',
                                textShadow: `${activeTab == viewTab ? '0 0 15px #1EFF00' : 'none'}`,
                                fontWeight: '900'
                            }}>
                                <Text sx={{textAlign: 'center', cursor: 'pointer', fontSize: '6'}}>{viewTab}</Text> 
                            </Flex>
                        )})
                    }
                </Flex>
            )}
        </Box>
    )
}

export default PortfolioInfoMenu