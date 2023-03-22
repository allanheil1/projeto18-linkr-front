import React from 'react';
import { useContext, useState, } from 'react';
import InfiniteScroll from 'react-infinite-scroller';

import { UserContext } from '../../contexts/UserContext';
import { listPost } from '../../service';

import Posts from '../../components/Posts';
import Publish from '../../components/Publish';
import Trending from '../../components/Trending/Trending';
import Header from '../../components/Header/Header';

import * as S from './styles';

function Home() {
  const token = localStorage.getItem('token');
  const { checkLogin } = useContext(UserContext);

  const [isLoading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [posts, setPosts] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [offset, setOffset] = useState(0);

  const fetchPosts = async () => {
    checkLogin();
    setLoading(true);

    try {
      const res = await listPost({ token, offset });
      const newPosts = res.data.metadataArray;

      if (newPosts.length === 0) setHasMore(false);

      setPosts([...posts, ...newPosts]);
      setOffset(offset + 10);
    } catch (error) {
      console.log(error);
      alert('An error occurred while trying to fetch the posts, please refresh the page');
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
        {isLoading && <h1>Loading</h1>}
        {!isLoading && posts.length === 0 && <h1 data-test="message">There are no posts yet</h1>}
        {!isLoading && (
          <InfiniteScroll
            pageStart={0}
            initialLoad={true}
            loadMore={fetchPosts}
            hasMore={hasMore}
            loader={
              <div className="loader" key={0}>
                Loading ...
              </div>
            }
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
                urlTitle={p.urlTitle}
                urlDescription={p.urlDescription}
                urlImage={p.urlImage}
              />
            ))}
          </InfiniteScroll>
        )}
      </S.Content>
      <Trending></Trending>
    </S.Container>
  );
}

export default Home;
