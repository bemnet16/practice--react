import React from "react";
import "./App.css";
// import ExpenseMain from "./expenseTracker/expenseMain";
// import UserInfoMain from "./userInfo/userInfoMain";
import CartMain from "./addToCart/cartMain";
import { AuthContextProvider } from "./addToCart/context/auth-context";
import { CartContextProvider } from "./addToCart/context/cart-context";

function App() {
  return (
    <AuthContextProvider>
      <CartContextProvider>
        <div>
          {/* <ExpenseMain /> */}
          {/* <UserInfoMain /> */}
          <CartMain />
        </div>
      </CartContextProvider>
    </AuthContextProvider>
  );
}

export default App;
