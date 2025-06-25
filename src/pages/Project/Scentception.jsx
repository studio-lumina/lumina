import { styled } from '@mui/material'
import { useState, useEffect, useRef } from 'react'

import ScrollToTop from '../../components/ScrollToTop'

import { GoChevronLeft, GoChevronRight } from 'react-icons/go'

import MockupPhone from '../../assets/projects/scentception/mockup_phone.png'
import ScentceptionVideo from '../../assets/projects/scentception/scentception_video.mp4'
import MoodboardConcept1 from '../../assets/projects/scentception/moodboard_concept_1.jpg'
import MoodboardConcept2 from '../../assets/projects/scentception/moodboard_concept_2.jpg'
import MoodboardConcept3 from '../../assets/projects/scentception/moodboard_concept_3.jpg'

import colors from '../../utils/style/colors'

const StyledSection = styled('section')(({ backgroundColor }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: backgroundColor,
  width: '100%',
  overflow: 'hidden',
}))

const StyledSectionContainer = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  position: 'relative',
  justifyContent: 'center',
  alignItems: 'center',
  width: '90%',
  margin: '1%',
  paddingBottom: '3%',
})

const SectionContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
})

const SectionImageContainer = styled('div')({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  width: '80%',
  '@media (max-width: 768px)': {
    width: '90%',
  },
})

const Caption = styled('p')({
  width: '100%',
  fontFamily: 'Afacad',
  padding: 0,
  margin: 0,
  fontSize: '1.5vw',
  '@media (max-width: 768px)': {
    fontSize: '2.5vw',
  },
})

const Title = styled('h1')({
  fontSize: '2vw',
  fontFamily: 'El Messiri',
  color: colors.pink,
  width: '100%',
  '@media (max-width: 768px)': {
    textAlign: 'center',
    fontSize: '4vw',
  },
})

const Paragrah = styled('p')({
  width: '100%',
  zIndex: 2,
  textAlign: 'center',
  fontFamily: 'Afacad',
  fontSize: '1.6vw',
  '@media (max-width: 768px)': {
    fontSize: '3vw',
  },
})

const Span = styled('span')({
  color: colors.pink,
})

const ImageMockupPhone = styled('img')({
  position: 'relative',
  display: 'block',
  width: '30%',
  '@media (max-width: 768px)': {
    width: '90%',
  },
})

const VideoScentception = styled('video')({
  position: 'absolute',
  objectFit: 'fill',
  top: '10%',
  left: '37.5%',
  width: '25.5%',
  height: '80%',
  clipPath: 'polygon(0.2% 0%, 99.2% 0%, 99.2% 100%, 0.2% 100%)',
  '@media (max-width: 768px)': {
    top: '10%',
    left: '12%',
    width: '77%',
    height: '80%',
    clipPath: 'polygon(0.5% 0%, 99.4% 0%, 99.4% 100%, 0.5% 100%)',
  },
})

const StyledMoodboardList = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(25%, 1fr))',
  gap: '10px',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  '@media (max-width: 768px)': {
    gridTemplateColumns: 'none',
  },
})

const StyledMoodboardImage = styled('img')({
  width: '100%',
  objectFit: 'cover',
  transition: 'transform 0.3s ease-in-out',
  cursor: 'pointer',
  '&:hover': {
    transform: 'scale(1.05)',
  },
})

const StyledFullScreenImage = styled('div')(({ isVisible }) => ({
  display: isVisible ? 'flex' : 'none',
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
}))

const StyledFullScreenImg = styled('img')({
  maxWidth: '90%',
  maxHeight: '90%',
  objectFit: 'contain',
  cursor: 'pointer',
})

const StyledArrow = styled('div')({
  position: 'absolute',
  fontSize: '4rem',
  color: 'white',
  cursor: 'pointer',
  padding: '10px',
  userSelect: 'none',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.5)',
    color: colors.pink,
  },
})

const LeftArrow = styled(StyledArrow)({ left: '0px' })
const RightArrow = styled(StyledArrow)({ right: '0px' })

export default function Scentception() {
  const [selectedIndex, setSelectedIndex] = useState(null)
  const videoRef = useRef(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 0.1
    }
  }, [])

  const handleNext = () => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % moodboardImages.length)
  }

  const handlePrev = () => {
    setSelectedIndex(
      (prevIndex) =>
        (prevIndex - 1 + moodboardImages.length) % moodboardImages.length
    )
  }

  const moodboardImages = [
    MoodboardConcept1,
    MoodboardConcept2,
    MoodboardConcept3,
  ]

  return (
    <>
      <StyledSection backgroundColor={colors.white}>
        <StyledSectionContainer>
          <SectionContainer>
            <Title>Instagram</Title>
            <Caption>Réel avec I.A. - Montage par Lucie Ramadan</Caption>
            <SectionImageContainer>
              <ImageMockupPhone alt="Mockup Phone" src={MockupPhone} />

              <VideoScentception
                ref={videoRef}
                src={ScentceptionVideo}
                autoPlay
                loop
                playsInline
                controls
              />
            </SectionImageContainer>
            <Paragrah>
              Projet réalisé à quatre avec Juliette Bouraïma, <br />
              Marie Blagogee et Carla Monti.
            </Paragrah>
            <Paragrah>
              <Span>
                Création et réalisation d’une stratégie de communication
              </Span>{' '}
              <br />à l’aide{' '}
              <Span>
                d’images et de vidéos générées par des intelligences
                artificielles,
              </Span>{' '}
              pour le lancement d’une nouvelle <Span>marque de parfum</Span> :
              <br />
              Scentception de Nadia Geyken Firenze.
            </Paragrah>
          </SectionContainer>
        </StyledSectionContainer>
      </StyledSection>

      <StyledSection backgroundColor={colors.beige}>
        <StyledSectionContainer>
          <SectionContainer>
            <Title>Planches explicatives</Title>
            <StyledMoodboardList>
              {moodboardImages.map((image, index) => (
                <StyledMoodboardImage
                  key={index}
                  src={image}
                  alt={`Moodboard Concept ${index + 1}`}
                  onClick={() => setSelectedIndex(index)}
                />
              ))}
            </StyledMoodboardList>

            {selectedIndex !== null && (
              <StyledFullScreenImage
                isVisible={true}
                onClick={() => setSelectedIndex(null)}
              >
                <LeftArrow
                  onClick={(e) => {
                    e.stopPropagation()
                    handlePrev()
                  }}
                >
                  <GoChevronLeft />
                </LeftArrow>
                <StyledFullScreenImg
                  src={moodboardImages[selectedIndex]}
                  alt="Full Screen Moodboard"
                />
                <RightArrow
                  onClick={(e) => {
                    e.stopPropagation()
                    handleNext()
                  }}
                >
                  <GoChevronRight />
                </RightArrow>
              </StyledFullScreenImage>
            )}
          </SectionContainer>
        </StyledSectionContainer>
      </StyledSection>

      <ScrollToTop />
    </>
  )
}
