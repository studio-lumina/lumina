import { styled } from '@mui/material'

import { HiDownload } from 'react-icons/hi'

import ScrollToTop from '../../components/ScrollToTop'

import colors from '../../utils/style/colors'

import PhotoProfile from '../../assets/profile/profile_photo.jpg'
import CV from '../../assets/profile/CV_Lucie_Ramadan-Lumina.pdf'
import LogoChanel from '../../assets/brands/logo_chanel.png'
import LogoQiriness from '../../assets/brands/logo_qiriness.png'
import LogoMichelin from '../../assets/brands/logo_michelin.png'
import SunFlower from '../../assets/graphic_identity/sunflower_pattern.png'

import '@fontsource/afacad'
import '@fontsource/el-messiri'

const StyledMain = styled('main')({
  display: 'flex',
  justifyContent: 'center',
})

const StyledMainContainer = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'column',
  '@media (max-width: 768px)': {
    justifyContent: 'center',
    width: '100vw',
    textAlign: 'center',
  },
})

const StyledSection = styled('section')(({ backgroundColor }) => ({
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: backgroundColor,
}))

const StyledSectionContainer = styled('div')({
  width: '90%',
  display: 'flex',
  flexDirection: 'row',
  '@media (max-width: 768px)': {
    display: 'flex',
    flexDirection: 'column',
  },
})

const StyledBoxContainer = styled('div')({
  width: '100%',
  alignContent: 'center',
  justifyItems: 'center',
})

const SectionImageContainer = styled('div')({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  width: '100%',
})

const StyledBoxContainerBrand = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  width: '100%',
  justifyContent: 'space-around',
})

const StyledImageLogo = styled('img')({
  width: '15vw',
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'space-between',
  '@media (max-width: 768px)': {
    maxWidth: '100px',
  },
})

const StyledImage = styled('img')({
  height: '90%',
  width: '90%',
  objectFit: 'cover',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '1em auto',
})

const StyledImageSunFlower = styled('img')({
  position: 'absolute',
  width: '50%',
  left: '-15%',
  top: '-5%',
  transform: 'rotate(5deg)',
})

const StyledTitle = styled('h1')({
  display: 'flex',
  fontFamily: 'El Messiri, sans-sherif',
  justifyContent: 'center',
  color: colors.pink,
  padding: '1vh',
  fontSize: '2vw',
  '@media (max-width: 768px)': {
    textAlign: 'center',
    fontSize: '4vw',
  },
})

const StyledParagraph = styled('p')({
  width: '100%',
  fontFamily: 'Afacad, sans-sherif',
  color: colors.black,
  padding: '1vh',
  fontSize: '1.6vw',
  textAlign: 'justify',
  '@media (max-width: 768px)': {
    fontSize: '3vw',
  },
})

const StyledParagraph2 = styled(StyledParagraph)({
  width: '100%',
  paddingRight: '9%',
  textAlign: 'justify',
  '@media (max-width: 768px)': {
    paddingRight: 0,
  },
})

const StyledParagraphBis = styled('p')({
  width: '65%',
  fontFamily: 'Afacad, sans-sherif',
  textAlign: 'center',
  color: colors.black,
  padding: '1vh',
  fontSize: '1.6vw',
  '@media (max-width: 768px)': {
    fontSize: '3vw',
    width: '90%',
  },
})

const StyledSpan = styled('span')({
  color: colors.pink,
})

const StyledA = styled('a')({
  color: colors.white,
  border: '2px solid',
  backgroundColor: colors.pink,
  borderRadius: '50%',
  padding: '10px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '50px',
  height: '50px',
  transition: 'transform 0.3s ease',
  margin: '1em auto',
  '&:hover': {
    transform: 'scale(1.2)',
  },
})

