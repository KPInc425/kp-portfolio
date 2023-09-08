/** @jsxImportSource theme-ui */
import { Text, Box, Grid } from "theme-ui";
import { FaCrown } from 'react-icons/fa'
import './VRLogo.css'
import { useState, useEffect } from "react";

type VRLogoProps = {
    textSize?: number;
}

const VRLogo = ({textSize = 7}: VRLogoProps) => {
    const [strokeWidth, setStrokeWidth] = useState(1.5)
    const [gridMaxWidth, setGridMaxWidth] = useState(['110px'])
    const [gridCellDimensions, setGridCellDimensions] = useState('55px')

    useEffect(() => {
        adjustSize()
    }, [textSize])

    const adjustSize = () => {
        switch (textSize) {
            case 9:
                setStrokeWidth(2)
                setGridMaxWidth(['150px'])
                setGridCellDimensions('80px')
                break;
            case 8:
                setStrokeWidth(1.7)
                setGridMaxWidth(['110px'])
                setGridCellDimensions('55px')
                break;
            case 7:
                setStrokeWidth(1.5)
                setGridMaxWidth(['110px'])
                setGridCellDimensions('55px')
                break;
            case 6:
                setStrokeWidth(1)
                setGridMaxWidth(['50px', '70px','80px'])
                setGridCellDimensions('40px')
                break;
            case 5:
                setStrokeWidth(0.75)
                setGridMaxWidth(['50px'])
                setGridCellDimensions('25px')
                break;
            case 4:
                setStrokeWidth(0.5)
                setGridMaxWidth(['44px'])
                setGridCellDimensions('22px')
                break;
            case 3:
                setStrokeWidth(0.5)
                setGridMaxWidth(['36px'])
                setGridCellDimensions('18px')
                break;
            case 2:
                setStrokeWidth(0.25)
                setGridMaxWidth(['32px'])
                setGridCellDimensions('16px')
                break;
            case 1:
                setStrokeWidth(0.15)
                setGridMaxWidth(['28px'])
                setGridCellDimensions('14px')
                break;
            case 0:
                setStrokeWidth(0.15)
                setGridMaxWidth(['20px'])
                setGridCellDimensions('10px')
                break;
            default:
                setStrokeWidth(1.5)
                setGridMaxWidth(['100px'])
                setGridCellDimensions('50px')
                break;
        }

    }
    
    return (
        <Grid columns={2} gap={0} sx={{maxWidth: gridMaxWidth, height: 'auto', justifyContent: 'center', alignItems: 'center', textAlign: 'center', transform: ['scale(0.5)', 'scale(0.75)', 'scale(1)', 'scale(1.2)']}}>
            <Text sx={{width: gridCellDimensions, height: gridCellDimensions, fontSize: textSize, WebkitTextStroke: `${strokeWidth}px ${textSize == 0 ? 'background' : 'text'}`, color: `${textSize == 0 ? 'backgrond' : 'text'}`}}>V</Text>
            <Box sx={{transform: 'rotate(43deg) translate(-5%, 30%)', color: `${textSize == 0 ? 'text' : 'background'}`, fontSize: textSize }}>
                <FaCrown className={`${textSize == 0 ? '' : 'svgStroke'}`}/>
            </Box>
            <Box sx={{transform: 'rotate(-137deg) translate(5%, 30%)', color: `${textSize == 0 ? 'text' : 'background'}`, fontSize: textSize}}>
                <FaCrown className={`${textSize == 0 ? '' : 'svgStroke'}`}/>
            </Box>
            <Text sx={{width: gridCellDimensions, height: gridCellDimensions, fontSize: textSize, WebkitTextStroke: `${strokeWidth}px ${textSize == 0 ? 'background' : 'text'}`, color: `${textSize == 0 ? 'background' : 'text'}`}}>R</Text>
        </Grid>
    )
}

export default VRLogo