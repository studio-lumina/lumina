import { styled } from '@mui/material'

import ScrollToTop from '../../components/ScrollToTop'

import MockupLaptop from '../../assets/projects/qiriness/mockup_laptop.png'
import MockupPhone from '../../assets/projects/qiriness/mockup_phone.png'
import MockupDisplay from '../../assets/projects/qiriness/mockup_display.png'
import SensiZenMockupLaptop from '../../assets/projects/qiriness/sensi_zen-mockup_laptop.png'
import SensiZenMockupPhone from '../../assets/projects/qiriness/sensi_zen-mockup_phone.png'
import SensiZenLandingPage from '../../assets/projects/qiriness/sensi_zen-landing_page.jpg'
import CaresseExceptionLandingPage from '../../assets/projects/qiriness/caresse_exception-landing_page.jpg'
import CaresseExceptionMockupLaptop from '../../assets/projects/qiriness/caresse_exception-mockup_laptop.png'
import RituelSpaLandingPage from '../../assets/projects/qiriness/rituel_spa-landing_page.jpg'
import RituelSpaVideo from '../../assets/projects/qiriness/rituel_spa-video.mp4'
import SensiZenWebBanner from '../../assets/projects/qiriness/sensi_zen-web_banner.jpg'
import CaresseExceptionWebBanner from '../../assets/projects/qiriness/caresse_exception-web_banner.jpg'
import CaresseSourceEauWebBanner from '../../assets/projects/qiriness/caresse_source_eau-web_banner.jpg'
import CaresseSourceEauRicheWebBanner from '../../assets/projects/qiriness/caresse_source_eau_riche-web_banner.jpg'
import SensiZenWebBannerMockupLaptop from '../../assets/projects/qiriness/sensi_zen-web_banner-mockup_laptop.png'
import MarrionnaudTabletBannerMockupTablet from '../../assets/projects/qiriness/marionnaud-web_banner-mockup_tablet.png'
import FeteMeresVideo from '../../assets/projects/qiriness/fete_meres-video.mp4'
import SensiZenVideo from '../../assets/projects/qiriness/sensi_zen-video.mp4'
import CaresseSourceEauRicheVideo from '../../assets/projects/qiriness/caresse_source_eau_riche-video.mp4'
import FeteMeresCaresseSourceEauPackaging from '../../assets/projects/qiriness/fete_meres-caresse_source_eau-packaging.png'
import FeteMeresCaresseTempsSublimeLightPackaging from '../../assets/projects/qiriness/fete_meres-caresse_temps_sublime_light-packaging.png'
import QirinessMockupMagazine from '../../assets/projects/qiriness/qiriness-mockup_magazine.png'

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

const SectionImageContainerLandingPage = styled(SectionImageContainer)({
  '@media (max-width: 768px)': {
    marginTop: '10vw',
  },
})

const Caption = styled('p')({
  width: '100%',
  fontSize: '1.5vw',
  fontFamily: 'Afacad',
  '@media (max-width: 768px)': {
    fontSize: '2.5vw',
  },
})

const CaptionAlignRight = styled(Caption)({
  textAlign: 'right',
  fontSize: '1.5vw',

  '@media (max-width: 768px)': {
    textAlign: 'center',
    fontSize: '2.5vw',
  },
})

const CaptionTopLeft = styled('p')({
  fontFamily: 'Afacad',
  fontSize: '1.5vw',
  position: 'absolute',
  left: 0,
  top: '7%',
  zIndex: 2,
  '@media (max-width: 768px)': {
    fontSize: '2.5vw',
  },
})

const CaptionTopRight = styled('p')({
  position: 'absolute',
  fontFamily: 'Afacad',
  fontSize: '1.5vw',
  right: 0,
  top: '7%',
  zIndex: 2,
  '@media (max-width: 768px)': {
    fontSize: '2.5vw',
  },
})

const CaptionBottompRight = styled('p')({
  position: 'absolute',
  fontFamily: 'Afacad',
  fontSize: '1.5vw',
  right: 0,
  bottom: '-5%',
  zIndex: 2,
  '@media (max-width: 768px)': {
    fontSize: '2.5vw',
    bottom: '-6%',
  },
})

