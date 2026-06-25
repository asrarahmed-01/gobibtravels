import { combineReducers } from '@reduxjs/toolkit'
import uiReducer from './uiSlice'
import toursReducer from './toursSlice'
import homeReducer from './homeSlice'
import attractionsReducer from './attractionsSlice'
import blogsReducer from './blogsSlice'

const rootReducer = combineReducers({
  ui: uiReducer,
  tours: toursReducer,
  home: homeReducer,
  attractions: attractionsReducer,
  blogs: blogsReducer,
})

export default rootReducer