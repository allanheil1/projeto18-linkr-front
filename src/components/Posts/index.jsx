import React, { useState } from 'react';
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai';
import {TbTrashFilled} from 'react-icons/tb';
import {TiPencil} from 'react-icons/ti';
import * as S from './styles';

function Posts() {
  const [isLiked,setIsLiked]=useState(false);

  function like(){
    setIsLiked(!isLiked);
  }

  return (
    <S.Container>
      <S.Content>
        <S.ProfilePic>
          <img src="" alt="" />
          {isLiked ? <AiFillHeart onClick={like}/> : <AiOutlineHeart onClick={like}/>}
          <S.like>10 likes</S.like>
        </S.ProfilePic>
        <S.PostContent>
          <S.PostHeader>
            <h3>Juvenal Juvêncio</h3>
            <S.BySide>
              <TiPencil/>
              <TbTrashFilled/>
            </S.BySide>
          </S.PostHeader>
          <p>Muito maneiro esse tutorial de Material UI com React, deem uma olhada! #react #material</p>
          <S.Metadata></S.Metadata>
        </S.PostContent>
      </S.Content>
    </S.Container>
  );
}

export default Posts;
