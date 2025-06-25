import { Link } from 'react-router-dom'
import { styled } from '@mui/material'

import SunFlower from '../../assets/graphic_identity/sunflower_pattern.png'
import colors from '../../utils/style/colors'

const StyledMain = styled('main')({
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

const StyledMainContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '50%',
  flexDirection: 'column',
})

const StyledLink = styled(Link)({
  textDecoration: 'none',
  color: colors.black,
  fontFamily: '"El Messiri", sans-serif',
  border: '2px solid black',
  borderRadius: '50px',
  padding: '1.5dvh 2.5dvh',
  transition: 'all 0.3s ease-in-out',
  fontSize: '1.8vw',
  '@media (max-width: 768px)': {
    fontSize: '3dvh',
  },
  '&:hover': {
    backgroundColor: colors.pink,
    color: colors.white,
    borderColor: colors.pink,
  },
})

const StyledSunFlowerImage = styled('img')({
  position: 'absolute',
  top: '50%',
  right: '15%',
  width: '50dvh',
  transform: 'rotate(10deg)',
  zIndex: '-1',
  '@media (max-width: 768px)': {
    right: '5%',
    width: '35dvh',
  },
})

function Redirection() {
  return (
    <StyledMain>
      <StyledMainContainer>
        <StyledLink
          target="_blank"
          rel="noopener noreferrer"
          to="/lumina/contact"
        >
          Contactez-moi
        </StyledLink>
        <StyledLink target="_blank" rel="noopener noreferrer" to="/lumina">
          Portfolio
        </StyledLink>
      </StyledMainContainer>
      <StyledSunFlowerImage src={SunFlower} alt="Sunflower Pattern" />
    </StyledMain>
  )
}

export default Redirection
