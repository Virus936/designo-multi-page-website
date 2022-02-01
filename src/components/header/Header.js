import {useState} from 'react'
import styled from 'styled-components'
import logo from './logo-dark.png'
import hamMenu from './ham-menu.png'
import {size} from '../../settings'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  const [menuActive, setMenuActive] = useState(false)
  const handleMenuActivation = (bool) => {
    const bodyStyle = document.querySelector('body').style
    if (bool) {
        bodyStyle.height = 'auto'
        bodyStyle.overflowY = 'hidden'
    }else{
        bodyStyle.overflowY = 'visible'
    }
    
    setMenuActive(bool)
  }
  const handleNavigate = goto => {
    handleMenuActivation(false) ; navigate(goto)
  }
  return <Container>
    <div onClick={()=>handleNavigate('/') } className='logo'><img src={logo} alt="" /></div>
    <div onClick={()=>handleMenuActivation(!menuActive)} className="hamburger-toggle"> <img src={hamMenu} alt="" /> </div>
    <nav className={menuActive?'active':''}>
      <div><span onClick={()=> handleNavigate('/about')}>our company</span></div>
      <div><span onClick={()=> handleNavigate('/location')}>location</span></div>
      <div><span onClick={()=> handleNavigate('/contact')}>contact</span></div>
    </nav>
    </Container>
}

const Container = styled.header`
  display:flex;
  background-color:var(--menu-color);
  height:var(--height-menu-s);
  padding:0 calc(max(2em, ( 100vw - var(--max-width) )/2 ));
  width:100vw;
  align-items:center;
  .logo{
    cursor:pointer;
    img{
      width:8em;

    }
  }
  @media(min-width:${size.medium}){
    height:var(--height-menu-m);
    .logo{
      img{
        width:12em;
      }
    }
  }
  .hamburger-toggle{
    margin-left:auto;
    cursor:pointer;
    img{
      width:20px;
    }
    @media(min-width:${size.small}){
      display:none;

    }

  }
  nav{
    position:absolute;
    top:var(--height-menu-s);
    bottom:0;
    right:0;
    left:0;
    width:100%;
    background-color:rgba(20,20,20,.8);
    transition:var(--trans-menu);
    transform:translateX(100%);
    z-index:1;
    >div{
      background:#1c1b1d;
      text-transform:uppercase;
      padding :  0 2em;
      padding-top:2.5em;
      font-size:1.3em;
      &:last-of-type{
        padding-bottom:2.5em;
      }
      color:white;
      span{
        cursor:pointer;
        letter-spacing:.3em;
      }
    }

    &.active{
      
      transform:translateX(0%);
      transition:var(--trans-menu);
    }

    @media(min-width:${size.small}){
      position:relative;
      display:flex;
      top:0;
      transform:translate(0%,0%);
      background:transparent;
      width:auto;
      margin-left:auto;
      gap:30px;
      >div{
        font-size:1em;
        background:transparent;
        text-transform:uppercase;
        padding-top:0;
        padding :  0 0;
        font-size:1em;
        &:last-of-type{
          padding-bottom:0em;
        }
        color:#1c1b1d;
      }
    }
  }
`

export default Header
