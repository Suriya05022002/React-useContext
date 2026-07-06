import { useState,useContext} from 'react'
import { datasContext } from "./Home";
import Counter from "./Counter";
function Login()

{

  
    const [pwd1,setPwd1]=useState("");
    const [pwd2,setPwd2]=useState("");


    const[same,setSame]=useState(true);

    function handlePwd1change(event)
        {
            setPwd1(event.target.value);
        }

function handlePwd2change(event)
{
 setPwd2(event.target.value);
      if(pwd1 == event.target.value)
{
 console.log("same");
 setSame(true);
}   else
    {
    console.log("Notsame");
    setSame(false);
    }
}
const dataa = useContext (datasContext);
 return(
       <> 
  <h2>{dataa}</h2>
  <Counter/>
<form className="mb-5" style={
  {
    width:"50%", margin:"auto"
  }}>
  <div className="mb-3">
    <label  className="form-label">Email address</label>
    <input type="email" className="form-control" ></input>

  </div>
  <div className="mb-3">
    <label  className="form-label">Password</label>
    <input value={pwd1}type="password" onChange={handlePwd1change}className="form-control" ></input>
  </div>
  <div className="mb-3">
    <label  className="form-label">Re-EnterPassword</label>
    <input value={pwd2} onChange={handlePwd2change}type="password" className="form-control" ></input>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" ></input>
    <label className="form-check-label">I Agree</label>
  </div>
  {!same && <p>password dont match</p>}
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

    </>
    )
}
export default Login