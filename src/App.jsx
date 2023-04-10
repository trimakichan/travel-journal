import React from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import data from "./data";
console.log(data);

const App = () => {
  const travelData = data.map((item) => {
    return (<Main 
            tData={item}
            key={item.id} />);
  });
  return (
    <div>
      <Header />
      <main>{travelData}</main>
    </div>
  );
};

export default App;
