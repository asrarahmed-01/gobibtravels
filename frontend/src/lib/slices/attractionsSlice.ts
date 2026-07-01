import { createSlice,createAction,PayloadAction } from "@reduxjs/toolkit";

export interface Attraction {
  id: string;
  title: string;
  name: string;
  description: string;
  image: string;
  location: string;
  duration: string;
  price: string;
  activity: string;
  age: string;
}
interface AttractionsState {
  attractions: Attraction[];
  loading: boolean;
  error: string | null;
}
const initialState: AttractionsState = {
  attractions: [],
  loading: false,
  error: null,
};

export const fetchAttractions = createAction('attractions/fetchAttractions');
export const fetchAttractionsSuccess = createAction<Attraction[]>('attractions/fetchAttractionsSuccess');   
export const fetchAttractionsFailure = createAction<string>('attractions/fetchAttractionsFailure'); 


const attractionsSlice = createSlice({
  name: 'attractions',
  initialState,
  reducers: {
    clearAttractionsError: (state) => {
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAttractions, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAttractionsSuccess, (state, action: PayloadAction<Attraction[]>) => {
        state.loading = false;
        state.attractions = action.payload;
      })
      .addCase(fetchAttractionsFailure, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export const { clearAttractionsError } = attractionsSlice.actions;
export default attractionsSlice.reducer;