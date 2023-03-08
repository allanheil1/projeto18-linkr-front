import React from 'react';
import * as S from './styles';

function Posts() {
  return (
    <S.Container>
      <S.Content>
        <S.ProfilePic>
          <img src="" alt="" />
          like
        </S.ProfilePic>
        <S.PostContent>
          <h3>Juvenal Juvêncio</h3>
          <p>Muito maneiro esse tutorial de Material UI com React, deem uma olhada! #react #material</p>
          <S.Metadata></S.Metadata>
        </S.PostContent>
      </S.Content>
    </S.Container>
  );
}

export default Posts;
