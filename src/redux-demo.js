const redux = require("redux");

const red = (state, action) => {
  return {
    counter: state.counter + 1,
  };
};

const store = redux.createState(red);
