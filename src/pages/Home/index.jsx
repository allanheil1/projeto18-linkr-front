import React from 'react';
import { useContext, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import useInterval from 'use-interval';

import { UserContext } from '../../contexts/UserContext';
import { listPost, listNewPost, countNewPosts } from '../../service';
import { TbRefresh } from 'react-icons/tb';

import Posts from '../../components/Posts';
import Publish from '../../components/Publish';
import Trending from '../../components/Trending/Trending';
import Header from '../../components/Header/Header';

import * as S from './styles';

function Home() {
  const token = localStorage.getItem('token');
  const { checkLogin } = useContext(UserContext);

  const [isLoading, setLoading] = useState(null);
  const [refresh, setRefresh] = useState(false);
  const [posts, setPosts] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [offset, setOffset] = useState(0);
  const [newPostsCount, setNewPostsCount] = useState(0);
  const [followsAnyone, setFollowsAnyone] = useState(null);


  const fetchPosts = async () => {
    checkLogin();
    if (isLoading === null) setLoading(true);

    try {
      const res = await listPost({ token, offset });

      const newPosts = res.data.metadataArray;
      setFollowsAnyone(res.data.followsSomeone)
      if (newPosts.length === 0) {
        setHasMore(false);
        return false;
      }

      setPosts([...posts, ...newPosts]);
      setOffset(offset + 10);
    } catch (error) {
      console.log(error);
      alert('An error occurred while trying to fetch the posts, please refresh the page');
    } finally {
      setLoading(false);
    }
  };
  useInterval(() => {
    const checkNewPosts = async () => {
      const lastPostCreatedAt = posts[0]?.createdAt || '2022-03-26T01:12:54.948Z';
      const lastPostId = posts[0]?.postId || 1000
      try {
        const res = await countNewPosts({ token, lastPostCreatedAt, lastPostId });
        setNewPostsCount(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    checkNewPosts();
  }, 15000);

  const handleNewPostsClick = async () => {
    const limit = newPostsCount;
    setLoading(true);
    try {
      const res = await listNewPost({ token, limit });
      const newPosts = res.data.metadataArray;
      setPosts([...newPosts, ...posts]);
      setNewPostsCount(0);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <S.Container>
      <Header />
      <S.Content>
        <h1>Timeline</h1>
        <Publish setRefresh={setRefresh} />
        {newPostsCount > 0 && (
          <S.NewPostsBtn data-test="load-btn" onClick={handleNewPostsClick}>
            {newPostsCount} new posts, load more!
            <div>
              <TbRefresh />
            </div>
          </S.NewPostsBtn>
        )}
        {isLoading && <h1>Loading</h1>}
        {!isLoading && posts?.length < 1 && !followsAnyone && (
          <h1 data-test="message">You don't follow anyone yet. Search for new friends!</h1>
        )}
        {!isLoading && posts?.length < 1 && followsAnyone && (
          <h1 data-test="message">No posts found from your friends</h1>
        )}
        {!isLoading && (
          <InfiniteScroll
            pageStart={0}
            initialLoad={true}
            loadMore={fetchPosts}
            hasMore={hasMore}
            loader={<h1>Loading more posts...</h1>}
          >
            {posts.map((p) => (
              <Posts
                key={p.postId}
                id={p.id}
                postId={p.postId}
                name={p.name}
                photo={p.photo}
                content={p.content}
                url={p.url}
                commentCount={p.commentCount}
                urlTitle={p.urlTitle}
                urlDescription={p.urlDescription}
                urlImage={p.urlImage}
                repostedBy={p.repostedBy}
              />
            ))}
          </InfiniteScroll>
        )}
      </S.Content>
      <Trending refresh={refresh}></Trending>
    </S.Container>
  );
}

export default Home;
