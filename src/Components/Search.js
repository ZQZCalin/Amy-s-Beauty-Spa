import { createContext, useContext, useState } from "react";
import css from "../Styles/Navbar.module.css";

const SearchContext = createContext();

function Search(
  focus, setFocus
) {

  const [search, setSearch] = useState("");

  return (
    <SearchContext.Provider value={search, setSearch} >
      <div className={css.search}>
        <input placeholder="search..." onChange={(e) => { setSearch(e.target.value) }} />
      </div>
      {search != "" &&
        <SearchResult />
      }
    </SearchContext.Provider>
  );
}

function SearchResult() {

  const {search, setSearch} = useContext(SearchContext);

  return (
    <div>
      Search Result
    </div>
  );
}

export default Search;