const CaptionBottompLeft = styled('p')({
  position: 'absolute',
  fontFamily: 'Afacad',
  fontSize: '1.5vw',
  left: 0,
  bottom: '-5%',
  zIndex: 2,
  '@media (max-width: 768px)': {
    fontSize: '2.5vw',
    bottom: '-6%',
  },
})

const CaptionTopRightBis = styled(CaptionTopRight)({
  top: '1%',
  '@media (max-width: 768px)': {
    top: '0%',
  },
})

const CaptionTopLeftBis = styled(CaptionTopLeft)({
  top: '1%',
  '@media (max-width: 768px)': {
    top: '0%',
  },
})

const Paragraph = styled('p')({
  position: 'absolute',
  width: '40%',
  left: '1%',
  bottom: '5%',
  zIndex: 2,
  textAlign: 'center',
  fontFamily: 'Afacad',
  fontSize: '1.6vw',
  '@media (max-width: 768px)': {
    width: '90%',
    position: 'relative',
    left: 0,
    fontSize: '3vw',
    bottom: '-7%',
  },
})

const Span = styled('span')({
  color: colors.pink,
})

const SectionTitle = styled('h1')({
  fontSize: '2vw',
  fontFamily: 'El Messiri',
  color: colors.pink,
  width: '100%',
  marginBottom: 0,
  '@media (max-width: 768px)': {
    textAlign: 'center',
    fontSize: '4vw',
  },
})

const SectionTitleRight = styled(SectionTitle)({
  textAlign: 'right',
})

const ImageSensiZenMockupLaptop = styled('img')({
  position: 'absolute',
  width: '65%',
  left: '-6%',
  top: '5%',
  zIndex: 2,
})

const ImageSensiZenLandingPage = styled('img')({
  width: '28%',
  left: '10%',
  display: 'block',
  position: 'relative',
})

const ImageSensiZenMockupPhone = styled('img')({
  position: 'absolute',
  width: '28%',
  right: '1%',
  top: '8%',
  zIndex: 2,
})

const ImageCaresseExceptionLandingPage = styled('img')({
  width: '40%',
  left: '-20%',
  paddingTop: '7%',
  display: 'block',
  position: 'relative',
})

const ImageCaresseExceptionMockupLaptop = styled('img')({
  position: 'absolute',
  width: '70%',
  right: '-15%',
  top: '9%',
})

const ImageRituelSpaLandingPage = styled('img')({
  width: '40%',
  right: '-20%',
  paddingTop: '7%',
  display: 'block',
  position: 'relative',
})

const ImageMockupLaptop = styled('img')({
  position: 'absolute',
})

const ImageMockupPhone = styled('img')({
  position: 'absolute',
})

const ImageMockupDisplay = styled('img')({
  position: 'absolute',
})

const ImageRituelSpaMockupLaptop = styled(ImageMockupLaptop)({
  width: '75%',
  top: '20%',
  left: '-15%',
  '@media (max-width: 768px)': {
    left: '-10%',
  },
})

const VideoRituelSpa = styled('video')({
  position: 'absolute',
  objectFit: 'fill',
  top: '21%',
  left: '-7%',
  width: '59%',
  height: '21%',
  pointerEvents: 'none',
  clipPath: 'polygon(1.1% 2.6%, 98.3% 2.2%, 98.9% 99.6%, 0.7% 99.8%)',
  '@media (max-width: 768px)': {
    left: '-1.5%',
    width: '58.5%',
  },
})

const SectionBannerContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '1em',
  width: '80%',
  margin: '1em auto',
  '@media (max-width: 768px)': {
    paddingTop: '2em',
  },
})

const ImageWebBanner = styled('img')({
  width: '35%',
  left: '20%',
  marginLeft: '15%',
  '@media (max-width: 768px)': {
    width: '70%',
  },
})

