import styled from "styled-components";

export default styled.div`
  .card {
    display: flex;
    flex-direction: column;
    letter-spacing: 0.03em;
    &-cat {
      color: #d03b39;
      opacity: 0.7;
      text-align: center;
    }
    &-title {
      text-align: center;
      align-self: center;
      font-family: BeVietNam, serif;
      font-size: 45px;
      font-weight: 400;
      width: fit-content;
      color: black;
      text-align: center;
    }
    &-content {
      font-size: 16px;
      line-height: 24px;
      letter-spacing: -0.01em;
      font-family: BeVietNam, sans-serif;
      -webkit-font-smoothing: antialiased;
      &-img {
        width: 70%;
        margin: 20px auto;
        border-bottom: none !important;
        div {
          font-size: 12px;
          color: #4e4c48;
          margin-top: -5px;
          text-align: center;
        }
      }
    }
    &-date {
      text-align: center;
      font-size: 13px;
      line-height: 30px;
      letter-spacing: 0.08em;
    }
  }

  @media only screen and (max-width: 800px) {
    .card-content-img {
      width: 100%;
    }
    .card-title {
      line-height: 40px;
      font-size: 30px;
    }
  }
`;
