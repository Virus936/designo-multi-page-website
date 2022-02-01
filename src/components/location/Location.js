import styled from 'styled-components'

const sourc = document.location.origin
const Location = ({link, img, title}) => {
  return <Container>
    <img src={`${sourc}/${img}`} alt="" />
    <h1>{title}</h1>
    </Container>
}
const Container = styled.article`
  display:flex;
  flex-direction:column;
  align-items:center;
`

export default Location
