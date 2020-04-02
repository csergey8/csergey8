import {put, call, takeEvery, all, select, take} from 'redux-saga/effects';
import {recipesActions} from './recipesReducer';

function* getRecipes() {
  console.log('saga init');
  const {
    recipesReducer: {recipeWord},
  } = yield select();
  const url = `https://api.edamam.com/search?q=${recipeWord}&app_id=0b6c0ea0&app_key=d644635c261ac750dbd8d80f9be61508`;
  try {
    const response = yield fetch(url);
    const data = yield response.json();
    yield put({type: recipesActions.LOAD_RECIPES_SUCCESS, payload: data.hits});
    console.log(data);
  } catch (e) {
    console.log(e);
  }
}

function* watchGetRecipes() {
  yield takeEvery(recipesActions.GET_RECIPES, getRecipes);
}

export default function* rootSaga() {
  yield all([watchGetRecipes()]);
}
