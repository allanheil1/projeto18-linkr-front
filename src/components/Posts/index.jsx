import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { TbTrashFilled } from 'react-icons/tb';
import { TiPencil } from 'react-icons/ti';
import { ReactTagify } from 'react-tagify';
import { getLikes } from '../../service';
import * as S from './styles';

function Posts(props) {
  const { id, name, photo, content, url, urlTitle, urlDescription, urlImage, setSearchResults, SetSearchQuery } = props;
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [qLikes, setQLikes] = useState("");

  const redirectPage = (id) => {
    navigate(`/user/${id}`);
    setSearchResults([]);
    SetSearchQuery(name);
  };

  function like() {
    setIsLiked(!isLiked);
    try {
      setIsLoading(true);
      const res = await getLikes(postId);
      setQLikes(res);
      console.log(res);
      setIsLoading(false);
    } catch (err) {
      console.log(err)
      setIsLoading(false);
      alert('An error occured while trying to fetch the trendings, please refresh the page');
    }
  }

  return (
    <S.Container data-test="post">
      <S.Content>
        <S.ProfilePic>
          <img src={photo} alt="" />
          {isLiked ? <AiFillHeart onClick={like} /> : <AiOutlineHeart onClick={like} />}
          <S.Like>{qLikes}</S.Like>
        </S.ProfilePic>
        <S.PostContent>
          <S.PostHeader>
            <h3 data-test="username" onClick={() => redirectPage(id)}>{name}</h3>
            <S.BySide>
              <TiPencil />
              <TbTrashFilled />
            </S.BySide>
          </S.PostHeader>
          <ReactTagify tagStyle={S.tagStyle} tagClicked={(tag) => navigate(`/hashtag/${tag}`)}>
            <p data-test="description">{content}</p>
          </ReactTagify>
          <S.Metadata data-test="link" onClick={() => window.open(url, '_blank', 'noopener,noreferrer')}>
            <div>
              <h3>{urlTitle}</h3>
              <p> {urlDescription}</p>
            </div>
            <img src={urlImage} alt="" />
          </S.Metadata>
        </S.PostContent>
      </S.Content>
    </S.Container>
  );
}

export default Posts;
