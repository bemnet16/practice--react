import React from 'react'

const FilterExpenses =(props) => {


 const handleSelect = (year) => {
    props.setSelectedYear(year);
  };

  return (
    <div className="filter text-secondary d-flex justify-content-between">
          <h6>Filter by year</h6>
          <select
            value={props.selectedYear}
            onChange={(e) => handleSelect(e.target.value)}
            className="p-1 px-2 rounded-1"
            name="year"
            id="year"
          >
            <option className="" value="all">
              All
            </option>
            <option className="" value="2021">
              2021
            </option>
            <option className="" value="2022">
              2022
            </option>
            <option className="" value="2023">
              2023
            </option>
          </select>
        </div>
  )
}

export default FilterExpenses