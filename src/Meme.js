import React from 'react';
import './Meme.css';
const Meme = ({ meme, deleteMeme }) => {
  const { image_url, top_text, bottom_text, id } = meme;
  const handleClick = (e) => {
    e.preventDefault();
    deleteMeme(id);
  };
  return (
    <>
      <div className='meme'>
        <img src={image_url} alt='meme' className='meme-img' />
        <div className='top-text'>{top_text}</div>
        <p className='bottom-text'>{bottom_text}</p>
      </div>
      <button className='remove-btn' onClick={handleClick}>
        Delete
      </button>
    </>
  );
};

export default Meme;
