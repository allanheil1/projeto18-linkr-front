import styled from "styled-components";

export const ConteinerModal = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: rgba(255, 255, 255, 0.9);
    z-index: 20;
`
export const Modal = styled.div`
    width: 597px;
    height: 210px;
    background-color: #333333;
    border-radius: 20px;
    padding: 20px 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap:16px;
`
export const Text = styled.div`
    margin: auto;
    p{
        width: 300px;
        height: auto;
        font-family: 'Lato';
        text-align: center;
        font-weight: 700;
        font-size: 29px;
        color: #fff;
    }
`
export const Buttons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    div{
        width: 134px;
        height: 37px;
        border-radius: 5px;
        padding: 8px 4px;
        font-family: 'Lato';
        font-weight: 700;
        font-size: 18px;
    }
    .cancel{
        text-align: center;
        background: #FFFFFF;
        color: #1877F2;
    }
    .share{
        text-align: center;
        background: #1877F2;
        color: #fff;
    }
`

