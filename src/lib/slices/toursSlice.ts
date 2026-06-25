import { createSlice, createAction, PayloadAction } from '@reduxjs/toolkit'

export interface Tour {
  id: string
  image: string
  title: string
  description: string
}

interface ToursState {
  tours: Tour[]
  loading: boolean
  error: string | null
}

const initialState: ToursState = {
  tours: [],
  loading: false,
  error: null
}

export const fetchTours = createAction('tours/fetchTours')
export const fetchToursSuccess = createAction<Tour[]>('tours/fetchToursSuccess')
export const fetchToursFailure = createAction<string>('tours/fetchToursFailure')  

const toursSlice = createSlice({
  name: 'tours',
  initialState,
  reducers: {
    clearToursError: (state) => {
      state.error = null
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTours, (state) => {
        console.log('🛫 SLICE: fetchTours Triggered')
        state.loading = true
        state.error = null
      })
      .addCase(fetchToursSuccess, (state, action: PayloadAction<Tour[]>) => {
            console.log('🛬 SLICE: fetchToursSuccess with', action.payload.length, 'tours')
        state.loading = false
        state.tours = action.payload
      })
      .addCase(fetchToursFailure, (state, action: PayloadAction<string>) => {
        console.log('💥 SLICE: fetchToursFailure with error', action.payload)
        state.loading = false
        state.error = action.payload
      })
  }
})

export const { clearToursError } = toursSlice.actions
export default toursSlice.reducer