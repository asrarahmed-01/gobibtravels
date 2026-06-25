
import { call, put, takeEvery } from 'redux-saga/effects'
import { collection, query, getDocs } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import { 
  fetchTours, 
  fetchToursSuccess, 
  fetchToursFailure 
} from '@/lib/slices/toursSlice'
import { Tour } from '@/lib/slices/toursSlice'  

 export default function* fetchToursSaga() {
  try {
    const q = query(collection(db, "tours"))
    const querySnapshot = yield call(getDocs, q)
    const toursData: Tour[] = []

    querySnapshot.forEach((doc) => {
    const data = doc.data()
     toursData.push({
        id: doc.id,
        image: data.image || "",
        title: data.title || "Untitled",
        description: data.description || "No description available",
      })
    })

    yield put(fetchToursSuccess(toursData))
  } catch (error) {
    yield put(fetchToursFailure(String(error)))
  }
}


export function* watchFetchTours() {
  yield takeEvery(fetchTours.type, fetchToursSaga)
}

