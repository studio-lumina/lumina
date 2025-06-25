import { styled } from '@mui/material'
import { Link } from 'react-router-dom'

import colors from '../../utils/style/colors'

import { FaInstagram, FaLinkedinIn, FaBehance } from 'react-icons/fa'

import '@fontsource/afacad'

const StyledFooter = styled('footer')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '1em 0',
})

const StyledFooterContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '90%',
  flexWrap: 'wrap',
  '@media (max-width: 768px)': {
    justifyContent: 'center',
    width: '100vw',
    textAlign: 'center',
  },
})

const StyledTextContainer = styled('div')({
  width: 'fit-content',
  '@media (max-width: 768px)': {
    marginBottom: '20px',
  },
})

const StyledText = styled('p')({
  margin: 0,
  fontFamily: '"Afacad", sans-serif',
  fontWeight: 'bold',
  color: colors.black,
  fontSize: 'clamp(15px, 1vw, 20px)',
  '@media (max-width: 768px)': {
    fontSize: '2vw',
  },
  '@media (max-width: 400px)': {
    fontSize: '13px',
  },
})

const StyledSocialContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '15px',
  '@media (max-width: 768px)': {
    justifyContent: 'center',
    width: '100%',
  },
})

const StyledLinkImage = styled(Link)(({ backgroundColor }) => ({
  color: colors.white,
  border: '2px solid',
  backgroundColor: backgroundColor,
  borderRadius: '50%',
  padding: '10px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '40px',
  height: '40px',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.2)',
  },
}))

const socialLinks = [
  {
    icon: <FaInstagram size={30} />,
    backgroundColor: colors.pink,
    link: 'https://www.instagram.com/lumina_freelance/',
  },
  {
    icon: <FaLinkedinIn size={30} />,
    backgroundColor: colors.black,
    link: 'https://www.linkedin.com/in/lucie-ramadan/',
  },
  {
    icon: <FaBehance size={30} />,
    backgroundColor: colors.pink,
    link: 'https://www.behance.net/lucier1/',
  },
]

function Footer() {
  return (
    <StyledFooter>
      <StyledFooterContainer>
        <StyledTextContainer>
          <StyledText>Brand Design & Direction Artistique</StyledText>
        </StyledTextContainer>
        <StyledSocialContainer>
          {socialLinks.map((item, index) => (
            <StyledLinkImage
              to={item.link}
              key={index}
              backgroundColor={item.backgroundColor}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </StyledLinkImage>
          ))}
        </StyledSocialContainer>
      </StyledFooterContainer>
    </StyledFooter>
  )
}

export default Footer
