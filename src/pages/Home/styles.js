import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background-color: #333333;
  padding-top: 92px;
  min-width: 100vw;
  min-height: 100vh;
  font-family: 'Lato';
`;

export const Content = styled.div`
  width: 611px;
  height: 100%;
  margin: 0px auto;
  @media (max-width: 460px) {
    width: 100%;
  }
  > h1 {
    font-family: 'Oswald';
    font-weight: 700;
    font-size: 2.05rem;
    line-height: 49px;
    color: #ffffff;
    margin: 0px 19px 19px;
  }
`;
