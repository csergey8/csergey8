export const recipesActions = {
  GET_RECIPES: '@@RECIPE/GET_RECIPES',
  LOAD_RECIPES_REQUEST: '@@RECIPE/LOAD_RECIPES_REQUEST',
  LOAD_RECIPES_SUCCESS: '@@RECIPE/LOAD_RECIPES_SUCCESS',
  LOAD_RECIPES_FAILURE: '@@RECIPE/LOAD_RECIPES_FAILURE',
  SET_RECIPE_WORD: '@@RECIPE/SET_RECIPE_WORD',
  CLEAR_RECIPES: '@@RECIPE/CLEAR_RECIPES',
};

const initialState = {
  recipes: null,
  isLoading: true,
  recipeWord: null,
};

const handlers = {
  DEFAULT: state => state,
  [recipesActions.LOAD_RECIPES_REQUEST]: (state, action) => ({
    ...state,
    isLoading: true,
    recipes: action.payload,
  }),
  [recipesActions.LOAD_RECIPES_SUCCESS]: (state, action) => ({
    ...state,
    isLoading: false,
    recipes: action.payload,
  }),
  [recipesActions.SET_RECIPE_WORD]: (state, action) => ({
    ...state,
    recipeWord: action.payload,
  }),
  [recipesActions.CLEAR_RECIPES]: state => ({
    ...state,
    recipes: null,
  }),
};

export const recipesReducer = (state = initialState, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT;
  return handle(state, action);
};
