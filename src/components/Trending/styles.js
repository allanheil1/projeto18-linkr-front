import styled from "styled-components"

export const StyleTrending = styled.div`
  margin-top: 100px;
  margin-right: 100px;
  background-color: #171717;
  width: 301px;
  height: 406px;
  border-radius: 16px;
  box-sizing: border-box;
  padding-left: 16px;
  > h1{
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 700;
    font-size: 27px;
    line-height: 40px;
    color: #FFFFFF;
    margin: 9px 0 12px 0;
  }
  h3{
    margin-bottom: 10px;
  }
  > div{
    border: 1px solid #484848;
    margin-bottom: 12px;
  }

  @media (max-width: 750px) {
    display: none;
  }
`

export const trendingStyle = {
  cursor: 'pointer',
  fontFamily: 'Lato',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '19px',
  letterSpacing: '0.05em',
  color: '#FFFFFF',
}