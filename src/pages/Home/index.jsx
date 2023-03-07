import React from 'react';
import * as S from './styles';
import Posts from '../../components/Posts';

function Home() {
  return (
    <S.Container>
      <S.Content>
        <h1>Timeline</h1>
        <S.ContainerPublish>
          <p>What are you going to share today?</p>
          <S.FormPublish>
            <S.Input type="url" name="url" placeholder="http://..." />
            <S.Input type="text" name="content" placeholder="Awesome article about #javascript" />
            <S.SubmitBtn>Publish</S.SubmitBtn>
          </S.FormPublish>
        </S.ContainerPublish>
        <Posts />
        <Posts />
      </S.Content>
    </S.Container>
  );
}

export default Home;
