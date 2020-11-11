import React from "react";
import "./App.css";
import { Balance } from "./components/Balance-component/Balance-component";
import { Display } from "./components/display-component/Display";
import { Header } from "./components/header-component/header";
import { Input } from "./components/input-component/input";
import { Transaction } from "./components/transaction-component/transaction";
import {GlobalProvider} from "./context/globalContext";

const App = () => {
  alert("Enter positive(+) Value for income and negative(-) value for expense");
  return (
    <GlobalProvider>
      <div className="main">
        <Header />
        <Balance />
        <Display />
        <Transaction />
        <Input />
      </div>
    </GlobalProvider>
  );
};

export default App;
