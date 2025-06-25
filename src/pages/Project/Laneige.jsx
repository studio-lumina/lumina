import { styled } from '@mui/material'

import ScrollToTop from '../../components/ScrollToTop'

import MockupLaptop from '../../assets/projects/laneige/mockup_laptop.png'
import MockupPhone from '../../assets/projects/laneige/mockup_phone.png'
import MockupDisplay from '../../assets/projects/laneige/mockup_display.png'
import InstaGridMockupIphone from '../../assets/projects/laneige/grille-insta-mockup-iphone.png'
import Caroussel2MockupIphone from '../../assets/projects/laneige/caroussel-2-insta-mockup.png'
import Caroussel1MockupIphone from '../../assets/projects/laneige/caroussel-1-insta-mockup.png'
import Story1MockupIphone from '../../assets/projects/laneige/instagram-story-1-mockup-iphone.png'
import MiniInstagramVideo from '../../assets/projects/laneige/video-verticale-mini-instagram-story-2.mp4'
import Story3MockupIphone from '../../assets/projects/laneige/instagram-story-3-mockup-iphone.png'
import Story4MockupIphone from '../../assets/projects/laneige/instagram-story-4-mockup-iphone.png'
import WebBannerDesktop from '../../assets/projects/laneige/web_banner-desktop.jpg'
import WebBannerMockupLaptop from '../../assets/projects/laneige/web_banner-mockup_laptop.png'
import WebBannerMockupPhone from '../../assets/projects/laneige/web_banner-mockup_phone.png'
import LandingPageDesktop from '../../assets/projects/laneige/landing-page-desktop.jpg'
import VideoLandingPage from '../../assets/projects/laneige/animation-landing-page.mp4'
import LandingPageMockupPhones from '../../assets/projects/laneige/mockup-iphone-landing-page-mobile.png'
import MiniatureVideoYoutube from '../../assets/projects/laneige/miniature-video-yt.jpg'
import MiniatureVideoYoutubeMockup from '../../assets/projects/laneige/mockup-mac-miniature-vidéo-yt.png'
import VideoLaneigeVerticale from '../../assets/projects/laneige/video-verticale.mp4'

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
  alignItems: 'center',
  width: '80%',
  gap: '5%',
  '@media (max-width: 768px)': {
    width: '90%',
  },
})

const SectionImageContainerColumn = styled(SectionImageContainer)({
  flexDirection: 'column',
})

