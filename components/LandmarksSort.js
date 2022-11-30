import React from "react"

const LandmarksSort = ({ setSortMethod }) => {
  const handleSelectChange = ({ target }) => {
    setSortMethod(target.value)
  }
  return (
    <div className="mt-4 mb-2">
      <form className="flex items-center justify-center">
        <label htmlFor="sort">Sort by:</label>
        <select
          id="sort"
          className="form-select ml-2 rounded-full"
          onChange={handleSelectChange}>
          <option value="number" selected>
            Number
          </option>
          <option value="title_short">Name</option>
          <option value="group">Group</option>
        </select>
      </form>
    </div>
  )
}

export default LandmarksSort
