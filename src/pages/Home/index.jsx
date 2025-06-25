import { styled } from '@mui/material'
import { Link } from 'react-router-dom'
import useEmblaCarousel from 'embla-carousel-react'
import { useEffect, useState, useCallback } from 'react'

import ScrollToTop from '../../components/ScrollToTop'

import { GoChevronLeft, GoChevronRight } from 'react-icons/go'

import colors from '../../utils/style/colors'
import projects from '../../datas/projects'

import '@fontsource/afacad'
import '@fontsource/el-messiri'

const MainContainer = styled('main')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
})

const MainContent = styled('div')({
  display: 'flex',
  width: '100%',
  '@media (max-width: 768px)': {
    flexDirection: 'column',
    alignItems: 'center',
  },
})

const StyledMainContainerWeb = styled('div')({
  display: 'flex',
  alignItems: 'center',
  width: '100vw',
})

const StyledCarouselViewport = styled('div')({
  overflow: 'hidden',
  width: '100vw',
  height: 'fit-content',
})

const StyledCarouselContainer = styled('div')({
  display: 'flex',
  height: 'fit-content',
})

const StyledSlide = styled('div')({
  flex: '0 0 25.68%',
  height: 'fit-content',
})

const StyledLink = styled(Link)({
  textDecoration: 'none',
  '@media (max-width: 768px)': {
    width: '99vw',
    height: '75vw',
    marginBottom: '5vw',
  },
})

const StyledCard = styled('div')({
  flex: '1',
  width: 'clamp(150px, 100%, 22.95vw)',
  height: 'clamp(150px, 100%, 60vh)',
  overflow: 'hidden',
  display: 'flex',
  position: 'relative',
  transition: 'all 0.3s ease',
  backgroundColor: colors.beige,
  '&:hover img': {
    opacity: 0,
  },
  '&:hover .card-text': {
    opacity: 1,
  },
  '@media (max-width: 768px)': {
    maxWidth: '100vw',
    height: '100%',
    width: '100%',
    justifyContent: 'space-between',
  },
})

const StyledImage = styled('img')({
  width: 'clamp(150px, 22.95vw, 100vw)',
  height: 'clamp(400px, 71vh, 1055px)',
  objectFit: 'cover',
  transition: 'opacity 0.3s ease',
  '@media (max-width: 768px)': {
    width: '100%',
    height: '100%',
  },
})

const CardText = styled('div')({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '1vw',
  opacity: 0,
  transition: 'opacity 0.3s ease',
  textAlign: 'center',
  zIndex: 1,
  fontFamily: 'El Messiri, sans-serif',
})

const Title = styled('h3')({
  color: colors.pink,
  fontSize: '1.3vw',
  margin: 0,
  '@media (max-width: 768px)': {
    fontSize: '5vw',
  },
})

const Type = styled('p')({
  color: colors.pink,
  fontSize: '1vw',
  margin: 0,
  '@media (max-width: 768px)': {
    fontSize: '5vw',
  },
})

const Date = styled('p')({
  color: colors.black,
  fontSize: '1vw',
  margin: 0,
  '@media (max-width: 768px)': {
    fontSize: '5vw',
  },
})

const StyledButton = styled('button')({
  position: 'absolute',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  zIndex: 2,
  color: colors.black,
  padding: 0,
  transition: 'all 0.2s ease-in-out',
  '&:hover': {
    transform: 'scale(1.2)',
    color: colors.pink,
  },
})
const StyledButtonLeft = styled(StyledButton)({ left: '3vw' })
const StyledButtonRight = styled(StyledButton)({ right: '3vw' })

function Home() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' })

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <MainContainer>
      <MainContent>
        {isMobile ? (
          projects.map((project, index) => (
            <StyledLink key={index} to={'/lumina/project/' + project.link}>
              <StyledCard>
                <StyledImage
                  src={project.image}
                  alt={`Couverture du projet ${project.name}`}
                />
                <CardText className="card-text">
                  <Title>{project.name}</Title>
                  <Type>
                    {project.type.length > 1
                      ? project.type.join(' - ')
                      : project.type[0]}
                  </Type>
                  <Date>{project.date}</Date>
                </CardText>
              </StyledCard>
            </StyledLink>
          ))
        ) : (
          <StyledMainContainerWeb>
            <StyledButtonLeft onClick={scrollPrev}>
              <GoChevronLeft size={75} />
            </StyledButtonLeft>
            <StyledCarouselViewport ref={emblaRef}>
              <StyledCarouselContainer>
                {projects.map((project, index) => (
                  <StyledSlide key={index}>
                    <StyledLink to={'/lumina/project/' + project.link}>
                      <StyledCard>
                        <StyledImage
                          src={project.image}
                          alt={`Couverture du projet ${project.name}`}
                        />
                        <CardText className="card-text">
                          <Title>{project.name}</Title>
                          <Type>
                            {project.type.length > 1
                              ? project.type.join(' - ')
                              : project.type[0]}
                          </Type>
                          <Date>{project.date}</Date>
                        </CardText>
                      </StyledCard>
                    </StyledLink>
                  </StyledSlide>
                ))}
              </StyledCarouselContainer>
            </StyledCarouselViewport>
            <StyledButtonRight onClick={scrollNext}>
              <GoChevronRight size={75} />
            </StyledButtonRight>
          </StyledMainContainerWeb>
        )}
      </MainContent>

      <ScrollToTop />
    </MainContainer>
  )
}

export default Home