const Caption = styled('p')({
  width: '100%',
  fontFamily: 'Afacad',
  padding: 0,
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

const Paragraph = styled('p')({
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

const ImageInstaGridMockupIphone = styled('img')({
  display: 'block',
  position: 'relative',
  width: '40%',
  '@media (max-width: 768px)': {
    width: '70%',
  },
})

const Paragraph1 = styled(Paragraph)({
  width: '60%',
  textAlign: 'center',
  fontFamily: 'Afacad',
  fontSize: '1.6vw',
  '@media (max-width: 768px)': {
    fontSize: '3vw',
  },
})

const ImageCarousselMockupIphone = styled('img')({
  display: 'block',
  position: 'relative',
  width: '100%',
  '@media (max-width: 768px)': {
    width: '120%',
  },
})

const ImageStory1MockupIphone = styled('img')({
  display: 'block',
  position: 'relative',
  width: '20%',
  height: '100%',
})

const ImageStory2MockupIphone = styled(ImageStory1MockupIphone)({
  width: '30%',
})

const VideoMiniInstagram = styled('video')({
  position: 'absolute',
  objectFit: 'fill',
  top: '12.1%',
  left: '20%',
  width: '25.4%',
  height: '75.8%',
  pointerEvents: 'none',
})

const ImageWebBannerDesktop = styled('img')({
  display: 'block',
  position: 'relative',
  width: '60%',
  left: '25%',
})
const ImageWebBannerMockupLaptop = styled('img')({
  display: 'block',
  position: 'relative',
  width: '65%',
  left: '-20%',
  top: '-2vw',
})
const ImageWebBannerMockupPhone = styled('img')({
  display: 'block',
  position: 'absolute',
  width: '35%',
  left: '41%',
  top: '13vw',
})

const CaptionS4 = styled('p')({
  position: 'absolute',
  right: 0,
  bottom: '2%',
  zIndex: 2,
  fontFamily: 'Afacad',
  padding: 0,
  fontSize: '1.5vw',
  '@media (max-width: 768px)': {
    fontSize: '2.5vw',
  },
})

const ImageLandingPageDesktop = styled('img')({
  display: 'block',
  position: 'relative',
  width: '40%',
  left: '-25%',
  top: '2vw',
})

const ImageMockupLaptop = styled('img')({
  display: 'block',
  position: 'absolute',
  width: '60%',
  top: '5%',
  left: '45%',
})

const LandingPageVideo = styled('video')({
  position: 'absolute',
  objectFit: 'fill',
  top: '7.2%',
  left: '51.6%',
  width: '46.6%',
  height: '31.4%',
  pointerEvents: 'none',
  clipPath: 'polygon(0.5% 0%, 99.1% 0%, 100% 100%, 0% 100%)',
  '@media (max-width: 768px)': {
    top: '7%',
    left: '51.5%',
    width: '46.7%',
    height: '31.7%',
  },
})

const ImageLandingPageMockupPhones = styled('img')({
  display: 'block',
  position: 'absolute',
  width: '60%',
  top: '55%',
  left: '50%',
})

const CaptionS5 = styled('p')({
  position: 'absolute',
  right: 0,
  top: '57%',
  zIndex: 2,
  fontFamily: 'Afacad',
  fontSize: '1.5vw',
  '@media (max-width: 768px)': {
    top: '58%',
    right: '2%',
    fontSize: '2.5vw',
  },
})

const ImageMiniatureVideoYoutube = styled('img')({
  display: 'block',
  position: 'relative',
  width: '30%',
  left: '-25%',
  paddingTop: '5%',
  '@media (max-width: 768px)': {
    position: 'relative',
    width: '60%',
    left: '0%',
  },
})

const ImageMiniatureVideoYoutubeMockup = styled('img')({
  display: 'block',
  position: 'relative',
  width: '35%',
  left: '-35%',
  marginTop: '-5%',
  '@media (max-width: 768px)': {
    position: 'relative',
    width: '60%',
    left: '0%',
  },
})

const ImageMockupLaptopVideoLaneigeHorizontale = styled('img')({
  display: 'block',
  position: 'absolute',
  width: '65%',
  right: '-10%',
  '@media (max-width: 768px)': {
    marginTop: '2em',
    marginBottom: '2em',
    width: '80%',
    position: 'relative',
    right: '0%',
  },
})

const InsertVideoLaneigeHorizontale = styled('iframe')({
  position: 'absolute',
  objectFit: 'fill',
  border: 'none',
  top: '9%',
  left: '52%',
  width: '51%',
  height: '66%',
  clipPath: 'polygon(1.1% 0%, 98.5% 0.9%, 99.2% 98.9%, 0.4% 98.9%)',
  '@media (max-width: 768px)': {
    top: '61.8%',
    left: '17.9%',
    width: '64.2%',
    height: '25.4%',
    clipPath: 'polygon(2.2% 2%, 97.5% 2%, 98.1% 97.3%, 1.5% 97.3%)',
  },
})

const ImageMockupDisplay = styled('img')({
  display: 'block',
  width: '40%',
  '@media (max-width: 768px)': {
    width: '70%',
  },
})

const InsertVideoLaneigeVerticale = styled('video')({
  position: 'absolute',
  objectFit: 'fill',
  top: '8.3%',
  left: '33.9%',
  width: '32%',
  height: '70.4%',
  pointerEvents: 'none',
  clipPath: 'polygon(0% 2.7%, 98% 0.2%, 99.4% 99.4%, 0.2% 100%)',
  '@media (max-width: 768px)': {
    top: '8.6%',
    left: '21.7%',
    width: '56.1%',
    height: '70.7%',
    clipPath: 'polygon(0% 2.7%, 98% 0%, 99.4% 99.4%, 0.2% 100%)',
  },
})

export default function Laneige() {
  return (
    <>
      <StyledSection backgroundColor={colors.white}>
        <StyledSectionContainer>
          <SectionContainer>
            <Title>Instagram</Title>
            <Caption>Feed par Lucie Ramadan</Caption>
            <SectionImageContainer>
              <ImageInstaGridMockupIphone
                src={InstaGridMockupIphone}
                alt="Feed Instagram"
              />
            </SectionImageContainer>
            <Paragraph1>
              <Span>
                Création et réalisation de supports de communication digitaux
              </Span>{' '}
              pour la campagne de la nouvelle collection de sérum teinté pour
              les lèvres, Glaze Graze, de Laneige.
            </Paragraph1>
          </SectionContainer>
        </StyledSectionContainer>
      </StyledSection>

      <StyledSection backgroundColor={colors.beige}>
        <StyledSectionContainer>
          <SectionContainer>
            <CaptionAlignRight>
              Posts caroussels par Lucie Ramadan
            </CaptionAlignRight>
            <SectionImageContainer>
              <ImageCarousselMockupIphone
                src={Caroussel2MockupIphone}
                alt="Posts carroussels 1"
              />
            </SectionImageContainer>
            <SectionImageContainer>
              <ImageCarousselMockupIphone
                src={Caroussel1MockupIphone}
                alt="Posts carroussels 2"
              />
            </SectionImageContainer>
          </SectionContainer>
        </StyledSectionContainer>
      </StyledSection>

      <StyledSection backgroundColor={colors.white}>
        <StyledSectionContainer>
          <SectionContainer>
            <CaptionAlignRight>Stories par Lucie Ramadan</CaptionAlignRight>
            <SectionImageContainer>
              <ImageStory1MockupIphone src={Story1MockupIphone} alt="Story 1" />
              <ImageStory2MockupIphone src={MockupPhone} alt="Story 2" />
              <VideoMiniInstagram
                src={MiniInstagramVideo}
                autoPlay
                loop
                playsInline
                controls
                muted
              />
              <ImageStory2MockupIphone src={Story3MockupIphone} alt="Story 3" />
              <ImageStory1MockupIphone src={Story4MockupIphone} alt="Story 4" />
            </SectionImageContainer>
          </SectionContainer>
        </StyledSectionContainer>
      </StyledSection>

      <StyledSection backgroundColor={colors.beige}>
        <StyledSectionContainer>
          <SectionContainer>
            <Title>Bannières Web</Title>
            <Caption>Desktop - par Lucie Ramadan</Caption>
            <SectionImageContainerColumn>
              <ImageWebBannerDesktop
                src={WebBannerDesktop}
                alt="Bannière Web"
              />
              <ImageWebBannerMockupLaptop
                src={WebBannerMockupLaptop}
                alt="Bannière Web - Mockup Laptop"
              />
              <ImageWebBannerMockupPhone
                src={WebBannerMockupPhone}
                alt="Bannière Web - Mockup Phone"
              />
            </SectionImageContainerColumn>
            <CaptionS4>Mobile - par Lucie Ramadan</CaptionS4>
          </SectionContainer>
        </StyledSectionContainer>
      </StyledSection>

      <StyledSection backgroundColor={colors.white}>
        <StyledSectionContainer>
          <SectionContainer>
            <TitleAlignRight>Landing Page</TitleAlignRight>
            <CaptionAlignRight>
              Desktop - Prototypage par Lucie Ramadan
            </CaptionAlignRight>
            <SectionImageContainerColumn>
              <ImageLandingPageDesktop
                src={LandingPageDesktop}
                alt="Landing Page"
              />
              <ImageMockupLaptop src={MockupLaptop} alt="Mockup Laptop" />
              <LandingPageVideo
                src={VideoLandingPage}
                autoPlay
                loop
                playsInline
                controls
                muted
              />
              <ImageLandingPageMockupPhones
                src={LandingPageMockupPhones}
                alt="Landing Page - Mockup Phones"
              />
            </SectionImageContainerColumn>
            <CaptionS5>Mobile - par Lucie Ramadan</CaptionS5>
          </SectionContainer>
        </StyledSectionContainer>
      </StyledSection>

      <StyledSection backgroundColor={colors.beige}>
        <StyledSectionContainer>
          <SectionContainer>
            <Title>Motion Design</Title>
            <Caption>
              Miniature YouTube & Vidéo publicitaire en format horizontal par
              Lucie Ramadan
            </Caption>

            <SectionImageContainerColumn>
              <ImageMiniatureVideoYoutube
                src={MiniatureVideoYoutube}
                alt="Miniature YouTube"
              />

              <ImageMiniatureVideoYoutubeMockup
                src={MiniatureVideoYoutubeMockup}
                alt="Mockup Miniature Video Youtube"
              />

              <ImageMockupLaptopVideoLaneigeHorizontale
                src={MockupLaptop}
                alt="Mockup Laptop"
              />

              <InsertVideoLaneigeHorizontale
                src="https://www.youtube.com/embed/qVP28HdHozo?si=TL_uQRTDFLnAFeY7E&controls=1&rel=0"
                allow="autoplay;"
                allowFullScreen
              />
            </SectionImageContainerColumn>

            <SectionImageContainerColumn>
              <ImageMockupDisplay src={MockupDisplay} alt="Mockup Display" />
              <InsertVideoLaneigeVerticale
                src={VideoLaneigeVerticale}
                autoPlay
                loop
                playsInline
                controls
                muted
              />
              <Paragraph>
                Vidéo publicitaire en format vertical par Lucie Ramadan
              </Paragraph>
            </SectionImageContainerColumn>
          </SectionContainer>
        </StyledSectionContainer>
      </StyledSection>

      <ScrollToTop />
    </>
  )
}
