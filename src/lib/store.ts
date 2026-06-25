import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./slices/rootReducer";
import rootSaga from "./sagas/rootSaga";

let sagaMiddleware: any;

export const makeStore = () => {
  if (!sagaMiddleware) {
    sagaMiddleware = createSagaMiddleware();
  }

  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }).concat(sagaMiddleware),
  });

 
  if (!(sagaMiddleware as any)._sagaInjected) {
    sagaMiddleware.run(rootSaga);
    (sagaMiddleware as any)._sagaInjected = true;
  }

  return store;
};



export type RootState = ReturnType<ReturnType<typeof makeStore>["getState"]>;
export type AppDispatch = ReturnType<typeof makeStore>["dispatch"];