const ImageSensiZenWebBannerMockupLaptop = styled('img')({
  position: 'absolute',
  width: '35%',
  left: '45%',
  top: '45%',
  zIndex: 2,
  '@media (max-width: 768px)': {
    width: '50%',
    left: '50%',
    top: '50%',
  },
})

const ImageMarrionnaudTabletBannerMockupTablet = styled('img')({
  width: '100%',
  top: '9%',
  '@media (max-width: 768px)': {
    width: '120%',
  },
})

const ImageMotionDesignFeteMeresMockupPhone = styled(ImageMockupPhone)({
  position: 'relative',
  display: 'block',
  width: '25%',
  paddingBottom: '10%',
  '@media (max-width: 768px)': {
    width: '50%',
  },
})

const ImageMotionSensiZenDesignMockupPhone = styled(ImageMockupPhone)({
  position: 'relative',
  display: 'block',
  width: '25%',
  paddingTop: '10%',
  '@media (max-width: 768px)': {
    width: '50%',
  },
})

const VideoMotionDesignFeteMeresMockupPhone = styled('video')({
  position: 'absolute',
  objectFit: 'cover',
  top: '9%',
  left: '27%',
  width: '21.3%',
  height: '66%',
  clipPath: 'polygon(0.2% 0%, 99.7% 0%, 99.7% 100%, 0.2% 100%)',
  pointerEvents: 'none',
  '@media (max-width: 768px)': {
    width: '42.5%',
    height: '73%',
    left: '4%',
  },
})

const VideoMotionDesignSensiZenMockupPhone = styled('video')({
  position: 'absolute',
  objectFit: 'cover',
  top: '25.5%',
  right: '26.9%',
  width: '21%',
  height: '65%',
  pointerEvents: 'none',
  clipPath: 'polygon(0.2% 0%, 99.7% 0%, 99.7% 100%, 0.2% 100%)',
  '@media (max-width: 768px)': {
    width: '42.5%',
    height: '73%',
    right: '3.5%',
    top: '18%',
  },
})

const ImageCaresseExceptionVideoMockupLaptop = styled(ImageMockupLaptop)({
  position: 'relative',
  display: 'block',
  width: '100%',
  paddingBottom: '10%',
})

const VideoCaresseExceptionMockupLaptop = styled('iframe')({
  position: 'absolute',
  objectFit: 'fill',
  border: 'none',
  top: '4%',
  left: '10.8%',
  width: '78%',
  height: '63%',
  clipPath: 'polygon(0.9% 0.5%, 99.1% 0.5%, 99.7% 99.8%, 0.4% 99.6%)',
})

const ImageCaresseSourceEauRicheVideoMockupDisplay = styled(ImageMockupDisplay)(
  {
    position: 'relative',
    display: 'block',
    width: '50%',
  }
)

const VideoCaresseSourceEauRicheVideoMockupDisplay = styled('video')({
  position: 'absolute',
  objectFit: 'fill',
  top: '9.5%',
  left: '28.9%',
  width: '40.7%',
  height: '79.4%',
  pointerEvents: 'none',
  clipPath: 'polygon(2.2% 2.9%, 98.7% 0.1%, 100% 99.4%, 2.6% 100%)',
})

const ImageFeteMeresCaresseSourceEauPackaging = styled('img')({
  position: 'absolute',
  top: '1vw',
  width: '70%',
  left: '-12%',
  zIndex: 2,
  '@media (max-width: 768px)': {
    width: '60%',
    top: '2vw',
    left: '-5%',
  },
})

const ImageFeteMeresCaresseTempsSublimeLightPackaging = styled('img')({
  position: 'relative',
  top: '-6vw',
  width: '70%',
  right: '-27%',
  '@media (max-width: 768px)': {
    width: '60%',
    top: '-2vw',
    right: '-20%',
  },
})

const ImageQirinessMagazineMockup = styled('img')({
  width: '125%',
})

