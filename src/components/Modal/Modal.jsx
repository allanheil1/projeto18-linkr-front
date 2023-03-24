import * as S from "./style.js"

export default function Modal(){
    return(
        <S.ConteinerModal>
            <S.Modal>
                <S.Text>
                    <p>Do you want to re-post
this link?</p>
                </S.Text>
                <S.Buttons>
                    <div className="cancel">No, cancel</div>
                    <div className="share">Yes, share!</div>
                </S.Buttons>
            </S.Modal>
        </S.ConteinerModal>
    )
}

