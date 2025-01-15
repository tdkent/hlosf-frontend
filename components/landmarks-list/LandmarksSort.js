import React from 'react';

const LandmarksSort = ({ sortMethod, setSortMethod, setScrollId }) => {
  const handleSelectChange = ({ target }) => {
    sessionStorage.removeItem('scroll-position-id');
    setScrollId(null);
    sessionStorage.setItem('lmSortMethod', target.value);
    setSortMethod(target.value);
  };
  return (
    <div
      id="landmark-sort"
      className="my-8 pl-3">
      <form className="flex items-center">
        <label htmlFor="sort">Sort by:</label>
        <select
          id="sort"
          value={sortMethod || 'number'}
          className="form-select ml-2 rounded-full"
          onChange={handleSelectChange}>
          <option value="number">Number</option>
          <option value="title_short">Name</option>
          <option value="group">Group</option>
        </select>
      </form>
    </div>
  );
};

export default LandmarksSort;
