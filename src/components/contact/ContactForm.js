import styled from 'styled-components';
import { size } from '../../settings';

const ContactForm = () => {
  return (
    <Container>
      <div className="desc">
        <h1>Contact us</h1>
        <p>
          {' '}
          Ready to take it to the next level? Let’s talk about your project or
          idea and find out how we can help your business grow. If you are
          looking for unique digital experiences that’s relatable to your users,
          drop us a line.{' '}
        </p>
      </div>
      <form>
        <div>
          <input type="text" id="name" placeholder=" " />
          <label htmlFor="name">name</label>
        </div>
        <div>
          <input type="email" id="mail" placeholder=" " />
          <label htmlFor="mail">email</label>
        </div>
        <div>
          <input type="number" id="phone" placeholder=" " />
          <label htmlFor="phone">phone</label>
        </div>
        <div>
          <input type="textarea" id="message" placeholder=" " />
          <label htmlFor="message">message</label>
        </div>
      </form>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--color-peach);
  gap: 20px;
  padding: 2em;
  color: white;
  text-align: center;

  h1,
  p {
    max-width: 500px;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    div {
      position: relative;
      border-bottom: solid white 1px;
      width: 100%;
      height: 3em;

      label {
        position: absolute;
        left: 0;
        top: 50%;
      }
      input {
        background: transparent;
        outline: none;
        border: none;
        color: white;
        height: 100%;
        width: 100%;
        &[type='number'] {
          appearance: textfield;
        }
        & + label {
          transition: 0.3s;
        }
        &:not(:valid) {
          border: red 2px dotted;
        }
        &:focus {
          border-bottom: solid 2px;
        }
        &:focus,
        &:not(:placeholder-shown) {
          & + label {
            font-size: x-small;
            color: lightgrey;
            top: 0;
            transition: 0.3s;
          }
        }
      }
    }
  }

  @media (min-width: 500px) {
    margin: 0 max(2em, calc((100vw - var(--max-width)) / 2));
    border-radius: var(--border-radius);
    text-align: left;
  }
  @media (min-width: ${size.small}) {
    flex-direction: row;
    align-items: center;
    padding-left: 7%;
    padding-right: 7%;
    p {
      font-size: small;
      max-width: 300px;
    }
    .desc,
    form {
      flex: 1;
    }
  }
`;
export default ContactForm;
