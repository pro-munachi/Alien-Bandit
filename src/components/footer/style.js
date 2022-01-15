import styled from 'styled-components'

export const FooterStyle = styled.footer`
  color: white;
  padding: 20px 0;
  width: 90%;
  margin: auto;
  background: black;

  .footer-container {
    display: flex;
    margin: 30px 0;
    border-bottom: 1px solid white;
    padding-bottom: 15px;
    align-items: center;
    @media (max-width: 650px) {
      flex-direction: column;
    }
    img {
      height: 200px;
      width: 200px;
      @media (max-width: 650px) {
        margin: auto;
      }
    }
    .footer-bottom {
      display: flex;
      margin: 0px 40px 29px 40px;
      .footer-icons {
        margin: 15px 20px 0 20px;
        a {
          color: white;
        }
      }
    }
  }

  .copy {
    margin: 30px 0;
    text-align: center;
  }
`
