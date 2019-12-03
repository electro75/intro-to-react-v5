import React from "react";

const SearchParams = () => {
  const location = "Seattle, WA";

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">Location</label>
        <input id="location" value={location} />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
