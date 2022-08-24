import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  filters: {
    sortByRelease: '-released',
    sortByRating: '-rating',
    platforms: {
      value: 1,
      label: 'Pc'
    }
  }
}

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setSortByRelease: (state, action) => {
      state.filters.sortByRelease = action.payload
    },
    setSortByRating: (state, action) => {
      state.filters.sortByRating = action.payload
    },
    setFilterPlatform: (state, action) => {
      state.filters.platforms = action.payload
    },
    resetFilters: state => {
      state.filters = initialState.filters
    }
  }
})

export const {
  setSortByRelease,
  setSortByRating,
  setFilterPlatform,
  resetFilters
} = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;