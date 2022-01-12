import styled from 'styled-components'

export const BuyStyle = styled.div`
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

  .slider {
    margin-top: 80px;
  }

  .buy-but {
    width: 90%;
    padding: 20px 0;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    margin-top: 80px;
    border: 2px solid #c0262d;
  }

  .buy-but h2 {
    color: white;
    text-align: center;
    width: 30%;
  }
  .buy-but p {
    color: white;
    width: 30%;
  }
  .buy-but a {
    background-color: black;
    border: none;
    width: 30%;
    cursor: pointer;
    text-decoration: none;
    color: #c0262d;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 889px) {
    .buy-but {
      flex-direction: column;
    }

    .buy-but h2 {
      width: 90%;
      margin: 10px auto;
    }
    .buy-but p {
      width: 90%;
      margin: 10px auto;
    }
    .buy-but a {
      width: 60%;
      margin: 10px auto;
      height: 70px;
      padding: 0 20px;
      text-align: center;
    }
  }

  .footer {
    background: black;
  }
`
