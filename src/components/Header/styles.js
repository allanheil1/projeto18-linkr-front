import styled from "styled-components"

const ConteinerHeader = styled.div`
    width: 100%;
    height: 72px;
    padding: 8px 28px;
    position: absolute;
    top: 0px;
    z-index: 1;
    margin-bottom: 40px;

    background-color: #151515;
    display: flex;
    justify-content: space-between;
    gap: 12px;
    align-items: center;
    h1{
        font-family: 'Passion One', cursive;
        font-size: 50px;
        color: #ffff;
    }
`
const SearcheStyle = styled.div`
    width: 563px;
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
        font-size: 19px;
        font-family: 'Lato', sans-serif;
    }
    span{
        position: absolute;
        right: 8px;
        top: 10px;
    }
    ul{
        position: absolute;
        top: 39px;
        width: 563px;
        background-color: #E7E7E7;
        border-radius: 0px 0px 8px 8px;
        li{
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 6px 12px;
            margin: 14px 0px;
            div{
                width: 39px;
                height: 39px;
                border-radius: 50%;
                img{
                    width: 100%;
                }
            }
        }
    }
    @media(max-width: 460px) {
        display: none;
    }
`
const ImageStyle = styled.div`
    display:flex;
    align-items: center;
    gap: 12px;
    position: relative;
    span{
        width: 53px;
        height: 53px;
        border-radius: 50%;
    }
    img{
        width: 53px;
        height: 53px;
        border-radius: 50%;
    }
    button{
        position: absolute;
        width: 150px;
        height: 47px;
        padding: 10px 20px;
        right: -28px;
        top: 60px;
        text-align: center;

        background: #171717;
        color: #fff;
        border: none;
        border-radius: 0px 0px 0px 20px;
        font-family: 'Lato';
        font-weight: 700;
        font-size: 17px;
    }
`
export {ConteinerHeader, SearcheStyle, ImageStyle}