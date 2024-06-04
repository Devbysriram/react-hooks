import React, { useEffect, useState } from "react";

const Hookuseeffect = () => {
  let [basket, setBasket] = useState([]);
  let [fruit, setFruit] = useState("");
  let [count , setCount] = useState(0)
  
  

  const changeHandler = (e) => {
    setFruit(e.target.value);
  };

  const clickHandler = (e) => {
    e.preventDefault();
    if (fruit.trim() === "") {
      console.log("Enter a fruit");
    } else {
      setBasket([...basket, fruit]);
      
      setFruit("");
    }
  };

  useEffect(()=>{
   
           setCount(basket.length)
    
  } , [basket])

  return (
    <div className="bg-slate-800 text-white h-screen flex flex-col item-center py-4">
      <div className="input w-full flex flex-col items-center">
        <p className="text-center my-4">UseEffect</p>
        <p className="Fruits-count bg-blue-700 px-4 py-2 rounded"> Fruits <span className="bg-black text-white px-3 py-1 rounded-full "> {count} </span> </p>
        <form action="" className="flex flex-col items-center my-4">
          <input
            type="text"
            placeholder="Enter a fruit"
            onChange={(e) => {
              changeHandler(e);
            }}
            value={fruit}
            className="w-80 p-2 text-black"
          />
          <button
            className="bg-blue-700 w-40 p-1 rounded my-2"
            onClick={(e) => {
              clickHandler(e);
            }}
          >
            Add to Basket
          </button>
        </form>
      </div>

      <div className="fruits">
        {basket.length < 1 ? (
          <p className="text-center"> No Fruits available in an array </p>
        ) : (
          basket.map((li) => <p className="text-center"> {li} </p>)
        )}
      </div>
    </div>
  );
};

export default Hookuseeffect;
