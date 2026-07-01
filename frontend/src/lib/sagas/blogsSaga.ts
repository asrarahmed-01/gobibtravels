
import { call, put, takeEvery } from 'redux-saga/effects'
import { collection, query, getDocs } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import {
  fetchBlogs,
  fetchBlogsSuccess,
  fetchBlogsFailure,
} from '@/lib/slices/blogsSlice'
import { Blog } from '@/lib/slices/blogsSlice'

function* fetchBlogsSaga() {
  try {
    const q = query(collection(db, 'reviews'))
    const querySnapshot = yield call(getDocs, q)
    const blogsData: Blog[] = []

    querySnapshot.forEach((doc: any) => {
      const data = doc.data()
      blogsData.push({
        id: doc.id,
        name: data.name || 'Anonymous',
        role: data.role || 'Traveler',
        review: data.review || 'No review available',
        image: data.image || '',
      })
    })

    yield put(fetchBlogsSuccess(blogsData))
  } catch (error: any) {
    yield put(fetchBlogsFailure(error.message || 'Failed to load blogs'))
  }
}

export function* watchFetchBlogs() {
  yield takeEvery(fetchBlogs.type, fetchBlogsSaga)
}

export default watchFetchBlogs