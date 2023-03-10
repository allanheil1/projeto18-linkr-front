import styled from 'styled-components';

export const ContainerPublish = styled.div`
  display: flex;
  background-color: white;
  width: 611px;
  height: 209px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  padding-top: 19px;
  box-shadow: 4px 4px 8px 0px rgba(180, 180, 207, 0.2);
  @media (max-width: 600px) {
    width: 100%;
    height: 164px;
    border-radius: 0px;
  }
  p {
    font-weight: 300;
    font-size: 1.1rem;
    line-height: 20px;
    color: #707070;
    padding: 0px 15px 10px;
  }
`;

export const ProfilePic = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 10%;
  height: 100%;
  > img {
    background-color: #101010;
    width: 50px;
    height: 50px;
    border: 1px solid gray;
    border-radius: 50%;
    margin-bottom: 15px;
    cursor: pointer;
  }
  @media (max-width: 461px) {
    display: none;
  }
`;

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  @media (max-width: 461px) {
    width: 100%;
    >p {
      text-align: center;
    }
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
  height: ${(props) => props.height};
  background: #efefef;
  border: none;
  border-radius: 5px;
  padding-left: 12px;
  padding-bottom: ${(props) => props.padding};

  font-weight: 300;
  font-size: 1rem;
  line-height: normal;
  color: #010101;
  ::placeholder {
    font-weight: 300;
    font-size: 1em;
    line-height: normal;
    color: #949494;
    opacity: 1;
  }
  @media (min-width: 600px) {
    ${(props) => props.height === '47px' && `height: 66px;`}
  }
  :focus {
    outline: none;
    border: 2px solid #949494;
  }
`;

export const SubmitBtn = styled.button`
  width: 112px;
  height: 32px;
  background: #1877f2;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  font-weight: 700;
  font-size: 1em;
  line-height: 16px;
  text-align: center;
  color: #ffffff;

  @media (max-width: 600px) {
    height: 22px;
  }

  :hover {
    opacity: 0.8;
  }
  :active {
    scale: 0.9;
  }
`;
