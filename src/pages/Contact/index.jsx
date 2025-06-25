import { useState } from 'react'
import { styled } from '@mui/material'
import emailjs from 'emailjs-com'

import ScrollToTop from '../../components/ScrollToTop'

import colors from '../../utils/style/colors'

const StyledSection = styled('section')(({ backgroundColor }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: backgroundColor,
  width: '100%',
  overflow: 'hidden',
  padding: '20px 0',
}))

const StyledSectionContainer = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  position: 'relative',
  justifyContent: 'center',
  alignItems: 'center',
  width: '90%',
  margin: '1% auto',
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

const Title = styled('h1')({
  fontFamily: 'El Messiri',
  color: colors.pink,
  marginBottom: '20px',
})

const Form = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  width: '100%',
  maxWidth: '750px',
  alignItems: 'center',
})

const Input = styled('input')({
  width: '100%',
  padding: '16.5px',
  border: 'none',
  borderRadius: '25px',
  fontFamily: 'Afacad',
  fontSize: '16px',
  '&:focus': {
    outline: `1px solid ${colors.pink}`,
  },
})

const Textarea = styled('textarea')({
  width: '100%',
  padding: '16.5px',
  border: 'none',
  minHeight: '250px',
  resize: 'none',
  borderRadius: '25px',
  fontFamily: 'Afacad',
  fontSize: '16px',
  '&:focus': {
    outline: `1px solid ${colors.pink}`,
  },
})

const Text = styled('p')({
  padding: 0,
  margin: 0,
  fontFamily: 'Afacad',
  fontSize: '18px',
  width: '100%',
})

const Button = styled('button')({
  width: 'fit-content',
  marginTop: '1em',
  padding: '10px',
  borderRadius: '25px',
  border: `1px solid ${colors.black}`,
  backgroundColor: colors.white,
  color: colors.black,
  cursor: 'pointer',
  transition: '0.3s ease-in-out',
  '&:hover': {
    backgroundColor: colors.pink,
    border: `1px solid ${colors.pink}`,
    color: colors.white,
  },
})

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    object: 'Prise de contact',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs
      .send(
        'service_l96tsgy',
        'template_lyvn2kg',
        formData,
        'zXSGd7Kslhuz8mnIl'
      )
      .then(() => {
        alert('Message envoyé avec succès !')
        setFormData({ name: '', object: '', email: '', message: '' })
      })
      .catch((error) => {
        alert('Une erreur est survenue. Veuillez réessayer.')
        console.error('EmailJS Error:', error)
      })
  }

  return (
    <StyledSection backgroundColor={colors.beige}>
      <StyledSectionContainer>
        <SectionContainer>
          <Title>Contactez-moi</Title>
          <Form onSubmit={handleSubmit}>
            <Text>Nom Prénom & Société</Text>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <Text>Email</Text>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <Text>Objet</Text>
            <Input
              type="text"
              name="object"
              placeholder="Prise de contact"
              value={formData.object}
              onChange={handleChange}
              required
            ></Input>

            <Text>Message</Text>
            <Textarea
              name="message"
              placeholder="Explications brèves du projet (attentes et objectifs, budget, délais souhaités, etc ... )"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <Button type="submit">Envoyer</Button>
          </Form>
        </SectionContainer>
      </StyledSectionContainer>

      <ScrollToTop />
    </StyledSection>
  )
}
