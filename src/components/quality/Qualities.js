import styled from 'styled-components'
import QualityItem from './QualityItem.js'

import {size} from '../../settings'

const qualities = [
  {
    title:'passionate',
    desc:'Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions. ',
    img:'illustration-passionate.svg',
  },
  {
    title:'resourceful',
    desc:' Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs. ',
    img:'illustration-resourceful.svg',
  },
  {
    title:'friendly',
    desc:'We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide. ',
    img:'illustration-friendly.svg',
  },
]
const Qualities = () => {
  return <Container>
      {qualities?.map((quality, _index) => <QualityItem key={_index} {...quality} />)}
    </Container>
}

const Container = styled.section`
  display:flex;
  flex-direction:column;
  align-items:center;
  gap:20px;
  margin:50px max(2em, calc((100vw - var(--max-width))/2));
  @media(min-width:${size.medium}){
    flex-direction:row;
    align-items:flex-start;
  }
`

export default Qualities

