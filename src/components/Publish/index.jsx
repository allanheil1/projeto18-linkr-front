import React, { useState } from 'react';
import { createPost } from '../../service';
import * as S from './styles';

function Publish({ setRefresh }) {
  const initialFormState = {
    url: '',
    content: ''
  };
  const token = localStorage.getItem('token');
  const [formState, setFormState] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!formState?.url) return alert('Please enter a URL');
    setIsSubmitting(true);

    try {
      const { url, content } = formState;
      await createPost(url, content, token);
      setFormState(initialFormState);
      setRefresh((current) => !current);
    } catch (error) {
      console.log(error);
      alert('There was an error publishing your link');
    }
    setIsSubmitting(false);
  };

  return (
    <S.ContainerPublish data-test="publish-box">
      <S.ProfilePic>
        <img src="" alt="" />
      </S.ProfilePic>
      <S.ContainerForm>
        <p>What are you going to share today?</p>
        <S.FormPublish>
          <S.Input
            data-test="link"
            height="30px"
            type="url"
            name="url"
            placeholder="http://..."
            value={formState.url}
            onChange={handleInputChange}
          />
          <S.Input
            data-test="description"
            padding="15px"
            height="47px"
            type="text"
            name="content"
            placeholder="Awesome article about #javascript"
            required
            value={formState.content}
            onChange={handleInputChange}
          />
          <S.SubmitBtn data-test="publish-btn" onClick={handleSubmit} disabled={isSubmitting}>
            {isSubmitting ? 'Publishing...' : 'Publish'}
          </S.SubmitBtn>
        </S.FormPublish>
      </S.ContainerForm>
    </S.ContainerPublish>
  );
}

export default Publish;
