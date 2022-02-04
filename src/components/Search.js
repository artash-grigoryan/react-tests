import React, { useEffect, useState } from "react";
import SearchResultItem from "./SearchResultItem";
import { useQuery } from "../hooks/useQuery";
import { searchUsers } from "../services/searchUsers";

function Search() {
  let [query, setQuery] = useState("");
  const { data, error, refetch } = useQuery(searchUsers, {
    variables: { query },
  });

  useEffect(() => {
    if (query) {
      refetch();
    }
  }, [query]);

  return (
    <div className="search">
      <h3>[front/react] Github user search</h3>
      <input type="text" onChange={(e) => setQuery(e.target.value)} />
      <div className={"search-result"}>
        {data.items &&
          data.items.map((user, index) => (
            <div key={index}>
              <SearchResultItem {...user} />
            </div>
          ))}
        {error !== "" && error}
      </div>
    </div>
  );
}

export default Search;