export default function Qiriness() {
  return (
    <>
      <StyledSection backgroundColor={colors.white}>
        <StyledSectionContainer>
          <SectionContainer>
            <SectionTitle>Landing Page</SectionTitle>
            <CaptionTopLeft>Desktop - par Lucie Ramadan</CaptionTopLeft>
            <CaptionTopRight>Mobile - par Lucie Ramadan</CaptionTopRight>
            <SectionImageContainerLandingPage>
              <ImageSensiZenMockupLaptop
                src={SensiZenMockupLaptop}
                alt="Mockup Laptop - Landing page Sensi zen"
              />
              <ImageSensiZenLandingPage
                src={SensiZenLandingPage}
                alt="Landing page Sensi zen"
              />
              <ImageSensiZenMockupPhone
                src={SensiZenMockupPhone}
                alt="Mockup Phone - Landing page Sensi zen"
              />
            </SectionImageContainerLandingPage>
            <Paragraph>
              <Span>Création et réalisation de supports de communication</Span>{' '}
              pour le marketing, le développement produits et la communication
              permettant ainsi d’augmenter la <Span>visibilité</Span> de
              Qiriness.
            </Paragraph>
          </SectionContainer>
        </StyledSectionContainer>
      </StyledSection>

      <StyledSection backgroundColor={colors.beige}>
        <StyledSectionContainer>
          <SectionContainer>
            <CaptionTopRightBis>Desktop - par Lucie Ramadan</CaptionTopRightBis>
            <SectionImageContainer>
              <ImageCaresseExceptionLandingPage
                src={CaresseExceptionLandingPage}
                alt="Landing page Caresse d'Exception"
              />

              <ImageCaresseExceptionMockupLaptop
                src={CaresseExceptionMockupLaptop}
                alt="Mockup Laptop - Landing page Caresse d'Exception"
              />
            </SectionImageContainer>
          </SectionContainer>
        </StyledSectionContainer>
      </StyledSection>

      <StyledSection backgroundColor={colors.white}>
        <StyledSectionContainer>
          <SectionContainer>
            <CaptionTopLeftBis>Desktop - par Lucie Ramadan</CaptionTopLeftBis>
            <SectionImageContainer>
              <ImageRituelSpaLandingPage
                src={RituelSpaLandingPage}
                alt="Landing page Rituel SPA"
              />

              <ImageRituelSpaMockupLaptop
                src={MockupLaptop}
                alt="Mockup Laptop"
              />

              <VideoRituelSpa
                src={RituelSpaVideo}
                autoPlay
                loop
                muted
                playsInline
              />
            </SectionImageContainer>
          </SectionContainer>
        </StyledSectionContainer>
      </StyledSection>

      <StyledSection backgroundColor={colors.beige}>
        <StyledSectionContainer>
          <SectionContainer>
            <SectionTitle>Bannières Web</SectionTitle>
            <CaptionTopLeft>Desktop - par Lucie Ramadan</CaptionTopLeft>
            <SectionBannerContainer>
              <ImageWebBanner
                src={SensiZenWebBanner}
                alt="Bannière Web - Sensi zen"
              />

              <ImageWebBanner
                src={CaresseExceptionWebBanner}
                alt="Bannière Web - Caresse d'Exception"
              />

              <ImageWebBanner
                src={CaresseSourceEauWebBanner}
                alt="Bannière Web - Caresse Source d'Eau"
              />

              <ImageWebBanner
                src={CaresseSourceEauRicheWebBanner}
                alt="Bannière Web - Caresse Source d'Eau Riche"
              />

              <ImageSensiZenWebBannerMockupLaptop
                src={SensiZenWebBannerMockupLaptop}
                alt="Mockup Laptop"
              />
            </SectionBannerContainer>
          </SectionContainer>
        </StyledSectionContainer>
      </StyledSection>

      <StyledSection backgroundColor={colors.white}>
        <StyledSectionContainer>
          <SectionContainer>
            <CaptionTopLeft>Tablette - par Lucie Ramadan</CaptionTopLeft>
            <CaptionTopRight>Desktop - par Lucie Ramadan</CaptionTopRight>
            <CaptionBottompRight>
              Mobile - par Lucie Ramadan
            </CaptionBottompRight>
            <SectionImageContainer>
              <ImageMarrionnaudTabletBannerMockupTablet
                src={MarrionnaudTabletBannerMockupTablet}
                alt="Marionnaud - Qiriness - Mockup Tablette"
              />
            </SectionImageContainer>
          </SectionContainer>
        </StyledSectionContainer>
      </StyledSection>

      <StyledSection backgroundColor={colors.beige}>
        <StyledSectionContainer>
          <SectionContainer>
            <SectionTitleRight>Motion Design</SectionTitleRight>
            <CaptionTopRight>Storie GIF par Lucie Ramadan</CaptionTopRight>
            <CaptionBottompLeft>
              Storie vidéo par Lucie Ramadan
            </CaptionBottompLeft>
            <SectionImageContainer>
              <ImageMotionDesignFeteMeresMockupPhone
                alt="Mockup Phone"
                src={MockupPhone}
              />

              <VideoMotionDesignFeteMeresMockupPhone
                src={SensiZenVideo}
                autoPlay
                loop
                muted
                playsInline
              />

              <ImageMotionSensiZenDesignMockupPhone
                alt="Mockup Phone"
                src={MockupPhone}
              />

              <VideoMotionDesignSensiZenMockupPhone
                src={FeteMeresVideo}
                autoPlay
                loop
                muted
                playsInline
              />
            </SectionImageContainer>
          </SectionContainer>
        </StyledSectionContainer>
      </StyledSection>

      <StyledSection backgroundColor={colors.white}>
        <StyledSectionContainer>
          <SectionContainer>
            <CaptionAlignRight>
              Vidéo publicitaire en format horizontal par Lucie Ramadan
            </CaptionAlignRight>
            <SectionImageContainer>
              <ImageCaresseExceptionVideoMockupLaptop
                alt="Mockup Laptop"
                src={MockupLaptop}
              />

              <VideoCaresseExceptionMockupLaptop
                src="https://www.youtube.com/embed/ANO6OvRI6So?si=aFaBnbcD4SIUQVlr&controls=1&rel=0"
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
            <Caption>
              Vidéo publicitaire en format vertical par Lucie Ramadan
            </Caption>
            <SectionImageContainer>
              <ImageCaresseSourceEauRicheVideoMockupDisplay
                alt="Mockup Vitrine"
                src={MockupDisplay}
              />

              <VideoCaresseSourceEauRicheVideoMockupDisplay
                src={CaresseSourceEauRicheVideo}
                autoPlay
                loop
                muted
                playsInline
              />
            </SectionImageContainer>
          </SectionContainer>
        </StyledSectionContainer>
      </StyledSection>

      <StyledSection backgroundColor={colors.white}>
        <StyledSectionContainer>
          <SectionContainer>
            <SectionTitle>Packaging</SectionTitle>
            <Caption>Coffrets par Lucie Ramadan</Caption>
            <SectionImageContainer>
              <ImageFeteMeresCaresseSourceEauPackaging
                alt="Packaging Fête des mères - Caresse Source d'Eau"
                src={FeteMeresCaresseSourceEauPackaging}
              />

              <ImageFeteMeresCaresseTempsSublimeLightPackaging
                alt="Packaging Fête des mères - Caresse Temps Sublime Light"
                src={FeteMeresCaresseTempsSublimeLightPackaging}
              />
            </SectionImageContainer>
          </SectionContainer>
        </StyledSectionContainer>
      </StyledSection>

      <StyledSection backgroundColor={colors.beige}>
        <StyledSectionContainer>
          <SectionContainer>
            <SectionTitle>Mise en Page</SectionTitle>
            <Caption>Mini Magazine par Lucie Ramadan</Caption>
            <SectionImageContainer>
              <ImageQirinessMagazineMockup
                src={QirinessMockupMagazine}
                alt="Qiriness - Mockup Magazine"
              />
            </SectionImageContainer>
          </SectionContainer>
        </StyledSectionContainer>
      </StyledSection>

      <ScrollToTop />
    </>
  )
}
