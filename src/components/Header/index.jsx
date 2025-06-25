import { Link } from 'react-router-dom'
import { styled } from '@mui/material'
import { useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

import Footer from '../Footer'

import Logo from '../../assets/graphic_identity/logo_lumina.png'
import colors from '../../utils/style/colors'

import '@fontsource/el-messiri'

const HeaderContainer = styled('header')(({ isScrolled }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  backgroundColor: colors.white,
  position: 'sticky',
  top: 0,

  padding: isScrolled ? 0 : '10px 0',
  zIndex: 1000,
  boxShadow: isScrolled ? '0px 4px 6px rgba(0, 0, 0, 0.1)' : 'none',
  transition: 'padding 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '@media (max-width: 768px)': {
    width: '100%',
    position: 'sticky',
    top: 0,
  },
}))

const HeaderContent = styled('div')(({ isRedirection }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: isRedirection ? 'center' : 'space-between',
  width: '90%',
  '@media (max-width: 768px)': {
    display: 'none',
  },
}))

const ImageLinkContainer = styled('div')({
  width: '100%',
  textAlign: 'center',
})

const ImageLink = styled(Link)({
  width: 'fit-content',
})

const ImageLogo = styled('img')(({ isScrolled, isHideButton }) => ({
  width: 'clamp(50px, 20vh, 150px)',
  transition: 'all 0.3s ease-in-out',
  '&:hover': isHideButton ? {} : { transform: 'scale(1.2)' },
  '@media (max-width: 768px)': isHideButton
    ? {
        width: 'clamp(125px, 40%, 250px)',
      }
    : {
        width: 'clamp(100px, 15%, 200px)',
        '&:hover': {
          transform: 'scale(1.2)',
        },
      },
}))

const StyledLink = styled(Link)(({ isScrolled }) => ({
  whiteSpace: 'nowrap',
  textDecoration: 'none',
  color: colors.black,
  fontFamily: 'El Messiri',
  border: '1px solid black',
  borderRadius: '50px',
  fontSize: 'clamp(15px, 1vw, 20px)',
  padding: 'clamp(5px, 0.8vw, 10px)',
  paddingTop: 'clamp(0px, 0.5vw, 10px)',
  paddingBottom: 'clamp(0px, 0.3vw, 10px)',
  transition: '0.3s ease-in-out',
  '&:hover': {
    backgroundColor: colors.pink,
    color: colors.white,
    borderColor: colors.pink,
  },
  '@media (max-width: 768px)': {
    padding: 'clamp(12px, 1.5vw, 20px)',
    fontSize: 'clamp(18px, 4vw, 30px)',
  },
}))

const MenuButton = styled('button')({
  background: 'none',
  color: colors.black,
  border: 'none',
  cursor: 'pointer',
  display: 'none',
  position: 'absolute',
  right: '20px',
  '@media (max-width: 768px)': {
    display: 'block',
    fontSize: '24px',
  },
})

const MobileNav = styled('div')({
  display: 'none',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  width: '100%',
  padding: '10px 20px',
  position: 'relative',
  '@media (max-width: 768px)': {
    display: 'flex',
  },
})

const NavMenu = styled('nav')(({ open }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'fixed',
  top: 0,
  right: 0,
  width: '100%',
  height: '100vh',
  backgroundColor: colors.white,
  padding: '20px',
  textAlign: 'center',
  transition: 'transform 0.3s ease-in-out',
  transform: open ? 'translateX(0)' : 'translateX(100%)',
  zIndex: 1000,
  justifyContent: 'space-between',
}))

const MenuContent = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '3vh',
})

const CloseButton = styled('button')(({ isScrolled }) => ({
  background: 'none',
  color: colors.black,
  border: 'none',
  cursor: 'pointer',
  position: 'absolute',
  right: '20px',
  top: isScrolled ? '25px' : '40px',
  fontSize: '24px',
  transition: 'all 0.3s ease-in-out',
}))

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  const hideButton = location.pathname === '/lumina/redirection'

  const headerRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <HeaderContainer ref={headerRef} isScrolled={isScrolled}>
      <HeaderContent isRedirection={hideButton}>
        {!hideButton && (
          <StyledLink to="/lumina/about" isScrolled={isScrolled}>
            À Propos
          </StyledLink>
        )}
        {!hideButton ? (
          <ImageLinkContainer>
            <ImageLink to="/lumina">
              <ImageLogo src={Logo} alt="Lumina logo" isScrolled={isScrolled} />
            </ImageLink>
          </ImageLinkContainer>
        ) : (
          <ImageLogo
            isHideButton={hideButton}
            src={Logo}
            alt="Lumina logo"
            isScrolled={isScrolled}
          />
        )}
        {!hideButton && (
          <StyledLink to="/lumina/contact" isScrolled={isScrolled}>
            Contact
          </StyledLink>
        )}
      </HeaderContent>

      <MobileNav>
        {!hideButton ? (
          <ImageLinkContainer>
            <Link to="/lumina">
              <ImageLogo
                isHideButton={hideButton}
                src={Logo}
                alt="Lumina logo"
                isScrolled={isScrolled}
              />
            </Link>
          </ImageLinkContainer>
        ) : (
          <ImageLogo
            isHideButton={hideButton}
            src={Logo}
            alt="Lumina logo"
            isScrolled={isScrolled}
          />
        )}
      </MobileNav>
      {!hideButton && (
        <MenuButton onClick={() => setMenuOpen(true)}>
          <MenuIcon />
        </MenuButton>
      )}

      <NavMenu open={menuOpen}>
        <Link to="/lumina" onClick={() => setMenuOpen(false)}>
          <ImageLogo src={Logo} alt="Lumina logo" />
          <CloseButton
            onClick={() => setMenuOpen(false)}
            isScrolled={isScrolled}
          >
            <CloseIcon />
          </CloseButton>
        </Link>
        <MenuContent>
          <StyledLink to="/lumina/about" onClick={() => setMenuOpen(false)}>
            À Propos
          </StyledLink>
          <StyledLink to="/lumina/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </StyledLink>
        </MenuContent>
        <Footer />
      </NavMenu>
    </HeaderContainer>
  )
}

export default Header
