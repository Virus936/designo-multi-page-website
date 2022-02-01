import styled from 'styled-components'

import Hero from '../components/hero/Hero'
import Skills from '../components/skill/Skills'
import Qualities from '../components/quality/Qualities'



const HomePage = () => {
  return <Container>

    <Hero
      title="Award-winning custom designs and digital branding solutions"
      desc="With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services"
      img='./asset/png/image-hero-phone.png'
    />

    <Skills />
    <Qualities />

    </Container>
}
const Container = styled.main`
  overflow:hidden;
`

export default HomePage
