import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './MemeForm.css';
const MemeForm = ({ generateMeme }) => {
  const INITIAL_STATE = {
    image_url: '',
    top_text: '',
    bottom_text: '',
  };
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    generateMeme({ ...formData, id: uuid() });
    setFormData(INITIAL_STATE);
  };

  return (
    <form className='meme-form' onSubmit={handleSubmit}>
      <div className='input-group'>
        <label htmlFor='image-url'>Image Url</label>
        <input
          type='text'
          name='image_url'
          id='image-url'
          value={formData.image_url}
          onChange={handleChange}
        />
      </div>
      <div className='input-group'>
        <label htmlFor='top-text'>Top Text</label>
        <input
          type='text'
          name='top_text'
          id='top-text'
          value={formData.top_text}
          onChange={handleChange}
        />
      </div>
      <div className='input-group'>
        <label htmlFor='bottom-text'>Bottom Text</label>
        <input
          type='text'
          name='bottom_text'
          id='bottom-text'
          value={formData.bottom_text}
          onChange={handleChange}
        />
      </div>
      <div>
        <button className='meme-btn'>Generate</button>
      </div>
    </form>
  );
};

export default MemeForm;