function About() {
  function downloadAndOpen(e) {
    e.preventDefault()
    const link = document.createElement('a')
    link.href = CV
    link.setAttribute('download', 'CV_Lucie_Ramadan-Lumina.pdf')
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    window.open(CV, '_blank')
  }

  const brandLogo = [
    { name: 'chanel', image: LogoChanel },
    { name: 'qiriness', image: LogoQiriness },
    { name: 'michelin', image: LogoMichelin },
  ]

  return (
    <StyledMain>
      <StyledMainContainer>
        <StyledSection backgroundColor={colors.beige}>
          <StyledSectionContainer>
            <StyledBoxContainer>
              <StyledTitle>Qu'est-ce que Lumina ?</StyledTitle>
              <StyledParagraph>
                Lumina est un{' '}
                <StyledSpan>
                  studio 360 de design graphique indépendant.{' '}
                </StyledSpan>
                Spécialisé dans le <StyledSpan>Brand Design,</StyledSpan> il se
                consacre à la création visuelle en respectant rigoureusement la{' '}
                <StyledSpan>stratégie de marque.</StyledSpan> Le studio offre
                une <StyledSpan>Direction Artistique</StyledSpan> cohérente, en
                concevant des identités visuelles déclinables sur divers
                supports, qu'ils soient imprimés, numériques ou vidéo.
              </StyledParagraph>
            </StyledBoxContainer>
          </StyledSectionContainer>
        </StyledSection>
        <StyledSection backgroundColor={colors.white}>
          <StyledSectionContainer>
            <StyledBoxContainer>
              <StyledTitle>Qui y a-t-il derrière Lumina ?</StyledTitle>
              <StyledParagraph2>
                Je suis{' '}
                <StyledSpan>
                  Lucie Ramadan, designer graphique et Directrice Artistique
                  junior
                </StyledSpan>{' '}
                animée par le brand design. Diplomée d’un{' '}
                <StyledSpan>Master</StyledSpan> en Direction Artistique
                Numérique en Brand Content à{' '}
                <StyledSpan>LISAA Paris</StyledSpan>, j’ai eu l’opportunité de
                perfectionner mon travail, mon art au sein d’une grande maison
                tel que <StyledSpan>Chanel</StyledSpan>.
              </StyledParagraph2>
              <StyledParagraph2>
                Aujourd’hui, l’envie de me réinventer et de relever de nouveaux
                défis m’a conduite à me lancer en{' '}
                <StyledSpan>freelance</StyledSpan>, avec mon studio Lumina,
                niché près de Paris. À travers Lumina, je mets tout mon cœur et
                mon savoir-faire au service de mes clients, pour créer des
                univers visuels uniques et inspirants, qui répondent à leurs
                attentes les plus précieuses.
              </StyledParagraph2>
            </StyledBoxContainer>

            <SectionImageContainer>
              <StyledImage src={PhotoProfile} alt="Profil" />
              <StyledImageSunFlower src={SunFlower} alt="Sun Flower" />
            </SectionImageContainer>
          </StyledSectionContainer>
        </StyledSection>
        <StyledSection backgroundColor={colors.beige}>
          <StyledSectionContainer>
            <StyledBoxContainer>
              <StyledTitle>Pourquoi me choisir ?</StyledTitle>
              <StyledParagraphBis>
                J’accompagne mes clients dans la création d’univers{' '}
                <StyledSpan>
                  visuels cohérents, en phase avec leur identité et leurs
                  objectifs.
                </StyledSpan>{' '}
                <br />
                J’ai eu l’opportunité de collaborer avec plusieurs{' '}
                <StyledSpan>entreprises renommées,</StyledSpan> notamment dans
                l’univers de la <StyledSpan>beauté,</StyledSpan> du cosmétique
                au parfum, en passant par le maquillage. <br />
                Forte de cette <StyledSpan>
                  expertise sectorielle,
                </StyledSpan>{' '}
                je propose des <StyledSpan>prestations 360 </StyledSpan>
                orientées digital & vidéo avec des contenus engageants et
                inspirants.
              </StyledParagraphBis>
              <StyledParagraphBis>
                Chaque projet est guidé par une{' '}
                <StyledSpan>
                  communication transparente, une écoute attentive et
                  bienveillante
                </StyledSpan>{' '}
                pour vous emporter dans une expérience où créativité et
                stratégie se rencontrent !
              </StyledParagraphBis>
            </StyledBoxContainer>
          </StyledSectionContainer>
        </StyledSection>
        <StyledSection backgroundColor={colors.white}>
          <StyledSectionContainer>
            <StyledBoxContainer>
              <StyledTitle>Mon CV</StyledTitle>
              <StyledA
                href={CV}
                target="_blank"
                rel="noopener noreferrer"
                onClick={downloadAndOpen}
              >
                <HiDownload size={50} />
              </StyledA>
            </StyledBoxContainer>
          </StyledSectionContainer>
        </StyledSection>
        <StyledSection backgroundColor={colors.beige}>
          <StyledSectionContainer>
            <StyledBoxContainer>
              <StyledTitle>Ils me font confiance</StyledTitle>
              <StyledBoxContainerBrand>
                {brandLogo.map((logo) => (
                  <StyledImageLogo src={logo.image} alt={logo.name} />
                ))}
              </StyledBoxContainerBrand>
            </StyledBoxContainer>
          </StyledSectionContainer>
        </StyledSection>
      </StyledMainContainer>

      <ScrollToTop />
    </StyledMain>
  )
}

export default About
