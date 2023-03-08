import styled from 'styled-components';

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
    padding: 10px;
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
  :focus {
    outline: none;
    border: 2px solid #949494;
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

