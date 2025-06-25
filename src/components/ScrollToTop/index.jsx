import { styled } from '@mui/material'
import { useEffect, useState } from 'react'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import colors from '../../utils/style/colors'

const ScrollTopButton = styled('button')({
  position: 'fixed',
  bottom: '8vh',
  right: '3%',
  backgroundColor: colors.pink,
  color: '#fff',
  border: 'none',
  borderRadius: '50%',
  width: '3vw',
  height: '3vw',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  zIndex: '5',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.2)',
  },
  '@media (max-width: 768px)': {
    width: '10vw',
    height: '10vw',
  },
})

export default function ScrollToTop() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {showScrollTop && (
        <ScrollTopButton onClick={scrollToTop} aria-label="Retour en haut">
          <KeyboardArrowUpIcon />
        </ScrollTopButton>
      )}
    </>
  )
}
