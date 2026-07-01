import { createSlice, createAction, PayloadAction } from '@reduxjs/toolkit'

export interface HomeCard {
  id: string
  title: string
  description: string
  link: string
  gradient?: string
}

interface HomeState {
  homeCards: HomeCard[]
  loading: boolean
  error: string | null
}

const initialState: HomeState = {
  homeCards: [],
  loading: false,
  error: null,
}


export const fetchHomeCards = createAction('home/fetchHomeCards')
export const fetchHomeCardsSuccess = createAction<HomeCard[]>('home/fetchHomeCardsSuccess')
export const fetchHomeCardsFailure = createAction<string>('home/fetchHomeCardsFailure')

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    clearHomeError: (state) => {
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
     
      .addCase(fetchHomeCards, (state) => {
        state.loading = true
        state.error = null
      })

     
      .addCase(fetchHomeCardsSuccess, (state, action: PayloadAction<HomeCard[]>) => {
        state.loading = false
        state.homeCards = action.payload
      })

    
      .addCase(fetchHomeCardsFailure, (state, action: PayloadAction<string>) => {
        state.loading = false
        state.error = action.payload
      })
  },
})

export const { clearHomeError } = homeSlice.actions
export default homeSlice.reducer
