import { useEffect, useState, useContext } from "react";
import { datasContext } from "./Home";

function Counter(){
    const[count,setCount]=useState(0);
    const dataa = useContext (datasContext);
    function increment()
    {
      
         setCount (preCount=>preCount+1);
          setCount (preCount=>preCount+1);
    }
         useEffect ( ()=> {
            console.log(count);
         },[count]);

         return(
            <>
            <h1>{dataa}</h1>
            <h2 className="m-5">{count}</h2>
            <button className="m-5" onClick={increment}>UP</button>
            
            </>
         );
        
    }
  

export default Counter