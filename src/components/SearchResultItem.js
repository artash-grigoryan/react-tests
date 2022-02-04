import React from "react";
import PropTypes from "prop-types";

function SearchResultItem({ id, avatar_url, login, url }) {
  return (
    <div className="search-result-item">
      <a href={url}>
        <img className={"avatar"} src={avatar_url} alt="" />
        <label htmlFor={id}>{login}</label>
      </a>
    </div>
  );
}
SearchResultItem.propTypes = {
  id: PropTypes.number,
  avatar_url: PropTypes.string,
  url: PropTypes.string,
  login: PropTypes.string,
};
export default SearchResultItem;
