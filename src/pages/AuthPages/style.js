import styled from 'styled-components';

export const AuthenticationPageStyle = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #333333;
  img{
    height: 200px;
    margin-bottom: -40px;
  }

  input{
    font-family: 'Oswald';
    font-weight: 700;
    height: 56px;
    width: 330px;
    margin-bottom: 12px;
    background: #FFFFFF;
    border-radius: 6px;
    font-size: 23px;
    color: #151515;
    padding-left: 17px;
    ::placeholder{
      color: #9F9F9F;
      font-size: 22px;
      font-weight: 700;
      text-decoration: none;
    }
    @media(min-width: 460px){
      width: 82%;
    }

  }

  button{
    font-family: 'Oswald';
    display: flex;
    align-items: center;
    justify-content: center;
    height: 55px;
    width: 330px;
    border: none;
    border-radius: 6px;
    font-size: 22px;
    font-weight: 700;
    color: #FFFFFF;
    text-align: center;
    margin-bottom: 25px;
    background-color: #1877F2;
    @media(min-width: 460px){
      width: 82%;
    }
  }
  button:disabled{
    opacity: 0.75;
  }
  @media(min-width: 460px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    background-color: #333333;
  }
`

export const Title = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 175px;
    color: #FFFFFF;
    background-color: #151515;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin-bottom: 15px;
    h1{
        font-family: 'Passion One', cursive;
        font-weight: 700;
        font-size: 76px;
        line-height: 84px;
        letter-spacing: 0.05em;
        @media(min-width: 460px){
          font-size: 106px;
          margin-left: 20%;
        }
    }
    h2{
        width: 237px;
        font-family: 'Oswald';
        font-weight: 700;
        font-size: 23px;
        line-height: 34px;
        text-align: center;
        margin-top: -15px;
        @media(min-width: 460px){
          margin-left: 20%;
          font-size: 43px;
          width: 55%;
          line-height: 64px;
          margin-top: 10px;
          text-align: start;
        }
    }
    @media(min-width: 460px){
      height: 100%;
      width: 63%;
      align-items: start;
      box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.25);
    }
`

export const Message = styled.div`
  font-family: 'Lato', sans-serif;
  color: #FFFFFF;
  font-size: 17px;
  line-height: 20px;
  text-decoration: underline;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 30px 0 25px;
  @media(min-width: 460px){
    width: 37%;
  }
`

