import { styled } from '@mui/material'
import { useEffect, useState } from 'react'

import ScrollToTop from '../../components/ScrollToTop'

import { GoChevronLeft, GoChevronRight } from 'react-icons/go'

import MockupLaptop from '../../assets/projects/mode_et_sport/mockup_laptop.png'
import MockupPhone from '../../assets/projects/mode_et_sport/mockup_phone.png'
import VideoPhone1 from '../../assets/projects/mode_et_sport/video_phone_1.mp4'
import VideoPhone2 from '../../assets/projects/mode_et_sport/video_phone_2.mp4'
import VideoPhone3 from '../../assets/projects/mode_et_sport/video_phone_3.mp4'
import MoodboardConcept1 from '../../assets/projects/mode_et_sport/moodboard_concept_1.jpg'
import MoodboardConcept2 from '../../assets/projects/mode_et_sport/moodboard_concept_2.jpg'
import MoodboardConcept3 from '../../assets/projects/mode_et_sport/moodboard_concept_3.jpg'
import MoodboardConcept4 from '../../assets/projects/mode_et_sport/moodboard_concept_4.jpg'
import MoodboardConcept5 from '../../assets/projects/mode_et_sport/moodboard_concept_5.jpg'
import MoodboardConcept6 from '../../assets/projects/mode_et_sport/moodboard_concept_6.jpg'

import colors from '../../utils/style/colors'

const StyledSection = styled('section')(({ backgroundColor }) => ({
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: backgroundColor,
}))

const StyledSectionContainer = styled('div')({
  width: '90%',
  display: 'flex',
  flexDirection: 'row',
  margin: '2em',
  '@media (max-width: 768px)': {
    flexDirection: 'column',
  },
})

const StyledBox = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '100%',
  position: 'relative',
  '@media (max-width: 768px)': {
    flexDirection: 'column',
  },
})

const StyledBoxContainer = styled('div')({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-around',
})

const StyledBoxContainerVideo = styled('div')({
  width: '100%',
  margin: '1em auto',
})

const StyledMediaContainer = styled('div')({
  position: 'relative',
  display: 'flex',
  width: '100%',
})

const StyledImage = styled('img')({
  width: '100%',
  objectFit: 'cover',
})

const InsertVideo = styled('iframe')({
  position: 'absolute',
  border: 'none',
  top: '4.5%',
  left: '11%',
  width: '78%',
  height: '73%',
  objectFit: 'contain',
  clipPath: 'polygon(0.6% 0.6%, 98.9% 0.6%, 99.5% 99.3%, 0% 99.3%)',
})

const StyledParagraph = styled('p')({
  fontFamily: 'Afacad, sans-sherif',
  width: '60%',
  color: colors.black,
  textAlign: 'center',
  fontSize: '1.6vw',
  '@media (max-width: 768px)': {
    fontSize: '3vw',
    width: '80%',
  },
})

const StyledSpan = styled('span')({
  color: colors.pink,
})

const StyledProjectDescription = styled('div')({
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  alignContent: 'center',
  display: 'flex',
  flexDirection: 'column',
})

const StyledCaptionBox = styled('div')({
  position: 'relative',
  top: 20,
  '@media (max-width: 768px)': {
    position: 'relative',
    top: 0,
    marginBottom: '2em',
  },
})

const StyledCaptionTitle = styled('h1')({
  fontFamily: 'El Messiri',
  color: colors.pink,
  margin: 0,
  fontSize: '2vw',
  '@media (max-width: 768px)': {
    textAlign: 'center',
    fontSize: '4vw',
  },
})

const StyledCaptionDescription = styled('p')({
  fontFamily: 'Afacad',
  margin: 0,
  fontSize: '1.5vw',
  '@media (max-width: 768px)': {
    fontSize: '2.5vw',
  },
})

const StyledBoxImage = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
})

