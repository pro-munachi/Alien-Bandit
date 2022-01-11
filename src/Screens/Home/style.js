import styled from 'styled-components'

export const HomeStyle = styled.div`
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

  .second {
    width: 80%;
    margin: 150px auto 0 auto;
    position: relative;

    @media (max-width: 850px) {
      width: 95%;
    }

    .background {
      width: 500px;
      height: 400px;
      position: absolute;
      background: black;
      z-index: -1;
      margin-left: auto;
      margin-right: auto;
      left: 0;
      right: 0;
      top: 400px;
      @media (max-width: 1200px) {
        top: 300px;
      }
      @media (max-width: 850px) {
        display: none;
      }
    }

    .second-top {
      display: flex;
      align-items: center;
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

    .second-bottom {
      margin-top: 80px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;

      @media (max-width: 850px) {
        margin-top: 20px;
        width: 100%;
        flex-direction: column;
      }

      .bottom1 {
        width: 45%;
        display: flex;
        justify-content: flex-end;
        @media (max-width: 850px) {
          width: 100%;
        }
        img {
          width: 420px;
          height: 450px;
          margin-right: 30px;
          @media (max-width: 1200px) {
            width: 90%;
            height: 90%;
          }
          @media (max-width: 850px) {
            width: 100%;
            margin: auto;
          }
        }
      }
      .bottom2 {
        width: 45%;
        display: flex;
        @media (max-width: 850px) {
          width: 100%;
        }
        img {
          width: 500px;
          height: 500px;
          margin-left: 30px;
          @media (max-width: 1200px) {
            width: 100%;
            height: 100%;
          }
          @media (max-width: 850px) {
            width: 100%;
            margin: 20px auto;
          }
        }
      }
    }
  }

  .welcome {
    margin-top: 80px;
    background: black;
    width: 100%;
  }

  .archive {
    margin-top: 80px;
    width: 100%;
  }
`
