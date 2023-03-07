import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 232px;
  background: #171717;
  margin: 16px 0px;
  padding: 9px 15px;
  font-family: 'Lato';
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const ProfilePic = styled.div`
  width: 15%;
  height: 100%;
  > img {
    background-color: #101010;
    width: 40px;
    height: 40px;
    border: 1px solid #4d4d4d;
    border-radius: 50%;
  }
`;

export const PostContent = styled.div`
  height: 100%;
  width: 85%;
  display: flex;
  flex-direction: column;
  h3 {
    font-weight: 400;
    font-size: 1.1em;
    line-height: 20px;
    color: #ffffff;
    margin-bottom: 7px;
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
  width: 100%;
  height: 115px;
  border: 1px solid #4d4d4d;
  border-radius: 11px;
`;