const StyledBoxContainerImage = styled('div')({
  width: '100%',
  height: 'fit-content',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

const StyledMediaContainerPhone = styled('div')({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
})

const StyledMediaContainerPhoneSecond = styled(StyledMediaContainerPhone)({
  marginBottom: '200px',
})

const StyledPhone = styled('img')({
  width: '60%',
  objectFit: 'cover',
  '@media (max-width: 768px)': {
    width: '110px',
  },
})

const StyledVideoPhone = styled('video')({
  position: 'absolute',
  top: '10%',
  left: '25%',
  width: '50.7%',
  height: '80%',
  objectFit: 'cover',
  '@media (max-width: 768px)': {
    left: '8.3%',
    width: '84.5%',
  },
})

const StyledCaptionDescriptionBottomLeft = styled('p')({
  left: '15%',
  bottom: '-15%',
  width: '14em',
  position: 'absolute',
  fontFamily: 'Afacad, sans-sherif',
  fontSize: '1.5vw',
  '@media (max-width: 768px)': {
    width: '10em',
    fontSize: '2.5vw',
    bottom: '-30%',
    left: '-10%',
  },
})

const StyledCaptionDescriptionTopRight = styled('p')({
  top: '-13%',
  left: '10%',
  width: '16em',
  position: 'absolute',
  fontFamily: 'Afacad, sans-sherif',
  fontSize: '1.5vw',
  '@media (max-width: 768px)': {
    fontSize: '2.5vw',
    top: '-20%',
    left: '-45%',
  },
})

const StyledCaptionDescriptionBottomRight = styled('p')({
  left: '15%',
  bottom: '-15%',
  width: '14em',
  position: 'absolute',
  fontFamily: 'Afacad, sans-sherif',
  fontSize: '1.5vw',
  '@media (max-width: 768px)': {
    fontSize: '2.5vw',
    width: '10em',
    bottom: '-30%',
    left: '-5%',
  },
})

const StyledMoodboardContainer = styled('div')({
  width: '100%',
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

export default function ModeEtSport() {
  const [selectedIndex, setSelectedIndex] = useState(null)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
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
    MoodboardConcept4,
    MoodboardConcept5,
    MoodboardConcept6,
  ]

  return (
    <>
      <StyledSection backgroundColor={colors.white}>
        <StyledSectionContainer>
          <StyledBox>
            <StyledBoxContainerVideo>
              {isMobile ? (
                <StyledCaptionBox>
                  <StyledCaptionTitle>Youtube</StyledCaptionTitle>
                  <StyledCaptionDescription>
                    Vidéo publicitaire en format horizontal <br /> Montage par
                    Lucie Ramadan
                  </StyledCaptionDescription>
                </StyledCaptionBox>
              ) : null}

              <StyledMediaContainer>
                <StyledImage src={MockupLaptop} alt="Mockup Laptop" />
                <InsertVideo
                  src="https://www.youtube.com/embed/qL5jpqcoNu4?si=mTpOCzXxScJwO44J&controls=1&rel=0"
                  allow="autoplay;"
                  allowFullScreen
                />
              </StyledMediaContainer>

              {!isMobile ? (
                <StyledCaptionBox>
                  <StyledCaptionTitle>Youtube</StyledCaptionTitle>
                  <StyledCaptionDescription>
                    Vidéo publicitaire en format horizontal - Montage par Lucie
                    Ramadan
                  </StyledCaptionDescription>
                </StyledCaptionBox>
              ) : null}
            </StyledBoxContainerVideo>

            <StyledBoxContainer>
              <StyledProjectDescription>
                <StyledParagraph>
                  Projet réalisé à quatre <br />
                  avec Carla Monti, Marie Blagogee et
                  <br />
                  Collyn Chariot.
                </StyledParagraph>
                <StyledParagraph>
                  <StyledSpan>
                    Création et réalisation d’une campagne vidéo
                  </StyledSpan>{' '}
                  à destination des <StyledSpan>réseaux sociaux</StyledSpan>{' '}
                  pour <StyledSpan>promouvoir</StyledSpan> dans la perspective
                  des JO 2024,{' '}
                  <StyledSpan>
                    l’exposition “Mode et Sport, d’un podium à l’autre”
                  </StyledSpan>{' '}
                  du musée des Arts Décoratifs de Paris.
                </StyledParagraph>
              </StyledProjectDescription>
            </StyledBoxContainer>
          </StyledBox>
        </StyledSectionContainer>
      </StyledSection>

      <StyledSection backgroundColor={colors.white}>
        <StyledSectionContainer>
          <StyledBox>
            <StyledBoxImage>
              <StyledBoxContainerImage>
                <StyledMediaContainerPhone>
                  <StyledPhone src={MockupPhone} alt="Mockup Phone" />
                  <StyledVideoPhone
                    src={VideoPhone1}
                    autoPlay
                    loop
                    muted
                    playsInline
                    controlsList="nodownload noremoteplayback"
                    onLoadedMetadata={(e) => (e.target.volume = 0.1)}
                    disablePictureInPicture
                  />
                  <StyledCaptionDescriptionBottomLeft>
                    Short 1 - Montage par Carla Monti
                  </StyledCaptionDescriptionBottomLeft>
                </StyledMediaContainerPhone>
                <StyledMediaContainerPhoneSecond>
                  <StyledPhone src={MockupPhone} alt="Mockup Phone" />
                  <StyledVideoPhone
                    src={VideoPhone2}
                    autoPlay
                    loop
                    muted
                    playsInline
                    controlsList="nodownload noremoteplayback"
                    onLoadedMetadata={(e) => (e.target.volume = 0.1)}
                    disablePictureInPicture
                  />
                  <StyledCaptionDescriptionTopRight>
                    Short 2 - Montage par Marie Blagogee
                  </StyledCaptionDescriptionTopRight>
                </StyledMediaContainerPhoneSecond>
                <StyledMediaContainerPhone>
                  <StyledPhone src={MockupPhone} alt="Mockup Phone" />
                  <StyledVideoPhone
                    src={VideoPhone3}
                    autoPlay
                    loop
                    muted
                    playsInline
                    controlsList="nodownload noremoteplayback"
                    onLoadedMetadata={(e) => (e.target.volume = 0.1)}
                    disablePictureInPicture
                  />
                  <StyledCaptionDescriptionBottomRight>
                    Short 3 - Montage par Carla Monti
                  </StyledCaptionDescriptionBottomRight>
                </StyledMediaContainerPhone>
              </StyledBoxContainerImage>
            </StyledBoxImage>
          </StyledBox>
        </StyledSectionContainer>
      </StyledSection>

      <StyledSection backgroundColor={colors.beige}>
        <StyledSectionContainer>
          <StyledBox>
            <StyledMoodboardContainer>
              <h1
                style={{
                  color: colors.pink,
                  fontSize: '25px',
                  fontFamily: 'El Messiri, sans-sherif',
                }}
              >
                Planches explicatives
              </h1>
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
            </StyledMoodboardContainer>
          </StyledBox>
        </StyledSectionContainer>
      </StyledSection>

      <ScrollToTop />
    </>
  )
}
