import { put, takeLatest, call } from "redux-saga/effects"
import { collection, getDocs } from "firebase/firestore"
import { db } from "@/lib/firebase"
import {
  fetchHomeCards,
  fetchHomeCardsSuccess,
  fetchHomeCardsFailure,
} from "@/lib/slices/homeSlice"

function* fetchHomeCardsSaga() {
  try {
    const snapshot = yield call(getDocs, collection(db, "HomeCard"))
    const cards = snapshot.docs.map((doc: any) => ({
      id: doc.id,                   
      title: doc.data().title,
      description: doc.data().description,
      link: doc.data().link,
      gradient:
        doc.data().gradient ??
        "bg-gradient-to-r from-blue-500 to-indigo-600",
    }))

    yield put(fetchHomeCardsSuccess(cards))
  } catch (error) {
    yield put(fetchHomeCardsFailure("Failed to load cards"))
  }
}

export function* watchFetchHomeCards() {
  yield takeLatest(fetchHomeCards.type, fetchHomeCardsSaga)
}
