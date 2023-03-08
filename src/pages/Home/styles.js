import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background-color: #333333;
  padding-top: 0px;
  min-width: 100vw;
  min-height: 100vh;
  font-family: 'Lato';
`;

export const Content = styled.div`
  width: 375px;
  height: 100%;
  margin: 0px auto;
  > h1 {
    font-family: 'Oswald';
    font-weight: 700;
    font-size: 2.05rem;
    line-height: 49px;
    color: #ffffff;
    margin: 0px 19px 19px;
  }
`;

export const ContainerPublish = styled.div`
  background-color: white;
  width: 375px;
  height: 164px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  > p {
    font-weight: 300;
    font-size: 1.1rem;
    line-height: 20px;
    text-align: center;
    color: #707070;
    padding: 11px;
  }
`;

export const FormPublish = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 0px 15px;
  gap: 6px;
`;

export const Input = styled.input`
  width: 100%;
  height: 30px;
  background: #efefef;
  border: none;
  border-radius: 5px;
  padding-left: 12px;

  font-weight: 300;
  font-size: 1rem;
  line-height: 18px;
  color: #010101;
  :focus {
    outline: none;
    border: 2px solid black;
  }
  ::placeholder {
    font-weight: 300;
    font-size: 0.8em;
    line-height: 16px;
    color: #949494;
  }
`;

export const SubmitBtn = styled.button`
  width: 112px;
  height: 22px;
  background: #1877f2;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  font-weight: 700;
  font-size: 1em;
  line-height: 16px;
  text-align: center;
  color: #ffffff;
  :hover {
    opacity: 0.8;
  }
  :active {
    scale: 0.9;
  }
`;

export const Trending = styled.div`
  margin-top: 30px;
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
`