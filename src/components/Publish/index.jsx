import React from 'react';
import * as S from './styles';

function Publish() {
  return (
    <S.ContainerPublish>
      <p>What are you going to share today?</p>
      <S.FormPublish>
        <S.Input height="30px" type="url" name="url" placeholder="http://..." />
        <S.Input
          padding="15px"
          height="47px"
          type="text"
          name="content"
          placeholder="Awesome article about #javascript"
        />
        <S.SubmitBtn>Publish</S.SubmitBtn>
      </S.FormPublish>
    </S.ContainerPublish>
  );
}

export default Publish;
