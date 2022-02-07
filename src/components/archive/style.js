import styled from 'styled-components'

export const ArchiveStyle = styled.div`
  @media (max-width: 850px) {
    width: 92%;
    margin: auto;
  }
  h2 {
    font-size: 39px;
    text-align: center;
    @media (max-width: 1000px) {
      font-size: 29px;
      text-align: center;
    }
  }
  div {
    display: flex;
    align-items: center;
    width: 80%;
    @media (max-width: 850px) {
      width: 100%;
      margin: auto;
    }
    margin: auto;
    @media (max-width: 999px) {
      flex-direction: column;
    }
    img {
      height: 500px;
      width: 500px;
      @media (max-width: 999px) {
        height: 500px;
        width: 500px;
      }
      @media (max-width: 599px) {
        height: 100%;
        width: 100%;
      }
    }

    p {
      font-size: 19px;
      @media (max-width: 850px) {
        font-size: 16px;
      }
    }
  }
`
