import {useState, useEffect} from 'react'
import styled from 'styled-components'
import logo from './logo-dark.png'
import hamMenu from './ham-menu.png'
import {size} from '../../settings'

const Header = () => {
  const [menuActive, setMenuActive] = useState(false)
  const handleMenuActivation = () => {
    if (menuActive) {
        document.querySelector('body').style.overflowY = 'visible'
    }else{

        document.querySelector('body').style.height = 'auto'
        document.querySelector('body').style.overflowY = 'hidden'
    }
    
    setMenuActive(!menuActive)
  }
  return <Container>
    <div className='logo'><img src={logo} alt="" /></div>
    <div onClick={handleMenuActivation} className="hamburger-toggle"> <img src={hamMenu} alt="" /> </div>
    <nav className={menuActive&&'active'}>
        <div><a href="">our company</a></div>
        <div><a href="">location</a></div>
        <div><a href="">contact</a></div>
    </nav>
    </Container>
}

const Container = styled.header`
  display:flex;
  background-color:var(--menu-color);
  height:var(--height-menu-s);
  padding:0 calc(max(2em, ( 100vw - 800px )/2 ));
  width:100vw;
  align-items:center;
  .logo{
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
      cursor:pointer;
      &:last-of-type{
        padding-bottom:2.5em;
      }
      a{
        color:white;
        text-decoration:none;
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
        cursor:pointer;
        &:last-of-type{
          padding-bottom:0em;
        }
        a{
          color:#1c1b1d;
          text-decoration:none;
          cursor:pointer;
          letter-spacing:.2em;
        }

      }
    }
  }
`

export default Header
