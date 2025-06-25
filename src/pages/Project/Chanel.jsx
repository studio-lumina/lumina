import { styled } from '@mui/material'

import ScrollToTop from '../../components/ScrollToTop'

import FeteMeresMockupDisplay from '../../assets/projects/chanel/fete_meres-mockup_display.jpg'
import FeteMeresCadrageVisuel from '../../assets/projects/chanel/fete_meres-cadrage_visuel.jpg'
import FeteMeresMockupFSU from '../../assets/projects/chanel/fete_meres-mockup_FSU.png'
import MockupMED from '../../assets/projects/chanel/mockup_med.png'
import MockupGlorifier from '../../assets/projects/chanel/mockup_glorifier.png'
import MockupPlaystation from '../../assets/projects/chanel/mockup_playstation.png'
import MockupN5 from '../../assets/projects/chanel/mockup_n5.png'
import N5CadrageBase from '../../assets/projects/chanel/n5_cadrage_base.jpg'
import MockupMiniTesterStand from '../../assets/projects/chanel/mockup_mini_testerstand.png'
import MockupHotspotLarge from '../../assets/projects/chanel/mockup_hotspot_large.png'
import MockupTesterStand from '../../assets/projects/chanel/mockup_testerstand.png'
import FallWinterCadrageBase from '../../assets/projects/chanel/fall_winter_cadrage_base.jpg'

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
  margin: '2%',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  gap: '10%',
  width: '80%',
  '@media (max-width: 768px)': {
    width: '90%',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 50,
  },
})

const Title = styled('h1')({
  fontFamily: 'El Messiri',
  color: colors.pink,
  width: '100%',
  fontSize: '2vw',
  marginBottom: 0,
  '@media (max-width: 768px)': {
    fontSize: '4vw',
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

const Paragraph = styled('p')({
  width: '90%',
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
  objectFit: 'contain',
  width: '90%',
  '@media (max-width: 768px)': {
    width: '100%',
  },
})

const ImageFeteMeresCadrageVisuel = styled(Image)({
  width: '50%',
  '@media (max-width: 768px)': {
    width: '80%',
  },
})

const ImageFeteMeresMockupFSU = styled(Image)({
  width: '24%',
  '@media (max-width: 768px)': {
    width: '40%',
  },
})

const ImageMockupMED = styled(Image)({
  width: '60%',
  '@media (max-width: 768px)': {
    width: '70%',
  },
})

const ImageMockupGlorifier = styled(Image)({
  width: '50%',
  '@media (max-width: 768px)': {
    width: '70%',
  },
})

const ImageN5 = styled(Image)({
  width: '60%',
})

const ImageN5CadrageBase = styled(Image)({
  width: '45%',
  '@media (max-width: 768px)': {
    width: '80%',
  },
})

const ImageMockupMiniTesterStand = styled(Image)({
  width: '80%',
  '@media (max-width: 768px)': {
    width: '100%',
  },
})

const ImageImageMockupTesterStand = styled(Image)({
  width: '50%',
  '@media (max-width: 768px)': {
    width: '80%',
  },
})

const ImageFallWinterCadrageBase = styled(Image)({
  width: '55%',
  '@media (max-width: 768px)': {
    width: '80%',
  },
})

export default function Chanel() {
  return (
    <>
      <StyledSection backgroundColor={colors.white}>
        <StyledSectionContainer>
          <SectionContainer>
            <Title>PLV</Title>
            <Caption>Campagne Parfum - Fête des Mères 2024</Caption>
            <SectionImageContainer>
              <Image
                alt="Campagne Parfum - Fête des Mères 2024"
                src={FeteMeresMockupDisplay}
              />
            </SectionImageContainer>
            <CaptionAlignRight>
              Cadrages visuels par Lucie Ramadan <br /> Design PLV par David Le
              Mignot
            </CaptionAlignRight>
            <SectionImageContainer>
              <ImageFeteMeresCadrageVisuel
                alt="Campagne Parfum - Fête des Mères 2024"
                src={FeteMeresCadrageVisuel}
              />
              <ImageFeteMeresMockupFSU
                alt="Campagne Parfum - Fête des Mères 2024"
                src={FeteMeresMockupFSU}
              />
            </SectionImageContainer>
            <Paragraph>
              <Span>
                Responsable de la création des cadrages graphiques de la PLV
                évènementielle
              </Span>{' '}
              sur différentes campagnes, <Span>parfum, soin, maquillage</Span> &{' '}
              <Span>conception de documents de productions</Span> des projets et
              de son <Span>suivi.</Span>
            </Paragraph>
          </SectionContainer>
        </StyledSectionContainer>
      </StyledSection>

      <StyledSection backgroundColor={colors.beige}>
        <StyledSectionContainer>
          <SectionContainer>
            <Caption>
              Campagne Maquillage - Summer 2024 <br />
            </Caption>
            <SectionImageContainer>
              <ImageMockupMED alt="Mockup MED" src={MockupMED} />
              <ImageMockupGlorifier
                alt="Mockup Glorifier"
                src={MockupGlorifier}
              />
            </SectionImageContainer>
            <CaptionAlignRight>
              Cadrages visuels et cadrages des bases par Lucie Ramadan
              <br />
              Design PLV par David Martineau
            </CaptionAlignRight>
            <SectionImageContainer>
              <Image alt="Mockup Playstation" src={MockupPlaystation} />
            </SectionImageContainer>
          </SectionContainer>
        </StyledSectionContainer>
      </StyledSection>

      <StyledSection backgroundColor={colors.white}>
        <StyledSectionContainer>
          <SectionContainer>
            <Caption>Campagne Parfum - N5 2024</Caption>
            <SectionImageContainer>
              <ImageN5 alt="Mockup N5" src={MockupN5} />
            </SectionImageContainer>

            <CaptionAlignRight>
              Cadrages visuels et cadrages des bases par Lucie Ramadan
              <br /> Design PLV par Aurélien Altius
            </CaptionAlignRight>
            <SectionImageContainer>
              <ImageN5CadrageBase alt="N5 Cadrage Base" src={N5CadrageBase} />
              <ImageMockupMiniTesterStand
                alt="Mockup Mini Tester Stand"
                src={MockupMiniTesterStand}
              />
            </SectionImageContainer>
          </SectionContainer>
        </StyledSectionContainer>
      </StyledSection>

      <StyledSection backgroundColor={colors.beige}>
        <StyledSectionContainer>
          <SectionContainer>
            <Caption>Campagne Maquillage - Fall Winter 2024</Caption>
            <SectionImageContainer>
              <Image alt="Mockup Hotspot Large" src={MockupHotspotLarge} />
            </SectionImageContainer>

            <CaptionAlignRight>
              Cadrages visuels et cadrages des bases par Lucie Ramadan et Mona
              Langenhan <br />
              Design PLV par Mona Langenhan et David Le Mignot
            </CaptionAlignRight>
            <SectionImageContainer>
              <ImageImageMockupTesterStand
                alt="Mockup Tester Stand"
                src={MockupTesterStand}
              />
              <ImageFallWinterCadrageBase
                alt="Fall Winter Cadrage Base"
                src={FallWinterCadrageBase}
              />
            </SectionImageContainer>
          </SectionContainer>
        </StyledSectionContainer>
      </StyledSection>

      <ScrollToTop />
    </>
  )
}
