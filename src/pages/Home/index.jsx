import React from 'react';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../contexts/UserContext';
import * as S from './styles';
import { useLocation } from 'react-router-dom';
import { listPost } from '../../service';
import Posts from '../../components/Posts';
import Publish from '../../components/Publish';
import Trending from '../../components/Trending/Trending';
import Header from '../../components/Header/Header';

function Home() {
  const location = useLocation();
  const token = localStorage.getItem('token');
  const isTimelinePage = location.pathname.endsWith('/timeline');
  const { checkLogin } = useContext(UserContext);
  const [isLoading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      checkLogin();
      setLoading(true);
      try {
        const res = await listPost(token);
        setPosts(res.data.metadataArray);
      } catch (error) {
        console.log(error);
        alert('An error occured while trying to fetch the posts, please refresh the page');
      }
      setLoading(false);
    };
    fetchPosts();
  }, [refresh, token, checkLogin]);

  return (
    <S.Container>
      <Header />
      <S.Content>
        <h1>Timeline</h1>
        {isTimelinePage && <Publish setRefresh={setRefresh} />}
        {isLoading ? (
          <h1>Loading</h1>
        ) : posts.length === 0 ? (
          <h1>There are no posts yet</h1>
        ) : (
          posts.map((p, i) => (
            <Posts
              key={i}
              id={p.id}
              name={p.name}
              photo={p.photo}
              content={p.content}
              url={p.url}
              urlTitle={p.urlTitle}
              urlDescription={p.urlDescription}
              urlImage={p.urlImage}
            />
          ))
        )}
      </S.Content>
      <Trending></Trending>
    </S.Container>
  );
}

export default Home;
