import React, { useState } from "react";

const HookUseState = () => {
  const [name, setName] = useState(" Your Name Will be Displayed Here");


  return (
    <div className="bg-slate-800 text-white h-auto flex flex-col item-center ">
      <p className="text-center py-4">Lets Learn React-Hooks (Use State)</p>

      <div className="input flex flex-col w-full items-center my-5">
        <input type="text" placeholder="Enter Your Name"onChange={ (e)=>{setName(e.target.value)}} className="w-80 p-2 text-black" />
        <button className="bg-blue-700 w-40 p-1 rounded my-2" onClick={ ()=>{setName("Your Name Will be Displayed Here")}} > Reset</button>
      </div>

      <p className="text-2xl text-center">{name}</p>
    </div>
  );
};

export default HookUseState;
