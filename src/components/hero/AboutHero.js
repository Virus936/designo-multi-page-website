import styled from 'styled-components';
import { size } from '../../settings';

const srcAbout = `${document.location.origin}/asset/about/`;
const AboutHero = () => {
  const img = 'image-about-hero.jpg';
  return (
    <Container>
      <img
        src={`${srcAbout}${img}`}
        srcSet={`${srcAbout}mobile/${img} 400w,
              ${srcAbout}tablet/${img} 900w, 
              ${srcAbout}desktop/${img} 1900w, `}
        alt=""
      />
      <div>
        <h1>About us</h1>
        <p>
          Founded in 2010, we are a creative agency that produces lasting
          results for our clients. We’ve partnered with many startups,
          corporations, and nonprofits alike to craft designs that make real
          impact. We’re always looking forward to creating brands, products, and
          digital experiences that connect with our clients' audiences.
        </p>
      </div>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  background: url(${srcAbout}svg/bg-pattern-small-circle.svg) var(--color-peach);
  background-repeat: no-repeat;
  background-size: 600px;
  background-position: bottom left;
  overflow: hidden;
  color: white;
  img {
    display: block;
    width: 100%;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 5%;
    p {
      margin-top: 2em;
    }
  }

  @media (min-width: ${size.small}) {
    margin: 0 calc(max(2em, (100vw - var(--max-width))/2));
    border-radius: var(--border-radius);
  }
  @media (min-width: ${size.medium}) {
    flex-direction: row;
    img {
      order: 2;
      width: 400px;
    }
  }
`;
export default AboutHero;
