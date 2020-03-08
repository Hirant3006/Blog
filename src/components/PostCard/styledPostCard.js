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
      font-family: beVietNam, serif;
      font-size: 45px;
      font-weight: 400;
      width: fit-content;
      color: black;
    }
    &-content {
      font-size: 16px;
      line-height: 24px;
      letter-spacing: -0.01em;
      font-family: beVietNam;
      -webkit-font-smoothing: antialiased;
    }
    &-date {
      text-align: center;
      font-size: 13px;
      line-height: 30px;
      letter-spacing: 0.08em;
    }
    p {
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
