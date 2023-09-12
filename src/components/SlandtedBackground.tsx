/** @jsxImportSource theme-ui */

const SlantedBackground = () => {
  return (
    <div sx={{
      width: '150%', 
      height: '135%', 
      marginTop: '5',
      position: 'absolute', 
      bottom: '0', 
      left: '0', 
      zIndex: '-1', 
      // transform: 'skewY(150deg)', 
      // transformOrigin: 'top left', 
      backgroundImage: 'linear-gradient(168deg, rgba(0,0,0,0) 50%, #727272 calc(50% + 2px))'}}>
    </div>
  );
}

export default SlantedBackground;
