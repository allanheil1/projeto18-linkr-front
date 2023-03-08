import React from 'react';
import * as S from './styles';
import { useLocation } from 'react-router-dom';
import Posts from '../../components/Posts';
import Publish from '../../components/Publish';
import Trending from '../../components/Trending/Trending';
import Header from '../../components/Header/Header';

function Home() {
  const location = useLocation();
  const isTimelinePage = location.pathname.endsWith('/timeline');

  return (
    <S.Container>
      <Header />
      <S.Content>
        <h1>Timeline</h1>
        {isTimelinePage && <Publish />}
        <Posts />
        <Posts />
      </S.Content>
      <Trending></Trending>
    </S.Container>
  );
}

export default Home;
