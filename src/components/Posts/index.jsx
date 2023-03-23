import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineHeart, AiFillHeart, AiOutlineComment } from 'react-icons/ai';
import { GoGitCompare } from 'react-icons/go';
import { BsSend } from 'react-icons/bs';
import { TbTrashFilled } from 'react-icons/tb';
import { TiPencil } from 'react-icons/ti';
import { ReactTagify } from 'react-tagify';
import { getLikes, giveALike, takeALike } from '../../service';
import * as S from './styles';

function Posts(props) {
  const [open, setOpen] = useState(false)
  const {
    id,
    postId,
    name,
    photo,
    content,
    url,
    urlTitle,
    urlDescription,
    urlImage,
    setSearchResults,
    SetSearchQuery,
    setRefresh
  } = props;
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [qLikes, setQLikes] = useState(0);
  const token = localStorage.getItem('token');

  const redirectPage = (id) => {
    navigate(`/user/${id}`);
    setSearchResults([]);
    SetSearchQuery(name);
  };

  // useEffect(()=>{
  //   let Likes=async()=>{
  //     try {
  //       setIsLoading(true);
  //       const res = await getLikes(postId,token);
  //       setQLikes(res);
  //       console.log(res);
  //       setIsLoading(false);
  //     } catch (err) {
  //       console.log(err)
  //       setIsLoading(false);
  //     }
  //   }
  //   Likes();
  // },[]);

  // useEffect((like) => {
  //   if (isLiked) {
  //     const giveLike = async () => {
  //       try {
  //         const res = await giveALike(postId, token);
  //         //likes();
  //       } catch (err) {
  //         console.log(err);
  //       }
  //     }
  //   } else {
  //     const takeLike = async () => {
  //       try {
  //         const res = await takeALike(postId, token);
  //         //Likes();
  //       } catch (err) {
  //         console.log(err);
  //       }
  //     }
  //   }
  // },[]);

  // function like() {
  //   if(isLiked){
  //     setIsLiked(!isLiked);
  //     setQLikes(qLikes-1);
  //   }else{
  //     setIsLiked(!isLiked);
  //     setQLikes(qLikes+1);
  //   }
  // }
  function refreshHashtag(tag){
    navigate(`/hashtag/${tag.replace("#","")}`)
    setRefresh(true)
  }

  return (
    <>
      <S.Container data-test="post">
        <S.Content>
          <S.ProfilePic>
            <img src={photo} alt="" />
            {/* {isLiked ? <AiFillHeart onClick={like} /> : <AiOutlineHeart onClick={like} />}
          <S.Like>{qLikes} likes</S.Like> */}
            <div onClick={()=> setOpen(!open)}>
              <AiOutlineComment fontSize={23} />
              209
            </div>
            <div>
              <GoGitCompare fontSize={21} />
              176
            </div>
          </S.ProfilePic>
          <S.PostContent>
            <S.PostHeader>
              <h3 data-test="username" onClick={() => redirectPage(id)}>
                {name}
              </h3>
              <S.BySide>
                <TiPencil />
                <TbTrashFilled />
              </S.BySide>
            </S.PostHeader>
            <ReactTagify tagStyle={S.tagStyle} tagClicked={(tag) => navigate(`/hashtag/${tag.replace('#', '')}`)}>
              <p data-test="description">{content}</p>
            </ReactTagify>
            <S.Metadata data-test="link" href={url} target="_blank" rel="noopener noreferrer">
              <div>
                <h3>{urlTitle}</h3>
                <p> {urlDescription}</p>
              </div>
              <img src={urlImage} alt="" />
            </S.Metadata>
          </S.PostContent>
        </S.Content>
      </S.Container>
      {open?<S.Comment>
        <ul>
          <li>
            <S.UserImg>
              <img src="aquiMinhaImagem" alt="Eu" />
            </S.UserImg>
            <div>
              <S.UserConteiner>
                <p>Name</p>
                <div>
                  <spam></spam>following
                </div>
              </S.UserConteiner>
              <div>Aqui está meu cooomentario</div>
            </div>
          </li> 
        </ul>
        <S.Input>
          <S.UserImg>
            <img src="imagem" alt="eu" />
          </S.UserImg>
          <S.InputComment>
            <input type="text" placeholder="write a comment..." />
            <p>
              <BsSend fontSize={20} />
            </p>
          </S.InputComment>
        </S.Input>
      </S.Comment> : "" }
      
    </>
  );
}

export default Posts;
