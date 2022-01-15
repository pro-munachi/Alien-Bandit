import styled from 'styled-components'

export const AboutStyle = styled.div`
  background-color: #232323;
  padding: 0;

  .h2 {
    font-size: 39px;
    text-align: center;
    margin: 60px 0;
    color: #c0262d;
  }

  .image {
    display: flex;
    align-items: center;
    width: 100%;
    background: black;

    @media (max-width: 999px) {
      flex-direction: column;
    }
    .image-text {
      width: 55%;
      text-align: center;
      @media (max-width: 999px) {
        width: 100%;
        margin-top: 90px;
        margin-bottom: 40px;
      }
      h1 {
        font-size: 45px;
        @media (max-width: 699px) {
          width: 80%;
          margin: 20px auto;
          font-size: 30px;
        }
      }

      a {
        color: #c0262d;
        height: 50px;
        width: 250px;
        cursor: pointer;
        button {
          cursor: pointer;
          background: white;
          color: #c0262d;
          height: 60px;
          width: 350px;
          border: none;
          border-radius: 35px;
          font-size: 16px;
        }
      }
    }
    .image-img {
      width: 45%;
      @media (max-width: 999px) {
        width: 65%;
      }
      @media (max-width: 699px) {
        width: 100%;
      }
      img {
        width: 100%;
      }
    }
  }
`
