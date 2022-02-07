import styled from 'styled-components'

export const WelcomeStyle = styled.div`
  background: black;
  padding: 30px 0;
  @media (max-width: 850px) {
    width: 92%;
    margin: auto;
  }
  .container {
    width: 80%;
    margin: auto;
    @media (max-width: 850px) {
      width: 100%;
    }

    .text {
      @media (max-width: 850px) {
        width: 100%;
      }
      h2 {
        font-size: 39px;
        text-align: center;
        @media (max-width: 1000px) {
          font-size: 29px;
          text-align: center;
        }
      }
      p {
        font-size: 19px;
        @media (max-width: 850px) {
          font-size: 16px;
        }
      }
    }

    .welcome-image {
      display: flex;
      justify-content: space-between;
      @media (max-width: 999px) {
        flex-direction: column;
      }
      div {
        width: 200px;
        @media (max-width: 999px) {
          width: 80%;
          margin: auto;
          text-align: center;
        }
        img {
          width: 50px;
          height: 50px;
        }
        p {
          width: 70%;
          @media (max-width: 999px) {
            width: 100%;
          }
          @media (max-width: 850px) {
            font-size: 16px;
          }
        }
      }
    }
  }
`
