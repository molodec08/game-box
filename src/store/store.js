import {configureStore} from "@reduxjs/toolkit";
import {createWrapper} from "next-redux-wrapper";
import {gameBoxAPI} from "../services/GameboxService";
import {searchReducer} from "./reducers/search.slice";
// import {loadReducer} from "./reducers/loadMore.slice";
import {paginationReducer} from "./reducers/pagination.slice";
import {filtersReducer} from "./reducers/filters.slice";
import {toggleReducer} from "./reducers/toggle.slice";
import {useMemo} from 'react'

let store

export const initStore = (preloadedState = {}) => {
  return configureStore({
    reducer: {
      searchReducer,
      filtersReducer,
      // loadReducer,
      paginationReducer,
      toggleReducer,
      [gameBoxAPI.reducerPath]: gameBoxAPI.reducer,
    },
    preloadedState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(gameBoxAPI.middleware),
  });
}

export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState)

  if (preloadedState && store) {
    _store = initStore({...store.getState(), ...preloadedState})
  }

  if (typeof window === 'undefined') return _store
  if (!store) store = _store

  return _store
}

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState])
  return store
}

// export type AppStore = ReturnType
// export type AppDispatch = AppStore['dispatch']
// export type RootState = ReturnType

export const wrapper = createWrapper(initStore, {debug: true})