import React, { useEffect, useState } from 'react';
import * as S from './styles';
import { useLocation } from 'react-router-dom';
import { listPost } from '../../service';
import Posts from '../../components/Posts';
import Publish from '../../components/Publish';
import Trending from '../../components/Trending/Trending';
import Header from '../../components/Header/Header';

function Home() {
  const location = useLocation();
  const isTimelinePage = location.pathname.endsWith('/timeline');
  const [isLoading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  console.log(posts)

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const res = await listPost();
        setPosts(res.data.metadataArray);
      } catch (error) {
        console.log(error);
        alert('An error occured while trying to fetch the posts, please refresh the page');
      }
      setLoading(false);
    };
    fetchPosts();
  }, []);

  return (
    <S.Container>
      <Header />
      <S.Content>
        <h1>Timeline</h1>
        {isTimelinePage && <Publish />}
        {isLoading
          ? 'Loading'
          : posts.length === 0
          ? 'There are no posts yet'
          : posts.map((p) => (
              <Posts
                name={p.name}
                photo={p.photo}
                content={p.content}
                url={p.url}
                urlTitle={p.urlTitle}
                urlDescription={p.urlDescription}
                urlImage={p.urlImage}
              />
            ))}
      </S.Content>
      <Trending></Trending>
    </S.Container>
  );
}

export default Home;
