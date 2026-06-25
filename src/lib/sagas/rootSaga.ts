import { all } from 'redux-saga/effects'
import { watchFetchTours } from './toursSaga'
import { watchFetchBlogs } from './blogsSaga'
import { watchFetchAttractions } from './attractionsSaga'
import { watchFetchHomeCards } from './homeSaga'


export default function* rootSaga() {
  yield all([
    watchFetchTours(),
    watchFetchBlogs(),
    watchFetchAttractions(),
    watchFetchHomeCards(),
    
    
  ])
}