import React from 'react'
import ExpensePercentage from './expensesPercentage'

function ExpPercentContainer(props) {
    
   const month_num = props.expenses.map(ex => ex.date.getMonth())
  let moval = [0,0,0,0,0,0,0,0,0,0,0,0]
  month_num.forEach(m => {
    moval[m] += 1
  })
  const tot = moval.reduce((acc,cur)=> acc+cur,0)
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return (
     <div className="row pt-3 my-3  rounded-3 bg-light">
        {
            months.map((month_num,idx) => {
                return  <ExpensePercentage
                key={idx + 1}
                month={month_num}
                perc = {(moval[idx]/tot ) * 100}
              />
            })
        }
     </div>
  )
}

export default ExpPercentContainer