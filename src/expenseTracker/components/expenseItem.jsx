import React from "react";

function ExpenseItem(props) {
  const month = props.date.toLocaleString("en-US", { month: "short" });
  const year = props.date.getFullYear();
  const date = props.date.toLocaleString("en-US", { day: "2-digit" });
  return (
    <div className="d-flex bg-dark text-secondary p-2 mb-2 rounded-2 justify-content-between align-items-center">
      <div className="d-flex mx-1 align-items-center">
        <div className="px-4 mr-1 text-center text-dark bg-white border border-2 border-primary  rounded-3">
          <p className="month m-0 p-0 h6">{month}</p>
          <p className="year m-0 p-0 h6">{year}</p>
          <h3 className="date">{date}</h3>
        </div>
        <div className="p-2 h5 opacity-75 text-white">{props.name}</div>
      </div>
      <div className="p-2 h5 text-white bg-success rounded-2 px-4 py-2 border border-2 border-info">
        ${props.price}
      </div>
    </div>
  );
}

export default ExpenseItem;
