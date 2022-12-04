import React, { useEffect, useState } from "react"

const LandmarksSort = ({ sortMethod, setSortMethod }) => {
  const handleSelectChange = ({ target }) => {
    localStorage.setItem("lmSortMethod", target.value)
    setSortMethod(target.value)
  }
  return (
    <div className="mt-4 mb-2">
      <form className="flex items-center justify-center">
        <label htmlFor="sort">Sort by:</label>
        <select
          id="sort"
          value={sortMethod || "number"}
          className="form-select ml-2 rounded-full"
          onChange={handleSelectChange}>
          <option value="number">Number</option>
          <option value="title_short">Name</option>
          <option value="group">Group</option>
        </select>
      </form>
    </div>
  )
}

export default LandmarksSort
