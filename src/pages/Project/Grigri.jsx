import { styled } from '@mui/material'
import { useState } from 'react'

import ScrollToTop from '../../components/ScrollToTop'

import { GoChevronLeft, GoChevronRight } from 'react-icons/go'

import FeedInstagramMockupPhone from '../../assets/projects/grigri/feed_instagram-mockup_phone.png'
import PostInstagram1 from '../../assets/projects/grigri/post_instagram_1.png'
import PostInstagram2 from '../../assets/projects/grigri/post_instagram_2.png'
import PostInstagram3 from '../../assets/projects/grigri/post_instagram_3.png'
import MockupLaptop from '../../assets/projects/grigri/mockup_laptop.png'
import StoriesMockupPhones from '../../assets/projects/grigri/stories_instagram.png'
import WebsiteMockupLaptop from '../../assets/projects/grigri/website-mockup_laptop.png'
import WebsiteMockupPhone from '../../assets/projects/grigri/website-mockup_phone.png'
import LandingPage from '../../assets/projects/grigri/landing_page.png'
import Grigrillon from '../../assets/projects/grigri/grigrillon.png'
import Packaging1 from '../../assets/projects/grigri/packaging_1.png'
import Packaging2 from '../../assets/projects/grigri/packaging_2.png'
import PLV from '../../assets/projects/grigri/plv.png'
import Step1MockupPoster from '../../assets/projects/grigri/step_1-mockup_poster.png'
import Step2MockupPoster from '../../assets/projects/grigri/step_2-mockup_poster.png'
import Board1 from '../../assets/projects/grigri/board_1.jpg'
import Board2 from '../../assets/projects/grigri/board_2.jpg'
import Board3 from '../../assets/projects/grigri/board_3.jpg'
import Board4 from '../../assets/projects/grigri/board_4.jpg'
import Board5 from '../../assets/projects/grigri/board_5.jpg'
import Board6 from '../../assets/projects/grigri/board_6.jpg'
import Board7 from '../../assets/projects/grigri/board_7.jpg'
import Board8 from '../../assets/projects/grigri/board_8.jpg'
import Board9 from '../../assets/projects/grigri/board_9.jpg'
import Board10 from '../../assets/projects/grigri/board_10.jpg'
import Board11 from '../../assets/projects/grigri/board_11.jpg'
import Board12 from '../../assets/projects/grigri/board_12.jpg'
import Board13 from '../../assets/projects/grigri/board_13.jpg'
import Board14 from '../../assets/projects/grigri/board_14.jpg'
import Board15 from '../../assets/projects/grigri/board_15.jpg'

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
  paddingBottom: '5%',
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

const Title = styled('h1')({
  fontFamily: 'El Messiri',
  color: colors.pink,
  width: '100%',
  marginBottom: 0,
  fontSize: '2vw',
  '@media (max-width: 768px)': {
    textAlign: 'center',
    fontSize: '4vw',
  },
})

const TitleAlignRight = styled(Title)({
  textAlign: 'right',
  '@media (max-width: 768px)': {
    textAlign: 'center',
  },
})

const Caption = styled('p')({
  width: '100%',
  fontFamily: 'Afacad',
  fontSize: '1.5vw',
  '@media (max-width: 768px)': {
    fontSize: '2.5vw',
  },
})

const CaptionAlignRight = styled(Caption)({
  textAlign: 'right',
  '@media (max-width: 768px)': {
    textAlign: 'center',
  },
})

const CaptionCenter = styled(Caption)({
  textAlign: 'center',
})

const CaptionSiteWebMobile = styled('p')({
  position: 'absolute',
  bottom: '-2%',
  right: '5%',
  fontSize: '1.5vw',
  '@media (max-width: 768px)': {
    fontSize: '2.5vw',
    top: '54%',
    right: '-2%',
  },
})

