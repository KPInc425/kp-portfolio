import { Flex, Text } from "theme-ui"

type SetActiveTab = (item: string) => void
type PortfolioInfoMenuProps = {
    activeTab: string
    setActiveTab: SetActiveTab
}

const PortfolioInfoMenu = ({activeTab, setActiveTab} : PortfolioInfoMenuProps) => {
    const menuItems = ['Home', 'Details', 'Portfolio', 'Resume', 'Contact']

    const handleTabClick = (item: string) => {
        setActiveTab(item)
    }
    return (
        <Flex ml='4' px='2' sx={{
            backgroundColor: 'primary', 
            borderRadius: '12px 12px 0 0', 
            height: '50px', 
            width: '800px', 
            gap: '4', 
            alignItems: 'center', 
            justifyContent: 'space-around'
        }}>
            { menuItems.map((item) => {
                return ( 
                    <Flex
                        key={item}
                        onClick={() => handleTabClick(item)}   
                        sx={{
                        backgroundColor: `${activeTab == item ? 'black' : 'transparent'}`,
                        borderRadius: '8px 8px 0 0', 
                        height: '58px', 
                        flexDirection: 'column', 
                        justifyContent: 'center', 
                        marginTop: '-8px', 
                        minWidth: '120px',
                        cursor: 'pointer',
                    }}>
                        <Text sx={{textAlign: 'center', paddingTop: '15px', cursor: 'pointer',}}>{item}</Text> 
                    </Flex>
                )})
            }
        </Flex>
    )
}

export default PortfolioInfoMenu