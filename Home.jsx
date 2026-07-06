import { Link } from "react-router-dom";
import { useState, useEffect, createContext } from "react";
import Login from "./Login";

export const datasContext = createContext();

function Home() {
    const[posts,setPosts]=useState(null)
   
    const dataa="This is useContext";

    useEffect( () => {
         const controller = new AbortController();
        setTimeout  (()=>
{
       
        const signal = controller.signal;

    fetch("http://localhost:3000/posts",{signal})
    .then(Response => {
        return Response.json()
    
    })
    .then ((data)=>
    {
        console.log(data);
        setPosts (data);
    }).catch (err=> {
        console.log(err);
    }) },5000);
    
    //cleanup Fn
     return()=>
    {
        
          controller.abort();
    console.log("Unmounted");
    }
},[]);

    return(
        <>
          <div className="container">
          
            <Link to="/login">Login</Link>
         <datasContext.Provider value={dataa}>
             <Login/>
        </datasContext.Provider>
            <div className="row justify-content-center m-3">
            {posts && 
            posts.map ((post) => (
                    <div key={post.id}className="card m-3" style ={{width:"18rem"}}>
                      <div className="card-body">
                        <h5 className="card-title">{post.title}</h5>
                        <p className ="card-text">{post.content}</p>
                       </div>
                    </div>
                 ))}
            </div>
            
          </div>
          
        </>
    );
}
export default Home