const Paragraph = styled('p')({
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

const Image = styled('img')({
  position: 'relative',
  display: 'block',
  width: '65%',
  '@media (max-width: 768px)': {
    width: '55%',
  },
})

const ImageStep1MockupPoster = styled(Image)({
  left: '-27.5%',
  zIndex: 2,
  '@media (max-width: 768px)': {
    left: '-25%',
  },
})

const ImageStep2MockupPoster = styled(Image)({
  position: 'absolute',
  right: '-12.5%',
  top: '-10%',
  '@media (max-width: 768px)': {
    right: '0',
  },
})

const ImagePlv = styled(Image)({
  width: '30%',
})

const ImagePackaging1 = styled(Image)({
  width: '30%',
  left: '-5%',
  '@media (max-width: 768px)': {
    left: 0,
  },
})

const ImagePackaging2 = styled(Image)({
  width: '30%',
  right: '-5%',
  '@media (max-width: 768px)': {
    right: 0,
  },
})

const ImageCricket1 = styled(Image)({
  position: 'absolute',
  width: '30%',
  top: '-25%',
  left: '30%',
  '@media (max-width: 768px)': {
    top: '-15%',
    left: '19%',
    width: '40%',
  },
})

const ImageCricket2 = styled(Image)({
  position: 'absolute',
  width: '30%',
  bottom: '-20%',
  right: '0%',
  transform: 'rotate(90deg)',
  '@media (max-width: 768px)': {
    width: '40%',
    bottom: '-15%',
    right: '-20%',
  },
})

const ImageLandingPage = styled(Image)({
  width: '28%',
  left: '-20%',
})

const ImageWebsiteMockupLaptop = styled(Image)({
  position: 'absolute',
  zIndex: 2,
  top: '8%',
  left: '37%',
})

const ImageWebsiteMockupPhone = styled(Image)({
  position: 'absolute',
  zIndex: 3,
  top: '27%',
  left: '57%',
  width: '50%',
  '@media (max-width: 768px)': {
    top: '15%',
  },
})

const ImageMockupLaptop = styled(Image)({
  width: '90%',
  '@media (max-width: 768px)': {
    width: '100%',
  },
})

const VideoGrigri = styled('iframe')({
  position: 'absolute',
  objectFit: 'fill',
  border: 'none',
  width: '70%',
  height: '72%',
  top: '5%',
  left: '14.8%',
  clipPath: 'polygon(0.8% 0%, 99.25% 0.1%, 99.85% 99.9%, 0.3% 99.9%)',
  '@media (max-width: 768px)': {
    width: '78%',
    left: '10.7%',
    clipPath: 'polygon(0.8% 0%, 99.25% 0.1%, 99.85% 99.9%, 0.3% 99.9%)',
  },
})

const ImageStoriesMockupPhones = styled(Image)({
  width: '100%',
  '@media (max-width: 768px)': { width: '100%' },
})

const ImagePostsMockupPhones = styled(Image)({
  width: '50%',
  '@media (max-width: 768px)': { width: '50%' },
})

const ImagePostsMockupPhonesLeftSide = styled(ImagePostsMockupPhones)({
  position: 'absolute',
  width: '30%',
  objectFit: 'contain',
  top: '5%',
  left: '-5%',
  '@media (max-width: 768px)': { width: '35%', left: '-10%' },
})

const ImagePostsMockupPhonesRightSide = styled(ImagePostsMockupPhones)({
  position: 'absolute',
  width: '30%',
  objectFit: 'contain',
  top: '5%',
  left: '75%',
  '@media (max-width: 768px)': { width: '35%' },
})

const ImageFeedInstagramMockupPhone = styled(Image)({
  width: '40%',
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

const StyledFullScreenImg = styled('img')({
  maxWidth: '90%',
  maxHeight: '90%',
  objectFit: 'contain',
  cursor: 'pointer',
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

export default function Grigri() {
  const [selectedIndex, setSelectedIndex] = useState(null)
  const [isMobile] = useState(window.innerWidth <= 768)

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
    Board1,
    Board2,
    Board3,
    Board4,
    Board5,
    Board6,
    Board7,
    Board8,
    Board9,
    Board10,
    Board11,
    Board12,
    Board13,
    Board14,
    Board15,
  ]

  return (
    <>
      <StyledSection backgroundColor={colors.white}>
        <StyledSectionContainer>
          <SectionContainer>
            <Title>Instagram</Title>
            <Caption>Feed par Lucie Ramadan et Juliette Bouraïma</Caption>
            <SectionImageContainer>
              <ImageFeedInstagramMockupPhone
                alt="Feed Instagram"
                src={FeedInstagramMockupPhone}
              />
            </SectionImageContainer>
            <CaptionAlignRight>
              Posts par Lucie Ramadan et Juliette Bouraïma
            </CaptionAlignRight>
            <SectionImageContainer>
              <ImagePostsMockupPhonesLeftSide
                alt="Post Instagram"
                src={PostInstagram1}
              />
              <ImagePostsMockupPhones
                alt="Post Instagram"
                src={PostInstagram2}
              />
              <ImagePostsMockupPhonesRightSide
                alt="Post Instagram"
                src={PostInstagram3}
              />
            </SectionImageContainer>
            {isMobile ? (
              <>
                <Paragraph>
                  <Span>Projet plurimédia</Span> réalisé à trois <br />
                  avec Juliette Bouraïma et Carla Monti.
                </Paragraph>{' '}
                <Paragraph>
                  <Span>Création et réalisation d’une marque</Span> <br />
                  avec un <Span>concept novateur</Span> et de sa{' '}
                  <Span>campagne 360.</Span> <br />
                  GRIGRI est un <Span>
                    goûter gourmand à base d’insectes,
                  </Span>{' '}
                  <br />
                  destiné aux <Span>enfants</Span> et qui{' '}
                  <Span>décomplexe</Span> sur la consommation d’insectes.
                </Paragraph>
              </>
            ) : (
              <>
                {' '}
                <Paragraph>
                  <Span>Projet plurimédia</Span> réalisé à trois avec Juliette
                  Bouraïma et Carla Monti.
                </Paragraph>{' '}
                <Paragraph>
                  <Span>Création et réalisation d’une marque </Span>
                  avec un <Span>concept novateur</Span> et de sa{' '}
                  <Span>campagne 360. </Span>
                  GRIGRI est un <Span>
                    goûter gourmand à base d’insectes,
                  </Span>{' '}
                  destiné aux <Span>enfants</Span> et qui{' '}
                  <Span>décomplexe</Span> sur la consommation d’insectes.
                </Paragraph>
              </>
            )}
          </SectionContainer>
        </StyledSectionContainer>
      </StyledSection>

      <StyledSection backgroundColor={colors.beige}>
        <StyledSectionContainer>
          <SectionContainer>
            <CaptionAlignRight>
              Stories par Lucie Ramadan et Juliette Bouraïma
            </CaptionAlignRight>
            <SectionImageContainer>
              <ImageStoriesMockupPhones
                alt="Stories Instagram - Mockup Phones"
                src={StoriesMockupPhones}
              />
            </SectionImageContainer>
          </SectionContainer>
        </StyledSectionContainer>
      </StyledSection>

      <StyledSection backgroundColor={colors.white}>
        <StyledSectionContainer>
          <SectionContainer>
            <Title>YouTube</Title>
            <Caption>
              Vidéo publicitaire en format horizontal et Animation du logo par
              Lucie Ramadan
            </Caption>
            <SectionImageContainer>
              <ImageMockupLaptop alt="Landing page" src={MockupLaptop} />

              <VideoGrigri
                src="https://www.youtube.com/embed/-txObBd-2u0?si=o9zP8UhWRvGvNFiO&controls=1&rel=0"
                allow="autoplay;"
                allowFullScreen
              />
            </SectionImageContainer>
          </SectionContainer>
        </StyledSectionContainer>
      </StyledSection>

      <StyledSection backgroundColor={colors.beige}>
        <StyledSectionContainer>
          <SectionContainer>
            <TitleAlignRight>Site Web</TitleAlignRight>
            <CaptionAlignRight>
              Landing Pages Desktop par Juliette Bouraïma
            </CaptionAlignRight>
            <SectionImageContainer>
              <ImageLandingPage alt="Landing page" src={LandingPage} />
              <ImageWebsiteMockupLaptop
                alt="Site Web - Mockup Laptop"
                src={WebsiteMockupLaptop}
              />
              <ImageWebsiteMockupPhone
                alt="Site Web - Mockup Phone"
                src={WebsiteMockupPhone}
              />

              <CaptionSiteWebMobile>
                Mobile par Juliette Bouraïma
              </CaptionSiteWebMobile>
            </SectionImageContainer>
          </SectionContainer>
        </StyledSectionContainer>
      </StyledSection>

      <StyledSection backgroundColor={colors.white}>
        <StyledSectionContainer>
          <SectionContainer>
            <Title>Packaging</Title>
            <Caption>Boîtes par Carla Monti</Caption>
            <SectionImageContainer>
              <ImagePackaging1 alt="Packaging 1" src={Packaging1} />
              <ImagePackaging2 alt="Packaging 2" src={Packaging2} />

              <ImageCricket1 alt="Grigri 1" src={Grigrillon} />
              <ImageCricket2 alt="Grigri 2" src={Grigrillon} />
            </SectionImageContainer>
          </SectionContainer>
        </StyledSectionContainer>
      </StyledSection>

      <StyledSection backgroundColor={colors.beige}>
        <StyledSectionContainer>
          <SectionContainer>
            <TitleAlignRight>PLV</TitleAlignRight>
            <CaptionAlignRight>PLV par Carla Monti</CaptionAlignRight>
            <SectionImageContainer>
              <ImagePlv alt="PLV" src={PLV} />
            </SectionImageContainer>
          </SectionContainer>
        </StyledSectionContainer>
      </StyledSection>

      <StyledSection backgroundColor={colors.white}>
        <StyledSectionContainer>
          <SectionContainer>
            <Title>Affichages</Title>
            <SectionImageContainer>
              <ImageStep1MockupPoster
                alt="Affichage 1 - Mockup Affiche"
                src={Step1MockupPoster}
              />
              <ImageStep2MockupPoster
                alt="Affichage 2 - Mockup Affiche"
                src={Step2MockupPoster}
              />
            </SectionImageContainer>
            <CaptionCenter>Affiches horizontales par Carla Monti</CaptionCenter>
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
