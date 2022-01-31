import styled from 'styled-components'

export const MapStyle = styled.div`
  width: 80%;
  margin: auto;

  @media (max-width: 850px) {
    width: 92%;
    margin: auto;
  }

  .map-top {
    margin: 20px 0;
    h2 {
      font-size: 38px;
      text-align: center;
    }
    p {
      @media (max-width: 850px) {
        font-size: 16px;
      }
    }
  }

  .map-bottom {
    div {
      display: flex;

      h3 {
        width: 10%;
        color: #c0262d;
      }
      p {
        width: 90%;
      }
    }
  }

  .map-bottom1 {
  }
`
