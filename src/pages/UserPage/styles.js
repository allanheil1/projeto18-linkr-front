import styled from "styled-components";

const ConteinerUserPage = styled.div`
    width: 100%;
    min-height: 100vh;
    position: relative;
    background-color: #333333;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const ConteinerMain = styled.div`
     display: flex;
    justify-content: center;
    gap: 25px;
    margin: 140px auto;
`
const ProfileStyle = styled.div`
    display: flex;
    gap: 15px;
    span{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        img{
            width: 100%;
        }
    }
    h2{
        font-family: 'Oswald';
        max-width:600px;
        width:100%;
        font-style: normal;
        font-weight: 700;
        font-size: 2.5em;
        color: #fff;
    }
`
const SearcheStyle = styled.div`
    margin-top: 80px;
    width: 350px;
    height: 45px;
    border-radius: 8px;
    position: relative;
    input{
        width: 100%;
        height: 100%;
        border: none;
        padding: 8px 14px;
        border-radius: 8px;
    }
    input::placeholder{
        color:  #C6C6C6;
        font-size: 17px;
        font-family: 'Lato', sans-serif;
    }
    span{
        position: absolute;
        right: 8px;
        top: 10px;
    }
    @media(min-width: 460px) {
        display: none;
    }
`

export {ConteinerUserPage, ConteinerMain, ProfileStyle, SearcheStyle}