import { call, put, takeEvery } from "redux-saga/effects";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import {
  fetchAttractions,
  fetchAttractionsSuccess,
  fetchAttractionsFailure,
} from "@/lib/slices/attractionsSlice";
import { setLoading } from "@/lib/slices/uiSlice";

function* fetchAttractionsSaga() {
  try {
    yield put(setLoading(true));

    const q = query(collection(db, "attractions"));
    const querySnapshot = yield call(getDocs, q);

    const attractions = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      attractions.push({
        id: doc.id,
        name: data.name || "Untitled",
        title: data.title || "Untitled",
        description: data.description || "No description available",
        image: data.image || "",
        location: data.location || "Unknown",
        duration: data.duration || "N/A",
        price: data.price || "N/A",
        activity: data.activity || "N/A",
        age: data.age || "All ages",
      });
    });

    yield put(fetchAttractionsSuccess(attractions));
  } catch (error: any) {
    yield put(fetchAttractionsFailure(error.message || "Failed to load attractions"));
  }

  
  yield put(setLoading(false));
}

export function* watchFetchAttractions() {
  yield takeEvery(fetchAttractions.type, fetchAttractionsSaga);
}

