/** @jsxImportSource theme-ui */

import { useEffect, useState } from "react"
import { Box, Flex, Text } from "theme-ui"
import PortfolioInfoDetails from "./PortfolioInfoDetails"
import PortfolioInfoMenu from "./PortfolioInfoMenu"

const details = {
    home: {
        heading: 'Something about myself and why I want to be a web dev, like a clever tagline',
        description: 'Lorem ipsum dolor sit amet. Est tempora eligendi et dolores exercitationem aut nemo dolorum ut facilis voluptatem qui galisum incidunt aut exercitationem voluptatem. Non galisum possimus quo dignissimos omnis At natus minima non omnis quidem qui soluta voluptatibus.',
        graphicText: 'Powered by Passion and Enthusiasm',
    },
    details: {
        heading: 'Here is something a bit more in depth about myself',
        description: 'Lorem ipsum dolor sit amet. Est tempora eligendi et dolores exercitationem aut nemo dolorum ut facilis voluptatem qui galisum incidunt aut exercitationem voluptatem. Non galisum possimus quo dignissimos omnis At natus minima non omnis quidem qui soluta voluptatibus. Lorem ipsum dolor sit amet. Est tempora eligendi et dolores exercitationem aut nemo dolorum ut facilis voluptatem qui galisum incidunt aut exercitationem voluptatem. Non galisum possimus quo dignissimos omnis At natus minima non omnis quidem qui soluta voluptatibus.Lorem ipsum dolor sit amet. Est tempora eligendi et dolores exercitationem aut nemo dolorum ut facilis voluptatem qui galisum incidunt aut exercitationem voluptatem. Non galisum possimus quo dignissimos omnis At natus minima non omnis quidem qui soluta voluptatibus. Lorem ipsum dolor sit amet. Est tempora eligendi et dolores exercitationem aut nemo dolorum ut facilis voluptatem qui galisum incidunt.',
        graphicText: 'Powered by Passion and Enthusiasm',
    },
    portfolio: {
        heading: 'Portfolio',
        description: 'Lorem ipsum dolor sit amet. Est tempora eligendi et dolores exercitationem aut nemo dolorum ut facilis voluptatem qui galisum incidunt aut exercitationem voluptatem. Non galisum possimus quo dignissimos omnis At natus minima non omnis quidem qui soluta voluptatibus.',
        graphicText: 'Powered by Passion and Enthusiasm',
    },
    resume: {
        heading: 'Resume',
        description: 'Lorem ipsum dolor sit amet. Est tempora eligendi et dolores exercitationem aut nemo dolorum ut facilis voluptatem qui galisum incidunt aut exercitationem voluptatem. Non galisum possimus quo dignissimos omnis At natus minima non omnis quidem qui soluta voluptatibus.',
        graphicText: 'Powered by Passion and Enthusiasm',
    },
    contact: {
        heading: 'Contact',
        description: 'Lorem ipsum dolor sit amet. Est tempora eligendi et dolores exercitationem aut nemo dolorum ut facilis voluptatem qui galisum incidunt aut exercitationem voluptatem. Non galisum possimus quo dignissimos omnis At natus minima non omnis quidem qui soluta voluptatibus.',
        graphicText: 'Powered by Passion and Enthusiasm',
    },
}

const PortfolioInfo = () => {
    const [activeTab, setActiveTab] = useState('Home')
    const [activeDetails, setActiveDetails] = useState({heading: '', description: '', graphicText: ''})
    useEffect(() => {
        console.log(activeTab)
        switch(activeTab) {
            case 'Home':
                setActiveDetails({
                    heading: details.home.heading,
                    description: details.home.description,
                    graphicText: details.home.graphicText,
                })
                break
            case 'Details':
                setActiveDetails({
                    heading: details.details.heading,
                    description: details.details.description,
                    graphicText: details.details.graphicText,
                })
                break
            case 'Portfolio':
                setActiveDetails({
                    heading: details.portfolio.heading,
                    description: details.portfolio.description,
                    graphicText: details.portfolio.graphicText,
                })
                break
            case 'Resume':
                setActiveDetails({
                    heading: details.resume.heading,
                    description: details.resume.description,
                    graphicText: details.resume.graphicText,
                })
                break
            case 'Contact':
                setActiveDetails({
                    heading: details.contact.heading,
                    description: details.contact.description,
                    graphicText: details.contact.graphicText,
                })
                break
            default:
                setActiveDetails({
                    heading: details.home.heading,
                    description: details.home.description,
                    graphicText: details.home.graphicText,
                })
                break
        }
    }, [activeTab])


    return (
        <Box>
            <PortfolioInfoMenu activeTab={activeTab} setActiveTab={setActiveTab}/>
            <PortfolioInfoDetails heading={activeDetails.heading} description={activeDetails.description} graphicText={activeDetails.graphicText}/>
        </Box>
    )
}

export default PortfolioInfo