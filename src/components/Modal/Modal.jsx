import * as S from "./style.js";
import { useState } from "react";
import { postRepost } from "../../service/index.js";

export default function CommentModal(props){
    const {repostModal, setModalRepostOpen, postId}=props;  
    const token = localStorage.getItem('token');
    const [reposting, setReposting] = useState(false);
    async function repost(){
        setReposting(true);
        try{
          await postRepost({token,postId});
          console.log("deu bom???")
        }catch(err){
          console.log(err);
        }
        setReposting(false);
        setModalRepostOpen(false);
        window.location.href = window.location.href;
    }

    return(
        <S.ConteinerModal>
            <S.Modal>
                <S.Text>
                    <p>Do you want to re-post
this link?</p>
                </S.Text>
                <S.Buttons>
                    <div className="cancel" onClick={repostModal}>No, cancel</div>
                    <div className="share" onClick={repost}>{reposting? 'Reposting...':'Yes, share!'}</div>
                </S.Buttons>
            </S.Modal>
        </S.ConteinerModal>
    )
}

