import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MemeForm from './MemeForm';
import Meme from './Meme';
import './MemeGenerator.css';

const MemeGenerator = () => {
  const memes = useSelector((state) => state.memes);
  const dispatch = useDispatch();

  const generateMeme = (memeData) => {
    const { image_url, top_text, bottom_text, id } = memeData;
    console.log(id);
    dispatch({
      type: 'GENERATE_MEME',
      payload: { image_url, top_text, bottom_text, id },
    });
  };

  const deleteMeme = (id) => {
    dispatch({
      type: 'REMOVE_MEME',
      payload: { id: id },
    });
  };
  return (
    <>
      <div className='meme-generator'>
        <header>
          <h2>Meme Generator</h2>
          <MemeForm generateMeme={generateMeme} />
        </header>
        <div className='meme-container'>
          {memes.map((meme, idx) => (
            <Meme key={idx} meme={meme} deleteMeme={deleteMeme} id={idx} />
          ))}
        </div>
      </div>
    </>
  );
};

export default MemeGenerator;
