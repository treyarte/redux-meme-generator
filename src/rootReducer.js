const INITIAL_STATE = { memes: [] };

const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GENERATE_MEME':
      return { ...state, memes: [...state.memes, { ...action.payload }] };
    case 'REMOVE_MEME':
      return {
        ...state,
        memes: state.memes.filter((meme) => meme.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default rootReducer;
