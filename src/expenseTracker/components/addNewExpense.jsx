import React, {useState} from 'react'

const AddNewExpense = (props) =>{

  const [isInp, setIsInp] = useState(true);
  const [inps, setInps] = useState({ name: "", price: "", date: new Date() });



   const handleChange = (e) => {
    let na = e.target.name;
    let val = e.target.value;
    if (na === "date") {
      let temp = val.split("-");
      val = new Date(temp[0], temp[1], temp[2]);
    }
    setInps({ ...inps, [na]: val });
  };

  const handleSave = () => {
    if(inps.name ==="" || inps.price === ""){
      alert("You must fill 'NAME' and 'PRICCE' !!!")
    }else{
      props.onAddExpense(inps)
      setInps({ name: "", price: "", date: new Date() });
    }
  };

  return (
     <div className="expense container w-50 bg-primary py-3 my-4 rounded-3 text-center">
        {isInp && (
          <button
            onClick={() => setIsInp(!isInp)}
            className="btn btn-info text-white rounded-2 px-4 py-2 "
          >
            Add New Expense
          </button>
        )}
        {!isInp && (
          <div>
            <label
              className="container d-flex justify-content-center  my-1 "
              htmlFor="name"
            >
              <h5 className=" me-3  text-white">Item : </h5>
              <input
                className="w-50 rounded-2 px-2"
                onChange={handleChange}
                value={inps.name}
                type="text"
                name="name"
              />
            </label>
            <label
              className="container d-flex justify-content-center  my-1 "
              htmlFor="price"
            >
              <h5 className=" me-3  text-white">Price : </h5>
              <input
                className="w-50 rounded-2 px-2"
                onChange={handleChange}
                value={inps.price}
                type="number"
                name="price"
              />
            </label>
            <label
              className="container d-flex justify-content-center  my-1 "
              htmlFor="date"
            >
              <h5 className=" me-3  text-white">Date : </h5>
              <input
                className="w-50 rounded-2 px-2"
                onChange={handleChange}
                value={inps.date}
                type="date"
                name="date"
              />
            </label>
            <button
              onClick={handleSave}
              className="btn btn-info text-white rounded-2 px-3 py-1 ms-5 mt-3"
            >
              Save Expense
            </button>
            <button
              onClick={() => setIsInp(!isInp)}
              className="btn btn-info text-white rounded-2 px-4 py-1  ms-3 mt-3"
            >
              Cancle
            </button>
          </div>
        )}
      </div>
  )
}

export default AddNewExpense