import styled from "styled-components";

export default styled.div`
  header {
    font-family: "beVietNam", serif;
    margin: 0 auto;
    text-align: center;
    .mobile-navbar {
      display: none;
      &-dropdown {
        display: none;
      }
    }
    .logo {
      font-size: 6.5em;
      letter-spacing: 0.08em;
      color: black;
    }
    @media only screen and (max-width: 800px) {
      .mobile-navbar {
        font-family: "beVietNam", serif;
        display: flex !important;
        justify-content: space-between;
        align-items: center;
        margin: 0;
        a {
          color: #333;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.08em;
          display: block;
          margin: 18px 0 10px;
          padding: 3px;
          text-decoration: none;
          cursor: pointer;
          -webkit-transition: color 0.2s ease;
          transition: color 0.2s ease;
        }
        a:hover {
          color: #e13d3d;
        }
        &-dropdown {
          height: 0px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          a {
            margin: 5px 0 5px 5px;
            color: #333;
            font-size: 14px;
            font-weight: 700;
            letter-spacing: 0.08em;
            display: block;
            text-decoration: none;
            cursor: pointer;
            -webkit-transition: color 0.2s ease;
            transition: color 0.2s ease;
          }
          a:hover {
            color: #e13d3d;
          }
        }
      }
      .logo {
        font-size: 9vw !important;
      }
      .navbar {
        display: none !important;

        a:hover {
          color: #e13d3d;
        }
      }
    }
    .navbar {
      font-family: "beVietNam", serif;
      display: flex;
      justify-content: space-between;
      align-items: center;
      a {
        color: #333;
        font-size: 14px;
        font-weight: 700;
        letter-spacing: 0.08em;
        display: block;
        margin: 18px 0 10px;
        padding: 3px;
        text-decoration: none;
        cursor: pointer;
        -webkit-transition: color 0.2s ease;
        transition: color 0.2s ease;
      }
      a:hover {
        color: #e13d3d;
      }
    }
    .border {
      border-bottom: 0.25px solid #e13d3d;
    }
  }
`;
