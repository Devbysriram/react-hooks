import React, { useEffect, useState } from "react";

const Conditionalrendering = () => {
  
  let [basket , setBasket] = useState([])
  let [fruit,setFruit] = useState('')

  const changeHandler = (e) =>{
    setFruit(e.target.value)
  }

  const clickHandler = () =>{
    setBasket([...basket , fruit])
    setFruit('')
  }


  return (
    <div className="bg-slate-800 text-white h-screen flex flex-col item-center py-4">
      <div className="input w-full flex flex-col items-center">
        <input
          type="text"
          placeholder="Enter a fruit"
          onChange={(e) => {
            changeHandler(e)
          }}
          value={fruit}
          className="w-80 p-2 text-black"
        />
        <button className="bg-blue-700 w-40 p-1 rounded my-2" onClick={()=>{clickHandler()}}>Add to Basket</button>
      </div>

      <div className="fruits">
        { basket.length < 1 ? 
            <p className="text-center"> No Fruits available in an array </p>
        : 
            basket.map( li => ( <p className="text-center"> {li} </p> ))
        }
      </div>
    </div>
  );
};

export default Conditionalrendering;
