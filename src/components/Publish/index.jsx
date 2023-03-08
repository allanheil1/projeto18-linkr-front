import React, { useState } from 'react';
import { createPost } from '../../service';
import * as S from './styles';

function Publish() {
  const initialFormState = {
    url: '',
    content: ''
  };
  const [formState, setFormState] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    const token = 'toke';
    if (!formState?.url) return alert('Please enter a URL');

    try {
      await createPost(formState, token);
      setFormState(initialFormState);
      setIsSubmitting(false);
    } catch (error) {
      console.log(error);
      alert('There was an error publishing your link');
      setIsSubmitting(false);
    }
  };

  return (
    <S.ContainerPublish>
      <p>What are you going to share today?</p>
      <S.FormPublish>
        <S.Input
          height="30px"
          type="url"
          name="url"
          placeholder="http://..."
          value={formState.url}
          onChange={handleInputChange}
        />
        <S.Input
          padding="15px"
          height="47px"
          type="text"
          name="content"
          placeholder="Awesome article about #javascript"
          required
          value={formState.content}
          onChange={handleInputChange}
        />
        <S.SubmitBtn onClick={handleSubmit} disabled={isSubmitting}>
          {isSubmitting ? 'Publishing...' : 'Publish'}
        </S.SubmitBtn>
      </S.FormPublish>
    </S.ContainerPublish>
  );
}

export default Publish;
