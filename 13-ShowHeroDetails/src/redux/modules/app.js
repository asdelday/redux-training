export const CHANGE_FONT_SIZE = 'redux-training/app/CHANGE_FONT_SIZE';

const initialState = {
  fontSize: '14px',
};

export default function reducer(state = initialState, action = {}) {
  const { type } = action;

  switch (type) {
    case CHANGE_FONT_SIZE:
      return { ...state, fontSize: action.fontSize };

    default:
      return state;
  }
}

export function changeFontSize(fontSize) {
  return { type: CHANGE_FONT_SIZE, fontSize };
}
