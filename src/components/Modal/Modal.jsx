import * as S from "./style.js";
import { postRepost} from '../../service';

export default function CommentModal(props){
    const token = localStorage.getItem('token');
    const {postId}=props;

    async function repost(){
        try{
          await postRepost({token,postId});
        }catch(err){
          console.log(err);
        }
    }
    
    return(
        <S.ConteinerModal>
            <S.Modal>
                <S.Text>
                    <p>Do you want to re-post
this link?</p>
                </S.Text>
                <S.Buttons>
                    <div className="cancel">No, cancel</div>
                    <div className="share" onClick={repost}>Yes, share!</div>
                </S.Buttons>
            </S.Modal>
        </S.ConteinerModal>
    )
}

