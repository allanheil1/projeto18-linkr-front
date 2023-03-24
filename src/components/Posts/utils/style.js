import styled from "styled-components";

export const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: rgba(255,255,255,0.5);
`

export const ModalStyle = styled.div`
    width: 600px;
    display: flex;
    margin: auto;
    align-items: center;
    justify-content: center;
    padding: 50px 0px;
    border-radius: 50px;
    background: #333333;

    @media (max-width: 600px) {
        width: 80%;
    }

    @media (max-width: 400px) {
        > div {
            > div {
                gap: 18px;   
                display: flex;
                flex-direction: column;
            }
        }
    }

    > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 35px;

        p {
            text-align: center;
            width: 60%;
            font-family: 'Lato';
            font-weight: 700;
            font-size: 35px;
            color: #FFFFFF;
        }
        
        div {   
            display: flex;
            align-items: center;
            height: auto;
            button {
                margin: 0 10px;
                width: 140px;
                height: 39px;
                background: #FFF;
                border-radius: 4px;
                color: #1877F2;
                font-weight: 700;
                font-size: 19px;
                border: none;

                &:hover {
                    cursor: pointer; 
                    background: #1877F2;
                    color: #FFF;   
                }
            }            

            button:nth-child(2) {
                background:  #1877F2;
                color: #FFF;

                &:hover {
                    cursor: pointer;
                    background:  #1877F2;    
                }
            }
        }
    }
`