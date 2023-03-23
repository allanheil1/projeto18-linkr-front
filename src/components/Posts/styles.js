import styled from 'styled-components';

export const Container = styled.div`
  max-width: 611px;
  width: 100vw;
  height: 232px;
  background: #171717;
  margin-top: 16px;
  padding-top: 9px;
  font-family: 'Lato';
  border-radius: 16px;
  box-shadow: 4px 4px 8px 0px rgba(180, 180, 207, 0.2);
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
  gap:10px;
  align-items: center;
  width: 10%;
  height: 100%;
  color: white;
  div{
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-size: 14px;
  }
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
  color: white;
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

export const Metadata = styled.a`
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
    overflow: hidden;
    overflow-wrap: break-word;
    text-overflow: ellipsis;
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

export const tagStyle = {
  color: 'white',
  cursor: 'pointer',
  fontWeight: 'bold'
}

export const Comment = styled.div` 
  position: relative;
  width: 100%;
  border-radius:0px 0px 16px 16px ;
  background: #1E1E1E;
  margin-bottom: 16px;
  padding: 13px 25px;
  ul{
    display: flex;
    flex-direction: column-reverse;
    height: auto;
    padding-bottom:40px ;
    max-height: 300px;
    overflow-x: hidden;
    li{
    display: flex;
    gap: 14px;
    margin: 14px 0px;
    padding: 8px 0px;
    border-bottom: 1px solid #353535;
  }
  }
  
`
export const UserImg = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: red;
`
export const UserConteiner = styled.div`
  display: flex;
  gap: 12px;
`
export const Input = styled.div` 
  display: flex;
  justify-content: center;
  gap: 14px;
  width: 100%;
  padding: 8px;
  position: absolute;
  bottom: 2px;
  left: 0px;
  div{
    border-radius: 50%;
    img{
      width: 100%;
    }
  }
`
export const InputComment = styled.div` 
  width: 510px;
  display: flex;
  position: relative;
  align-items: center;
  input{
    width: 510px;
    height: 30px;
    border: none;
    border-radius: 8px;
    padding:0px 8px ;
  }
  p{
    position: absolute;
    right: 8px;
  }
`

