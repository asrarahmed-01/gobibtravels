import { createSlice, createAction, PayloadAction } from '@reduxjs/toolkit'

export interface Blog {
  id: string
  name: string
  role: string
  review: string
  image: string
}

interface BlogsState {
  blogs: Blog[]
  loading: boolean
  error: string | null
}

const initialState: BlogsState = {
  blogs: [],
  loading: false,
  error: null,
}

export const fetchBlogs = createAction('blogs/fetchBlogs')
export const fetchBlogsSuccess = createAction<Blog[]>('blogs/fetchBlogsSuccess')
export const fetchBlogsFailure = createAction<string>('blogs/fetchBlogsFailure')

const blogsSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {
    clearBlogsError: (state) => {
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
      
      .addCase(fetchBlogs, (state) => {
        state.loading = true
        state.error = null
      })
      .addMatcher(
        (action): action is PayloadAction<Blog[]> =>
          action.type === 'blogs/fetchBlogsSuccess',
        (state, action) => {
          state.loading = false
          state.blogs = [...action.payload]
        }
      )
      .addMatcher(
        (action): action is PayloadAction<string> =>
          action.type === 'blogs/fetchBlogsFailure',
        (state, action) => {
          state.loading = false
          state.error = action.payload
        }
      )
  },
})

export const { clearBlogsError } = blogsSlice.actions
export default blogsSlice.reducer