import styled from 'styled-components'

export const HierachyStyle = styled.div`
  background-color: #232323;
  padding: 0;

  .slider {
    width: 500px;
    margin: auto;
    @media (max-width: 650px) {
      width: 100%;
    }
  }

  .bands {
    font-size: 39px;
    text-align: center;
    margin: 60px 0;
    color: #c0262d;
  }

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

  .top {
    margin: 150px auto 0 auto;
    text-align: center;
    width: 80%;

    @media (max-width: 850px) {
      width: 95%;
    }

    p {
      font-size: 20px;
      text-align: left;

      @media (max-width: 850px) {
        font-size: 16px;
      }
      span {
        color: #c0262d;
      }
    }
  }

  .second {
    width: 80%;
    margin: 100px auto 0 auto;

    @media (max-width: 850px) {
      width: 95%;
    }

    .second-top {
      display: flex;
      align-items: center;
      width: 100%;
      margin: 20px 0;
      @media (max-width: 850px) {
        flex-direction: column-reverse;
      }

      .top1 {
        width: 50%;
        display: flex;
        justify-content: flex-end;
        @media (max-width: 850px) {
          width: 100%;
        }
        img {
          width: 500px;
          height: 500px;
          margin-right: 30px;
          @media (max-width: 850px) {
            width: 100%;
            height: 100%;
            margin-right: 0;
          }
          @media (max-width: 1200px) {
            width: 100%;
            height: 100%;
          }
        }
      }
      .top2 {
        width: 50%;
        @media (max-width: 850px) {
          width: 100%;
        }
        h2 {
          width: 80%;
          font-size: 39px;
          @media (max-width: 1000px) {
            font-size: 29px;
            text-align: center;
          }
          @media (max-width: 850px) {
            width: 100%;
          }
        }
        p {
          font-size: 20px;
          @media (max-width: 850px) {
            font-size: 16px;
          }
        }
      }
    }
  }
`
