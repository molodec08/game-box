// import {loadMoreFilms, loadMoreSeries} from "@/store/reducers/loadMore.slice";
import {setSortByRelease, setSortByRating, setFilterPlatform, resetFilters} from "./reducers/filters.slice";
import {toggleFilters, toggleMenu} from "./reducers/toggle.slice";
import {setPage} from "./reducers/pagination.slice";
import {setSearch, setVisible} from "./reducers/search.slice";

export {
  setSearch,
  setVisible,
  toggleMenu,
  setSortByRelease,
  setSortByRating,
  setFilterPlatform,
  resetFilters,
  toggleFilters,
  setPage,
  // loadMoreFilms,
  // loadMoreSeries,
}