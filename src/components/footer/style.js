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
    @media (max-width: 650px) {
      flex-direction: column;
    }
    img {
      width: 300px;
      height: 50px;
      @media (max-width: 650px) {
        margin: auto;
      }
    }
    .footer-bottom {
      display: flex;
      margin: 0 40px;
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
