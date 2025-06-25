import { styled } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

import colors from '../../utils/style/colors'

import ModeEtSport from './ModeEtSport'
import Qiriness from './Qiriness'
import Chanel from './Chanel'
import Scentception from './Scentception'
import Grigri from './Grigri'
import Laneige from './Laneige'

import '@fontsource/afacad'
import '@fontsource/el-messiri'
import projects from '../../datas/projects'

const StyledMain = styled('main')({
  display: 'flex',
  justifyContent: 'center',
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
    marginBottom: '1em',
  },
})

const StyledBox = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '100%',
  '@media (max-width: 768px)': {
    display: 'flex',
    flexDirection: 'column',
  },
})

const StyledBoxContainer = styled('div')({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  '@media (max-width: 768px)': {
    textAlign: 'left',
  },
})

const StyledBoxInsiderContainer = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'baseline',
  justifyContent: 'right',
  '@media (max-width: 768px)': {
    justifyContent: 'left',
  },
})

const ProjectTitle = styled('h1')({
  color: colors.pink,
  fontSize: '2.2vw',
  fontFamily: 'El Messiri, sans-sherif',
  '@media (max-width: 768px)': {
    fontSize: '6vw',
  },
})

const ProjectTitleType = styled('p')({
  color: colors.pink,
  fontSize: '2vw',
  fontWeight: 'bold',
  margin: 0,
  fontFamily: 'El Messiri, sans-sherif',
  '@media (max-width: 768px)': {
    fontSize: '5vw',
  },
})

const ProjectDate = styled('p')({
  color: colors.black,
  fontSize: '1.8vw',
  fontWeight: 'normal',
  fontFamily: 'Afacad, sans-sherif',
  '@media (max-width: 768px)': {
    fontSize: '4vw',
  },
})

const ProjectDetailType = styled('p')({
  color: colors.pink,
  fontSize: '1.5vw',
  fontFamily: 'Afacad, sans-sherif',
  margin: '0',
  paddingRight: '0.5vw',
  '@media (max-width: 768px)': {
    paddingRight: '1vw',
    fontSize: '5vw',
  },
})

const ProjectDetailDescription = styled('p')({
  color: colors.black,
  fontSize: '1.2vw',
  fontWeight: 'normal',
  fontFamily: 'Afacad, sans-sherif',
  margin: 0,
  padding: 0,
  '@media (max-width: 768px)': {
    fontSize: '2.5vw',
  },
})

function Project() {
  const url = useLocation()
  const navigate = useNavigate()
  const projectUrl = url.pathname.split('/')[3]
  const project = projects.find((projet) => projectUrl === projet.link)
  useEffect(() => {
    if (!project) {
      navigate('*')
    }
  }, [project, navigate])

  if (!project) return null

  return (
    <StyledMain>
      <StyledSection backgroundColor={colors.beige}>
        <StyledSectionContainer>
          <StyledBox>
            <StyledBoxContainer>
              <ProjectTitle>{project.name}</ProjectTitle>
              <ProjectTitleType>
                {project.type.length > 1
                  ? project.type.join(' - ')
                  : project.type[0]}
              </ProjectTitleType>
              <ProjectDate>{project.date}</ProjectDate>
            </StyledBoxContainer>
            <StyledBoxContainer>
              {project.details.map((type, index) => (
                <StyledBoxInsiderContainer>
                  <ProjectDetailType>{type.type}</ProjectDetailType>
                  <ProjectDetailDescription>
                    (
                    {type.descriptions.length > 1
                      ? type.descriptions.join(', ')
                      : type.descriptions[0]}
                    )
                  </ProjectDetailDescription>
                </StyledBoxInsiderContainer>
              ))}
            </StyledBoxContainer>
          </StyledBox>
        </StyledSectionContainer>
      </StyledSection>

      {(() => {
        switch (project.name) {
          case 'Mode & Sport':
            return <ModeEtSport />
          case 'Qiriness':
            return <Qiriness />
          case 'Chanel':
            return <Chanel />
          case 'Scentception':
            return <Scentception />
          case 'GRIGRI':
            return <Grigri />
          case 'Laneige':
            return <Laneige />
          default:
            return null
        }
      })()}
    </StyledMain>
  )
}

export default Project
