import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { TbTrashFilled } from 'react-icons/tb';
import { TiPencil } from 'react-icons/ti';
import { ReactTagify } from 'react-tagify';
import { getLikes, likePost, dislikePost } from '../../service';
import * as S from './styles';

function Posts(props) {
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
  const [likesCount, setLikesCount] = useState(0);
  const token = localStorage.getItem('token');

  useEffect(() => {
    async function getPostLikes(){
      try {
        setIsLoading(true);
        const res = await getLikes({token, postId});
        setLikesCount(res.data.likes);
        if(res.data.userLiked === true){
          setIsLiked(true);
        }
        setIsLoading(false);
      } catch (err) {
        console.log(err)
        setIsLoading(false);
      }
    }
    getPostLikes();
  }, []);

  const redirectPage = (id) => {
    navigate(`/user/${id}`);
    setSearchResults([]);
    SetSearchQuery(name);
  };

  async function toggleLike() {
    if(isLiked){
      setIsLiked(!isLiked);
      setLikesCount(likesCount-1);
      try {
        await dislikePost({token, postId});
      } catch (error) {
        console.log(error);
      }
    }else{
      setIsLiked(!isLiked);
      setLikesCount(likesCount+1);
      try {
        await likePost({token, postId});
      } catch (error) {
        console.log(error);
      }
    }
  }

  function refreshHashtag(tag){
    navigate(`/hashtag/${tag.replace("#","")}`)
    setRefresh(true)
  }

  return (
    <S.Container data-test="post">
      <S.Content>
        <S.ProfilePic>
          <img src={photo} alt="profile pic" />
          {isLiked ? <AiFillHeart color='red' onClick={toggleLike}/> : <AiOutlineHeart onClick={toggleLike}/>}
          {<S.Like>{likesCount === 1 ? `${likesCount} like` : `${likesCount} likes`}</S.Like>}
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
          <ReactTagify tagStyle={S.tagStyle} tagClicked={(tag) => refreshHashtag(tag)}>
            <p data-test="description">{content}</p>
          </ReactTagify>
          <S.Metadata data-test="link" href={url} target="_blank" rel="noopener noreferrer">
            <div>
              <h3>{urlTitle}</h3>
              <p> {urlDescription}</p>
            </div>
            <img src={urlImage} alt="metadata image" />
          </S.Metadata>
        </S.PostContent>
      </S.Content>
    </S.Container>
  );
}

export default Posts;