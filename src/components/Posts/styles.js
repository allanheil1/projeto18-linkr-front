import styled from 'styled-components';

export const Container = styled.div`
  max-width: 611px;
  width: 100vw;
  height: 232px;
  background: #171717;
  margin: 16px 0px;
  padding-top: 9px;
  font-family: 'Lato';
  border-radius: 16px;
  @media (max-width: 600px) {
    border-radius: 0px;
  }
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const ProfilePic = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 10%;
  height: 100%;
  @media (max-width: 461px) {
    width: 15%;
  }
  > img {
    background-color: #101010;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-bottom: 15px;
    cursor: pointer;
  }
`;

export const Like=styled.div`
  font-size: 10px;
`;

export const PostHeader=styled.div`
  display: flex;
  justify-content: space-between;
  color: white;
`;

export const BySide=styled.div`
  display: flex;
  justify-content: space-between;
  width: 40px;
`;

export const PostContent = styled.div`
  height: 100%;
  width: 85%;
  display: flex;
  flex-direction: column;
  @media (max-width: 461px) {
    width: 80%;
  }
  h3 {
    font-weight: 400;
    font-size: 1.1em;
    line-height: 20px;
    color: #ffffff;
    margin-bottom: 7px;
    cursor: pointer;
  }

  p {
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    color: #b7b7b7;
    margin-bottom: 13px;
  }
`;

export const Metadata = styled.div`
  display: flex;
  width: 100%;
  height: 155px;
  border: 1px solid #4d4d4d;
  border-radius: 11px;
  cursor: pointer;
  > div {
    padding: 10px;
    width: 70%;
    height: 100%;
  }
  p {
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    color: #b7b7b7;
  }
  > img {
    display: block;
    height: 100%;
    width: 30%;
  }
`;
