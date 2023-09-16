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
            justifyContent: 'space-around',
            display: ['none', 'flex']
        }}>
            { menuItems.map((item) => {
                return ( 
                    <Flex
                        key={item}
                        onClick={() => handleTabClick(item)}   
                        className="caveat-font"
                        sx={{
                        backgroundColor: `${activeTab == item ? 'black' : 'transparent'}`,
                        borderRadius: '8px 8px 0 0', 
                        height: '58px', 
                        flexDirection: 'column', 
                        justifyContent: 'center', 
                        marginTop: '-8px', 
                        minWidth: '120px',
                        cursor: 'pointer',
                        WebkitTextStroke: '1px #000',
                        textShadow: `${activeTab == item ? '0 0 15px #1EFF00' : 'none'}`,
                        fontWeight: '900'
                    }}>
                        <Text sx={{textAlign: 'center', paddingTop: '15px', cursor: 'pointer', fontSize: '6'}}>{item}</Text> 
                    </Flex>
                )})
            }
        </Flex>
    )
}

export default PortfolioInfoMenu