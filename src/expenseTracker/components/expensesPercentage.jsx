import React from "react";

function ExpensePercentage(props) {
  return (
    <div className="col-1">
      <div className="Slider border border-primary py-5 mx-auto rounded-5 w-50 position-relative overflow-hidden">
        <div
          className="position-absolute bg-dark w-100"
          style={{ bottom: "0px", left: "0px", height: `${props.perc }%`, transition: "0.7s ease" }}
        ></div>
      </div>
      <p className="">{props.month}</p>
    </div>
  );
}

export default ExpensePercentage;
