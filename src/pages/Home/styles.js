import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 25px;
  background-color: #333333;
  padding-top: 92px;
  min-width: 100vw;
  min-height: 100vh;
  font-family: 'Lato';
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 611px;
  height: 100%;

  @media (max-width: 460px) {
    width: 100%;
  }
   h1 {
    font-family: 'Oswald';
    font-weight: 700;
    font-size: 2.05rem;
    line-height: 49px;
    color: #ffffff;
    margin: 0px 19px 19px;
    text-align: center;
  }
`;

export const NewPostsBtn = styled.div`
width: 100%;
height: 68px;
display: flex;
align-items: center;
gap: 10px;
justify-content: center;
cursor: pointer;
background: #1877F2;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 16px;
margin-top: 40px;

font-weight: 400;
font-size: 16px;
line-height: 19px;
color: #FFFFFF;

>div {
  font-size: 1.5em;
}
`
