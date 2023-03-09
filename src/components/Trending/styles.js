import styled from "styled-components"

export const StyleTrending = styled.div`
  margin-top: 100px;
  margin-right: 100px;
  background-color: #171717;
  width: 301px;
  height: 406px;
  border-radius: 16px;
  > h1{
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 700;
    font-size: 27px;
    line-height: 40px;
    color: #FFFFFF;
    margin: 9px 0 12px 16px;
  }
  > div{
    border: 1px solid #484848;
    margin-bottom: 12px;
  }
  > h2{
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 19px;
    line-height: 23px;
    letter-spacing: 0.05em;
    color: #FFFFFF;
    margin: 0 0 10px 16px;
  }
  @media (max-width: 750px) {
    display: none;
  }
`