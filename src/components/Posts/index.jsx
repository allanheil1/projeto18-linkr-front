import React, { useEffect, useState } from 'react';
import DeleteModal from './utils/Modal.js';
import { useNavigate } from 'react-router-dom';
import { AiOutlineHeart, AiFillHeart, AiOutlineComment } from 'react-icons/ai';
import { GoGitCompare } from 'react-icons/go';
import { BsSend } from 'react-icons/bs';
import { TbTrashFilled } from 'react-icons/tb';
import { TiPencil } from 'react-icons/ti';
import { ReactTagify } from 'react-tagify';
import { getLikesAndOwnership, likePost, dislikePost, deletePost } from '../../service';
import * as S from './styles';
import CommentModal from '../Modal/Modal.jsx';
import axios from 'axios';

function Posts(props) {
  const [open, setOpen] = useState(false);
  const {
    id,
    postId,
    name,
    photo,
    content,
    commentCount,
    repostCount,
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
  const [postOwner, setPostOwner] = useState(false);
  const [comment, setComment] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  const [deletingPost, setDeletingPost] = useState(false);
  const token = localStorage.getItem('token');
  const Userphoto = localStorage.getItem('photo');
  const [dataComment, setDataComment] = useState([]);
  const Url = process.env.REACT_APP_API_URL;

  useEffect(() => {
    async function getPostLikes() {
      try {
        setIsLoading(true);
        const res = await getLikesAndOwnership({ token, postId });
        setLikesCount(res.data.likes);
        if (res.data.userLiked === true) {
          setIsLiked(true);
        }
        if (res.data.ownership === true) {
          setPostOwner(true);
        }
        setIsLoading(false);
      } catch (err) {
        console.log(err);
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
    if (isLiked) {
      setIsLiked(!isLiked);
      setLikesCount(likesCount - 1);
      try {
        await dislikePost({ token, postId });
      } catch (error) {
        console.log(error);
      }
    } else {
      setIsLiked(!isLiked);
      setLikesCount(likesCount + 1);
      try {
        await likePost({ token, postId });
      } catch (error) {
        console.log(error);
      }
    }
  }

  function toggleModal() {
    if (modalOpen) {
      setModalOpen(false);
    } else {
      setModalOpen(true);
    }
  }

  async function deletePostFromDb(postId) {
    setDeletingPost(true);
    try {
      await deletePost({ token, postId });
    } catch (err) {
      console.log(err);
      setModalOpen(false);
      alert("Can't delete post");
    }
    setDeletingPost(false);
    setModalOpen(false);
    window.location.href = window.location.href;
  }

  function refreshHashtag(tag) {
    navigate(`/hashtag/${tag.replace('#', '')}`);
    setRefresh(true);
  }

  async function postComment(postId) {
    const body = {
      postId,
      comment: comment
    };

    try {
      const authConfig = (token) => ({
        headers: { Authorization: `Bearer ${token}` }
      });
      await axios.post(`${Url}/comment`, body, authConfig(token));
      setComment('');
      sendComment(postId);
    } catch (err) {
      console.log(err);
    }
  }
  async function sendComment(id) {
    try {
      const authConfig = (token) => ({
        headers: { Authorization: `Bearer ${token}` }
      });
      const { data } = await axios.get(`${Url}/comment/${id}`, authConfig(token));
      setDataComment(data);
      setOpen(!open);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <S.Geral>
      <S.Container data-test="post">
        <S.Content>
          <S.ProfilePic>
            <img src={photo} alt="profile pic" />
            {isLiked ? <AiFillHeart color="red" onClick={toggleLike} /> : <AiOutlineHeart onClick={toggleLike} />}
            {<S.Like>{likesCount === 1 ? `${likesCount} like` : `${likesCount} likes`}</S.Like>}
            <div data-test="comment-btn" onClick={() => sendComment(postId)}>
              <AiOutlineComment fontSize={23} />
              <span data-test="comment-counter">{commentCount} comments</span>
            </div>
            <div>
              <GoGitCompare fontSize={21} />
              <p>{repostCount}</p>
            </div>
          </S.ProfilePic>
          <S.PostContent>
            <S.PostHeader>
              <h3 data-test="username" onClick={() => redirectPage(id)}>
                {name}
              </h3>
              <S.BySide>
                {/* {postOwner && <TiPencil />} */}
                {postOwner && <TbTrashFilled onClick={() => toggleModal()} data-test="delete-btn"/>}
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
      {modalOpen && (
        <DeleteModal setModalOpen={setModalOpen}>
          <p>Are you sure you want to delete this post?</p>
          <div>
            <button
              data-test="cancel"
              onClick={() => {
                setModalOpen(false);
              }}
              disabled={deletingPost}
            >
              No, go back
            </button>
            <button
              data-test="confirm"
              onClick={() => {
                deletePostFromDb(postId);
              }}
              disabled={deletingPost}
            >
              {deletingPost ? 'Deleting ...' : 'Yes, delete it'}
            </button>
          </div>
        </DeleteModal>
      )}

      {open ? (
        <S.Comment data-test="comment-box">
          <ul>
            {dataComment.map((item) => (
              <li data-test="comment">
                <S.UserImg>
                  <img src={item.photo} alt="Eu" />
                </S.UserImg>
                <div>
                  <S.UserConteiner>
                    <p>{item.name}</p>
                    <div>
                      <spam>.</spam>following
                    </div>
                  </S.UserConteiner>
                  <div className="comment">{item.content}</div>
                </div>
              </li>
            ))}
          </ul>
          <S.Input>
            <S.UserImg>
              <img src={Userphoto} alt="eu" />
            </S.UserImg>
            <S.InputComment>
              <input
                data-test="comment-input"
                type="text"
                placeholder="write a comment..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
              <p>
                <BsSend data-test="comment-submit" color='#fff' fontSize={20} onClick={() => postComment(postId)} />
              </p>
            </S.InputComment>
          </S.Input>
        </S.Comment>
      ) : (
        ''
      )}
    </S.Geral>
  );
}
export default Posts;
