import React from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './styles';

function Posts(props) {
  const { id, name, photo, content, url, urlTitle, urlDescription, urlImage, setSearchResults, SetSearchQuery } = props;
  const navigate = useNavigate();


  const redirectPage= (id)=>{
    navigate(`/user/${id}`)
    setSearchResults([])
    SetSearchQuery(name)
}
  return (
    <S.Container onChange={()=>redirectPage(id)}>
      <S.Content>
        <S.ProfilePic>
          <img src={photo} alt="" />
          like
        </S.ProfilePic>
        <S.PostContent>
          <h3>{name}</h3>
          <p>{content}</p>
          <S.Metadata onClick={() => window.open(url, '_blank', 'noopener,noreferrer')}>
            <div>
            <h3>{urlTitle}</h3>
            <p> {urlDescription}</p>
            </div>
              <img src={urlImage} alt="" />
          </S.Metadata>
        </S.PostContent>
      </S.Content>
    </S.Container>
  );
}

export default Posts;
