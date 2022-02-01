import styled from 'styled-components'
import logo from './logo-light.png'
import Contact from './Contact'

import {size} from '../../settings'
import {  useNavigate } from "react-router-dom";

const socials = [
  "facebook",
  "instagram",
  "pinterest",
  "twitter",
  "youtube",
]
const Social = ({social}) => {
  return <a href={`https://${social}.com`}>
    <img src={`${document.location.origin}/asset/socialmedia/icon-${social}.svg`} alt="" />
    </a>
}

const Footer = () => {
  const navidate = useNavigate()

  return <Container>
      <Contact 
        title="Let's talk about your project"
        content="Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow."
    /> 

      <div className="foot-part">
        <img className="logo-light" src={logo} alt="" />
        <nav>
          <div onClick={() => navidate('/about')}>our company</div>
          <div>location</div>
          <div>contact</div>
        </nav>
      </div>
      <div className="foot-part">
        <div className="foot-elt">
          <h1>designo central office</h1>
          <p>3886 wellington street</p>
          <p>Tronto, Ontario M9C 3J5</p>
        </div>
        <div className="foot-elt">
          <h1>contact us (central office)</h1>
          <strong>P : +1 253-863-8967</strong>
          <strong>M : contact@designo.co</strong>
        </div>
        
        <div className="social">
          {socials.map((social, _index) => <Social key={social} social={social} />)}
        </div>
      </div>

    </Container>
}




const Container = styled.div`
  display:flex;
  flex-direction:column;
  margin-top:10em;
  background-color:#1c1b1d;

  
  .foot-part{
    display:flex;
    margin:2em calc(max(2em, ( 100vw - var(--max-width) )/2 ));
    flex-direction:column;
    align-items:center;
    gap:22px;
    nav{
      display:flex;
      flex-direction:column;
      align-items:center;

      gap:12px;
      text-transform:uppercase;
      color:white;
      div{
        cursor:pointer;
        font-size:1.2em;
      }
    }

    .foot-elt{
      text-align:center;
      color:grey;
      h1{
        font-size:1em;
      }
      p{
        font-size:.8em;
      }
      strong{
        display:inline-block;
      }
    }
    @media(min-width:${size.medium}){
      flex-direction:row;
      justify-content:space-between;
      align-items:flex-end;
      nav{
        flex-direction:row;
      }
    }
  }


  .logo-light{
    width:220px;
    cursor:pointer;
  }
  
  .social{
    display:flex;
    gap:22px;
  }


`

export default Footer
