export const SELECT_HERO = 'redux-training/heroes/SELECT_HERO';
export const GET_HEROES = 'redux-training/heroes/GET_HEROES';
export const GET_HEROES_SUCCESS = 'redux-training/heroes/GET_HEROES_SUCCESS';
export const GET_HEROES_FAIL = 'redux-training/heroes/GET_HEROES_FAIL';

const initialState = {
  heroSelected: null,
  heroList: [],
  isLoading: false,
  error: null,
};

/* REDUCER
 ================================================================================================ */
export default function reducer(state = initialState, action = {}) {
  const { type } = action;

  switch (type) {
    case SELECT_HERO:
      return { ...state, heroSelected: action.hero };

    case GET_HEROES:
      return { ...state, isLoading: true };

    case GET_HEROES_SUCCESS:
      return { ...state, isLoading: false, error: null, heroList: action.result };

    case GET_HEROES_FAIL:
      return { ...state, isLoading: false, error: action.error, heroList: [] };

    default:
      return state;
  }
}

/* ACTIONS CREATORS
 ================================================================================================ */
export function selectHero(hero) {
  return { type: SELECT_HERO, hero };
}

export function getHeroes(data) {
  return {
    types: [GET_HEROES, GET_HEROES_SUCCESS, GET_HEROES_FAIL],
    promise: new Promise((resolve) => resolve(data)), // TODO
  };
}
